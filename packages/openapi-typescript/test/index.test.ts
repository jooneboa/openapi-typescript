import { URL } from "node:url";
import openapiTS from "../dist/index.js";
import type { OpenAPI3 } from "../src/types.js";
import { readFile } from "./helpers.js";

const BOILERPLATE = `/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

`;

const ONE_OF_TYPE_HELPERS = `
/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only] ? Only : T extends [infer A, infer B, ...infer Rest] ? OneOf<[XOR<A, B>, ...Rest]> : never;
`;

const WITH_REQUIRED_TYPE_HELPERS = `
/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
`;

beforeAll(() => {
  vi.spyOn(process, "exit").mockImplementation(((code: number) => {
    throw new Error(`Process exited with error code ${code}`);
  }) as any);
});

describe("openapiTS", () => {
  beforeAll(() => {
    vi.spyOn(process, "exit").mockImplementation((() => {}) as any);
  });

  describe("3.0", () => {
    /** test that custom $refs are ignored rather than throw errors */
    test("custom properties", async () => {
      const generated = await openapiTS({
        openapi: "3.0",
        info: { title: "Test", version: "1.0" },
        components: {
          schemas: {
            Base: {
              type: "object",
              additionalProperties: { type: "string" },
            },
            SchemaType: {
              oneOf: [{ $ref: "#/components/schemas/Base" }, { $ref: "#/x-swagger-bake/components/schemas/Extension" }],
            },
          },
        },
      });
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Base: {
      [key: string]: string;
    };
    SchemaType: components["schemas"]["Base"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });

    /** test that component examples aren’t parsed (they may be invalid / pseudocode) */
    test("components.examples are skipped", async () => {
      const generated = await openapiTS({
        openapi: "3.0",
        info: { title: "Test", version: "1.0" },
        components: {
          schemas: {
            Example: {
              type: "object",
              properties: {
                name: { type: "string" },
                $ref: { type: "string" },
              },
              required: ["name", "$ref"],
            },
          },
          examples: {
            Example: {
              value: {
                name: "Test",
                $ref: "fake.yml#/components/schemas/Example",
              },
            },
          },
        },
      });
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Example: {
      name: string;
      $ref: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });

    /** test that $ref’d parameters make it into the paths object correctly */
    test("parameter $refs", async () => {
      const generated = await openapiTS(new URL("./fixtures/parameters-test.yaml", import.meta.url));
      expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/endpoint": {
    /** @description OK */
    get: {
      parameters: {
        path: {
          /** @description This overrides parameters */
          local_param_a: number;
          local_ref_a: components["parameters"]["local_ref_a"];
          remote_ref_a: external["_parameters-test-partial.yaml"]["remote_ref_a"];
          local_ref_b: components["parameters"]["local_ref_b"];
          remote_ref_b: external["_parameters-test-partial.yaml"]["remote_ref_b"];
        };
      };
    };
    parameters: {
      path: {
        local_param_a: string;
        local_ref_a: components["parameters"]["local_ref_a"];
        remote_ref_a: external["_parameters-test-partial.yaml"]["remote_ref_a"];
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: never;
  responses: never;
  parameters: {
    local_ref_a: string;
    local_ref_b: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export interface external {
  "_parameters-test-partial.yaml": {
    remote_ref_a: string;
    remote_ref_b: string;
  };
}

export type operations = Record<string, never>;
`);
    });

    /** test that $ref’d parameters, operation parameters, and method parameters all make it into the operation object correctly */
    test("operations keep all parameters", async () => {
      const schema: OpenAPI3 = {
        openapi: "3.0",
        info: { title: "Test", version: "1.0" },
        paths: {
          "/post/{id}": {
            get: {
              operationId: "getPost",
              parameters: [{ name: "format", in: "query", schema: { type: "string" } }, { $ref: "#/components/parameters/post_id" }],
              responses: {
                200: {
                  description: "OK",
                  content: {
                    "application/json": { schema: { $ref: "#/components/schemas/Post" } },
                  },
                },
              },
            },
            parameters: [{ name: "revision", in: "query", schema: { type: "number" } }],
          },
        },
        components: {
          schemas: {
            Post: {
              type: "object",
              properties: {
                id: { type: "number" },
                title: { type: "string" },
                body: { type: "string" },
                published_at: { type: "number" },
              },
              required: ["id", "title", "body"],
            },
          },
          parameters: {
            post_id: {
              name: "post_id",
              in: "path",
              schema: { type: "string" },
              required: true,
            },
          },
        },
      };
      const generated = await openapiTS(schema);
      expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/post/{id}": {
    get: operations["getPost"];
    parameters: {
      query?: {
        revision?: number;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Post: {
      id: number;
      title: string;
      body: string;
      published_at?: number;
    };
  };
  responses: never;
  parameters: {
    post_id: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  getPost: {
    parameters: {
      query?: {
        revision?: number;
        format?: string;
      };
      path: {
        post_id: components["parameters"]["post_id"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["Post"];
        };
      };
    };
  };
}
`);
    });

    /** test that remote $refs are loaded correctly */
    test("remote $refs", async () => {
      const generated = await openapiTS(new URL("./fixtures/remote-ref-test.yaml", import.meta.url));
      expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: {
            "application/json": components["schemas"]["RemoteType"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    RemoteType: external["remote-ref-test-2.yaml"]["components"]["schemas"]["SchemaType"];
    RemotePartialType: external["_schema-test-partial.yaml"]["PartialType"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export interface external {
  "_schema-test-partial.yaml": {
    PartialType: {
      foo: string;
    };
  };
  "remote-ref-test-2.yaml": {
    paths: {
      "/": {
        get: {
          responses: {
            /** @description OK */
            200: {
              content: never;
            };
          };
        };
      };
    };
    webhooks: Record<string, never>;
    components: {
      schemas: {
        SchemaType: {
          foo?: string;
          bar?: number;
        };
      };
      responses: never;
      parameters: never;
      requestBodies: never;
      headers: never;
      pathItems: never;
    };
  };
}

export type operations = Record<string, never>;
`);
    });

    /** test that path item objects accept $refs at the top level */
    test("path object $refs", async () => {
      const generated = await openapiTS(new URL("./fixtures/path-object-refs.yaml", import.meta.url));
      expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  /** @description Remote Ref */
  "/get-item": external["_path-object-refs-paths.yaml"]["GetItemOperation"];
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export interface external {
  "_path-object-refs-paths.yaml": {
    GetItemOperation: {
      get: {
        responses: {
          /** @description OK */
          200: {
            content: {
              "application/json": external["_path-object-refs-paths.yaml"]["Item"];
            };
          };
        };
      };
    };
    Item: {
      id: string;
      name: string;
    };
  };
}

export type operations = Record<string, never>;
`);
    });

    test("anchor $refs", async () => {
      const generated = await openapiTS(new URL("./fixtures/anchor-with-ref-test-2.yaml", import.meta.url));
      expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/": {
    get: {
      responses: {
        /** @description OK */
        200: {
          content: never;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    obj: external["anchor-with-ref-test.yaml"]["components"]["schemas"]["anchorTest"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export interface external {
  "anchor-with-ref-test.yaml": {
    paths: {
      "/": {
        get: {
          responses: {
            /** @description OK */
            200: {
              content: never;
            };
          };
        };
      };
    };
    webhooks: Record<string, never>;
    components: {
      schemas: {
        test: {
          metadata?: external["anchor-with-ref-test.yaml"]["components"]["schemas"]["metadata"];
        };
        anchorTest: {
          metadata?: external["anchor-with-ref-test.yaml"]["components"]["schemas"]["metadata"];
        };
        metadata: {
          [key: string]: unknown;
        };
      };
      responses: never;
      parameters: never;
      requestBodies: never;
      headers: never;
      pathItems: never;
    };
  };
}

export type operations = Record<string, never>;
`);
    });
  });

  describe("3.1", () => {
    test("discriminator (allOf)", async () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "test", version: "1.0" },
        components: {
          schemas: {
            Pet: {
              type: "object",
              required: ["petType"],
              properties: { petType: { type: "string" } },
              discriminator: {
                propertyName: "petType",
                mapping: { dog: "Dog" },
              },
            },
            Cat: {
              allOf: [
                { $ref: "#/components/schemas/Pet" },
                {
                  type: "object",
                  properties: { name: { type: "string" } },
                },
              ],
            },
            Dog: {
              allOf: [
                { $ref: "#/components/schemas/Pet" },
                {
                  type: "object",
                  properties: { bark: { type: "string" } },
                },
              ],
            },
            Lizard: {
              allOf: [
                { $ref: "#/components/schemas/Pet" },
                {
                  type: "object",
                  properties: { lovesRocks: { type: "boolean" } },
                },
              ],
            },
          },
        },
      };
      const generated = await openapiTS(schema);
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Pet: {
      petType: string;
    };
    Cat: {
      petType: "Cat";
    } & Omit<components["schemas"]["Pet"], "petType"> & {
      name?: string;
    };
    Dog: {
      petType: "dog";
    } & Omit<components["schemas"]["Pet"], "petType"> & {
      bark?: string;
    };
    Lizard: {
      petType: "Lizard";
    } & Omit<components["schemas"]["Pet"], "petType"> & {
      lovesRocks?: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });

    test("discriminator with explicit mapping (oneOf)", async () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "test", version: "1.0" },
        components: {
          schemas: {
            Pet: {
              type: "object", // note: this is “wrong” but added because this should be ignored (fixes a bug)
              oneOf: [{ $ref: "#/components/schemas/Cat" }, { $ref: "#/components/schemas/Dog" }, { $ref: "#/components/schemas/Lizard" }],
              discriminator: {
                propertyName: "petType",
                mapping: {
                  cat: "#/components/schemas/Cat",
                  dog: "#/components/schemas/Dog",
                  lizard: "#/components/schemas/Lizard",
                },
              },
            } as any,
            Cat: {
              type: "object",
              properties: {
                name: { type: "string" },
                petType: { type: "string", enum: ["cat"] },
              },
              required: ["petType"],
            },
            Dog: {
              type: "object",
              properties: {
                bark: { type: "string" },
                petType: { type: "string", enum: ["dog"] },
              },
              required: ["petType"],
            },
            Lizard: {
              type: "object",
              properties: {
                lovesRocks: { type: "boolean" },
                petType: { type: "string", enum: ["lizard"] },
              },
              required: ["petType"],
            },
          },
        },
      };
      const generated = await openapiTS(schema);
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Pet: components["schemas"]["Cat"] | components["schemas"]["Dog"] | components["schemas"]["Lizard"];
    Cat: {
      name?: string;
      /** @enum {string} */
      petType: "cat";
    };
    Dog: {
      bark?: string;
      /** @enum {string} */
      petType: "dog";
    };
    Lizard: {
      lovesRocks?: boolean;
      /** @enum {string} */
      petType: "lizard";
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });

    test("discriminator with implicit mapping (oneOf)", async () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "test", version: "1.0" },
        components: {
          schemas: {
            Pet: {
              oneOf: [{ $ref: "#/components/schemas/Cat" }, { $ref: "#/components/schemas/Dog" }, { $ref: "#/components/schemas/Lizard" }],
              discriminator: {
                propertyName: "petType",
              },
            } as any,
            Cat: {
              type: "object",
              properties: {
                name: { type: "string" },
                petType: { type: "string", enum: ["cat"] },
              },
              required: ["petType"],
            },
            Dog: {
              type: "object",
              properties: {
                bark: { type: "string" },
                petType: { type: "string", enum: ["dog"] },
              },
              required: ["petType"],
            },
            Lizard: {
              type: "object",
              properties: {
                lovesRocks: { type: "boolean" },
                petType: { type: "string", enum: ["lizard"] },
              },
              required: ["petType"],
            },
            Person: {
              type: "object",
              required: ["pet"],
              properties: {
                pet: { oneOf: [{ $ref: "#/components/schemas/Pet" }] },
              },
            },
          },
        },
      };
      const generated = await openapiTS(schema);
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Pet: components["schemas"]["Cat"] | components["schemas"]["Dog"] | components["schemas"]["Lizard"];
    Cat: {
      name?: string;
      /** @enum {string} */
      petType: "cat";
    };
    Dog: {
      bark?: string;
      /** @enum {string} */
      petType: "dog";
    };
    Lizard: {
      lovesRocks?: boolean;
      /** @enum {string} */
      petType: "lizard";
    };
    Person: {
      pet: components["schemas"]["Pet"];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });

    test("$ref properties", async () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "Test", version: "1.0" },
        components: {
          schemas: {
            ObjRef: {
              type: "object",
              properties: {
                base: { $ref: "#/components/schemas/Entity/properties/foo" },
              },
            },
            AllOf: {
              allOf: [{ $ref: "#/components/schemas/Entity/properties/foo" }, { $ref: "#/components/schemas/Thingy/properties/bar" }],
            },
          },
        },
      };
      const generated = await openapiTS(schema);
      expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    ObjRef: {
      base?: components["schemas"]["Entity"]["foo"];
    };
    AllOf: components["schemas"]["Entity"]["foo"] & components["schemas"]["Thingy"]["bar"];
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
    });
  });

  describe("options", () => {
    describe("exportTypes", () => {
      test("false", async () => {
        const generated = await openapiTS(
          {
            openapi: "3.1",
            info: { title: "Test", version: "1.0" },
            components: {
              schemas: {
                User: {
                  type: "object",
                  properties: { name: { type: "string" }, email: { type: "string" } },
                  required: ["name", "email"],
                },
              },
            },
          },
          { exportType: false },
        );
        expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    User: {
      name: string;
      email: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });

      test("true", async () => {
        const generated = await openapiTS(
          {
            openapi: "3.1",
            info: { title: "Test", version: "1.0" },
            components: {
              schemas: {
                User: {
                  type: "object",
                  properties: { name: { type: "string" }, email: { type: "string" } },
                  required: ["name", "email"],
                },
              },
            },
          },
          { exportType: true },
        );
        expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export type components = {
  schemas: {
    User: {
      name: string;
      email: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
};

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });

    describe("pathParamsAsTypes", () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "Test", version: "1.0" },
        paths: {
          "/user/{user_id}": {
            parameters: [{ name: "user_id", in: "path" }],
          },
        },
      };

      test("false", async () => {
        const generated = await openapiTS(schema, { pathParamsAsTypes: false });
        expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/user/{user_id}": {
    parameters: {
      path: {
        user_id: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });

      test("true", async () => {
        const generated = await openapiTS(schema, { pathParamsAsTypes: true });
        expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  [path: \`/user/\${string}\`]: {
    parameters: {
      path: {
        user_id: string;
      };
    };
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });

    describe("pathParamsAsTypes (with nested parameters)", () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "Test", version: "1.0" },
        paths: {
          "/user/{user_id}": {
            get: {
              parameters: [{ name: "user_id", in: "path" }],
            },
            put: {
              parameters: [{ name: "user_id", in: "path" }],
            },
          },
        },
      };

      test("false", async () => {
        const generated = await openapiTS(schema, { pathParamsAsTypes: false });
        expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  "/user/{user_id}": {
    get: {
      parameters: {
        path: {
          user_id: string;
        };
      };
    };
    put: {
      parameters: {
        path: {
          user_id: string;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });

      test("true", async () => {
        const generated = await openapiTS(schema, { pathParamsAsTypes: true });
        expect(generated).toBe(`${BOILERPLATE}
export interface paths {
  [path: \`/user/\${string}\`]: {
    get: {
      parameters: {
        path: {
          user_id: string;
        };
      };
    };
    put: {
      parameters: {
        path: {
          user_id: string;
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export type components = Record<string, never>;

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });

    describe("transform/postTransform", () => {
      const schema: OpenAPI3 = {
        openapi: "3.1",
        info: { title: "Test", version: "1.0" },
        components: {
          schemas: {
            Date: { type: "string", format: "date-time" },
          },
        },
      };

      test("transform", async () => {
        const generated = await openapiTS(schema, {
          // @ts-expect-error
          transform(node) {
            if ("format" in node && node.format === "date-time") return "Date";
          },
        });
        expect(generated).toBe(`${BOILERPLATE}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Format: date-time */
    Date: Date;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });

      test("postTransform (with inject)", async () => {
        const inject = `type DateOrTime = Date | number;\n`;
        const generated = await openapiTS(schema, {
          // @ts-expect-error
          postTransform(type, options) {
            if (options.path.includes("Date")) return "DateOrTime";
          },
          inject,
        });
        expect(generated).toBe(`${BOILERPLATE}
${inject}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** Format: date-time */
    Date: DateOrTime;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });

    describe("OneOf type helpers", () => {
      test("should be added only when used", async () => {
        const generated = await openapiTS(
          {
            openapi: "3.1",
            info: { title: "Test", version: "1.0" },
            components: {
              schemas: {
                User: {
                  oneOf: [
                    {
                      type: "object",
                      properties: { firstName: { type: "string" } },
                    },
                    {
                      type: "object",
                      properties: { name: { type: "string" } },
                    },
                  ],
                },
              },
            },
          },
          { exportType: false },
        );
        expect(generated).toBe(`${BOILERPLATE}${ONE_OF_TYPE_HELPERS}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    User: OneOf<[{
      firstName?: string;
    }, {
      name?: string;
    }]>;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });

    describe("WithRequired type helpers", () => {
      test("should be added only when used", async () => {
        const generated = await openapiTS(
          {
            openapi: "3.1",
            info: { title: "Test", version: "1.0" },
            components: {
              schemas: {
                User: {
                  allOf: [
                    {
                      type: "object",
                      properties: { firstName: { type: "string" }, lastName: { type: "string" } },
                    },
                    {
                      type: "object",
                      properties: { middleName: { type: "string" } },
                    },
                  ],
                  required: ["firstName", "lastName"],
                },
              },
            },
          },
          { exportType: false },
        );
        expect(generated).toBe(`${BOILERPLATE}${WITH_REQUIRED_TYPE_HELPERS}
export type paths = Record<string, never>;

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    User: WithRequired<{
      firstName?: string;
      lastName?: string;
    } & {
      middleName?: string;
    }, "firstName" | "lastName">;
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
`);
      });
    });
  });

  it("does not mutate original reference", async () => {
    const schema: OpenAPI3 = {
      openapi: "3.1",
      info: { title: "test", version: "1.0" },
      components: {},
      paths: {
        "/": {
          get: {
            responses: {
              200: {
                description: "ok",
                $ref: "#/components/schemas/OKResponse",
              },
            },
          },
        },
      },
    };
    const before = JSON.stringify(schema);
    await openapiTS(schema);
    const after = JSON.stringify(schema);
    expect(before).toBe(after);
  });

  // note: this tests the Node API; the snapshots in cli.test.ts test the CLI
  describe("snapshots", () => {
    const EXAMPLES_DIR = new URL("../examples/", import.meta.url);

    describe("GitHub", () => {
      test("default options", async () => {
        const generated = await openapiTS(new URL("./github-api.yaml", EXAMPLES_DIR));
        expect(generated).toBe(readFile(new URL("./github-api.ts", EXAMPLES_DIR)));
      }, 30000);
    });
    describe("GitHub (next)", () => {
      test("default options", async () => {
        const generated = await openapiTS(new URL("./github-api-next.yaml", EXAMPLES_DIR));
        expect(generated).toBe(readFile(new URL("./github-api-next.ts", EXAMPLES_DIR)));
      }, 30000);
    });
    describe("Octokit GHES 3.6 Diff to API", () => {
      test("default options", async () => {
        const generated = await openapiTS(new URL("./octokit-ghes-3.6-diff-to-api.json", EXAMPLES_DIR));
        expect(generated).toBe(readFile(new URL("./octokit-ghes-3.6-diff-to-api.ts", EXAMPLES_DIR)));
      }, 30000);
    });
    describe("Stripe", () => {
      test("default options", async () => {
        const generated = await openapiTS(new URL("./stripe-api.yaml", EXAMPLES_DIR));
        expect(generated).toBe(readFile(new URL("./stripe-api.ts", EXAMPLES_DIR)));
      }, 30000);
    });
    describe("DigitalOcean", () => {
      // this test runs too slowly on macos / windows in GitHub Actions (not not natively)
      test.skipIf(process.env.CI_ENV === "macos" || process.env.CI_ENV === "windows")(
        "default options",
        async () => {
          const generated = await openapiTS(new URL("./digital-ocean-api/DigitalOcean-public.v2.yaml", EXAMPLES_DIR));
          expect(generated).toBe(readFile(new URL("./digital-ocean-api.ts", EXAMPLES_DIR)));
        },
        60000,
      );
    });
  });
});
