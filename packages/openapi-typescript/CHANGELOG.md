# openapi-typescript

## 6.4.5

### Patch Changes

- [#1280](https://github.com/drwpow/openapi-typescript/pull/1280) [`50441d0`](https://github.com/drwpow/openapi-typescript/commit/50441d048b8724d1ec31d20a1583c8748b7ddc99) Thanks [@pvanagtmaal](https://github.com/pvanagtmaal)! - Fix invalid typescript for empty request bodies, fix headers being left out when response body is omitted

- [#1289](https://github.com/drwpow/openapi-typescript/pull/1289) [`7f452fa`](https://github.com/drwpow/openapi-typescript/commit/7f452fa00044c7191c2721b6691178158f97940f) Thanks [@adamschoenemann](https://github.com/adamschoenemann)! - Fixed a bug where references to types with discriminators with implicit mappings would generate incorrect types

## 6.4.4

### Patch Changes

- [#1281](https://github.com/drwpow/openapi-typescript/pull/1281) [`ebd31ff`](https://github.com/drwpow/openapi-typescript/commit/ebd31ff3d143dbe8e4d91a4ba18b110ff6656dd0) Thanks [@pvanagtmaal](https://github.com/pvanagtmaal)! - Refactor CLI path handling, fixing several bugs

## 6.4.3

### Patch Changes

- [#1287](https://github.com/drwpow/openapi-typescript/pull/1287) [`8a9d8ed`](https://github.com/drwpow/openapi-typescript/commit/8a9d8ede95802370c4015846a4856fd0701ada33) Thanks [@drwpow](https://github.com/drwpow)! - Fix oneOf handling with empty object parent type

## 6.4.2

### Patch Changes

- [#1278](https://github.com/drwpow/openapi-typescript/pull/1278) [`d7420e3`](https://github.com/drwpow/openapi-typescript/commit/d7420e30f1697ad8cfc0fdefc93127ad2b813f99) Thanks [@pvanagtmaal](https://github.com/pvanagtmaal)! - Fix externalizing external refs

## 6.4.1

### Patch Changes

- [#1269](https://github.com/drwpow/openapi-typescript/pull/1269) [`e735ff2`](https://github.com/drwpow/openapi-typescript/commit/e735ff2b9307eaec1959d0d3bf733a240a880c48) Thanks [@pimveldhuisen](https://github.com/pimveldhuisen)! - Stop trimming whitespace other than linebreaks in string values

## 6.4.0

### Minor Changes

- [#1263](https://github.com/drwpow/openapi-typescript/pull/1263) [`1bf2d4d`](https://github.com/drwpow/openapi-typescript/commit/1bf2d4db73b93fd1d36ffb56bdfb90321b0bfaba) Thanks [@drwpow](https://github.com/drwpow)! - Ship CJS bundle

## 6.3.9

### Patch Changes

- [#1248](https://github.com/drwpow/openapi-typescript/pull/1248) [`c145f5f`](https://github.com/drwpow/openapi-typescript/commit/c145f5f6164b52a8b437b2e944f60927d546edbf) Thanks [@drwpow](https://github.com/drwpow)! - Fix Record<string, never> appearing in union

- [#1248](https://github.com/drwpow/openapi-typescript/pull/1248) [`c145f5f`](https://github.com/drwpow/openapi-typescript/commit/c145f5f6164b52a8b437b2e944f60927d546edbf) Thanks [@drwpow](https://github.com/drwpow)! - Improve oneOf generated types

## 6.3.8

### Patch Changes

- [#1246](https://github.com/drwpow/openapi-typescript/pull/1246) [`17a375e`](https://github.com/drwpow/openapi-typescript/commit/17a375ec5d13b89f526a63f6d9b9f15db85b75e9) Thanks [@drwpow](https://github.com/drwpow)! - Fix remote path item object $refs

## 6.3.7

### Patch Changes

- [#1236](https://github.com/drwpow/openapi-typescript/pull/1236) [`95a4c8c`](https://github.com/drwpow/openapi-typescript/commit/95a4c8c573c8eea2c911359879419eb07e10bd63) Thanks [@drwpow](https://github.com/drwpow)! - Improve oneOf and enum handling

## 6.3.6

### Patch Changes

- [#1231](https://github.com/drwpow/openapi-typescript/pull/1231) [`e1ce2d6`](https://github.com/drwpow/openapi-typescript/commit/e1ce2d67a5350ff2871ae01503df2280454b7a80) Thanks [@tkrotoff](https://github.com/tkrotoff)! - Do not append trailing spaces to JSDoc tags

- [#1232](https://github.com/drwpow/openapi-typescript/pull/1232) [`31c030d`](https://github.com/drwpow/openapi-typescript/commit/31c030d5f1bf2739dbc146e42372cf9aec922f93) Thanks [@tkrotoff](https://github.com/tkrotoff)! - Remove unnecessary array parenthesis

## 6.3.5

### Patch Changes

- [#1228](https://github.com/drwpow/openapi-typescript/pull/1228) [`3107f1e`](https://github.com/drwpow/openapi-typescript/commit/3107f1edb9119397fca3e34aeda4def3555c0811) Thanks [@m-ronchi](https://github.com/m-ronchi)! - Fix boolean JSON Schemas

## 6.3.4

### Patch Changes

- [#1221](https://github.com/drwpow/openapi-typescript/pull/1221) [`4e96e9d`](https://github.com/drwpow/openapi-typescript/commit/4e96e9dcb845adc501d7256c3c3c9c30c8c6d99d) Thanks [@drwpow](https://github.com/drwpow)! - Remove OneOf<> helper for simple type comparisons

- [#1221](https://github.com/drwpow/openapi-typescript/pull/1221) [`4e96e9d`](https://github.com/drwpow/openapi-typescript/commit/4e96e9dcb845adc501d7256c3c3c9c30c8c6d99d) Thanks [@drwpow](https://github.com/drwpow)! - Fix 3.1 nullable types

## 6.3.3

### Patch Changes

- [#1200](https://github.com/drwpow/openapi-typescript/pull/1200) [`4fc8c20`](https://github.com/drwpow/openapi-typescript/commit/4fc8c20c079e81c600ecffffd90fc9c77c11d49e) Thanks [@toomuchdesign](https://github.com/toomuchdesign)! - Remove unexpected empty string in generated nullable polymophic enum types (["string", "null"])

## 6.3.2

### Patch Changes

- [#1212](https://github.com/drwpow/openapi-typescript/pull/1212) [`e173ccf`](https://github.com/drwpow/openapi-typescript/commit/e173ccf0d92fd4b54cb2dec54056f4647cbadc83) Thanks [@drwpow](https://github.com/drwpow)! - Fix bug with remote schema $refs

## 6.3.1

### Patch Changes

- [#1207](https://github.com/drwpow/openapi-typescript/pull/1207) [`914e049`](https://github.com/drwpow/openapi-typescript/commit/914e049573218b1bf791ce7855cdb1022bedc2b2) Thanks [@drwpow](https://github.com/drwpow)! - Fall back to TypeScript unions for long oneOf lists

## 6.3.0

### Minor Changes

- [#1205](https://github.com/drwpow/openapi-typescript/pull/1205) [`c753f7b`](https://github.com/drwpow/openapi-typescript/commit/c753f7b27a93bb963d8b762b8faa785025aa9135) Thanks [@drwpow](https://github.com/drwpow)! - Add prefixItems support

### Patch Changes

- [#1203](https://github.com/drwpow/openapi-typescript/pull/1203) [`902fde1`](https://github.com/drwpow/openapi-typescript/commit/902fde156a55f2f0f4889680cea3605cc9d137b4) Thanks [@drwpow](https://github.com/drwpow)! - Fix mutating $refs in Node.js API

## 6.2.9

### Patch Changes

- [#1193](https://github.com/drwpow/openapi-typescript/pull/1193) [`64decb7`](https://github.com/drwpow/openapi-typescript/commit/64decb7243e3f4962dd3a97378f37142ee89546a) Thanks [@psychedelicious](https://github.com/psychedelicious)! - Add example for `Blob` type transforms

## 6.2.8

### Patch Changes

- [#1166](https://github.com/drwpow/openapi-typescript/pull/1166) [`db37f3c`](https://github.com/drwpow/openapi-typescript/commit/db37f3ca2993a3d7e7cf580273452c21a68c503d) Thanks [@pvanagtmaal](https://github.com/pvanagtmaal)! - Fix property escaping for discriminators

## 6.2.7

### Patch Changes

- [#1149](https://github.com/drwpow/openapi-typescript/pull/1149) [`b82cffb`](https://github.com/drwpow/openapi-typescript/commit/b82cffbc6c3fc0da9a24d9b90b303dcb2dd71c62) Thanks [@duncanbeevers](https://github.com/duncanbeevers)! - Stringify const values with no specified type

- [#1156](https://github.com/drwpow/openapi-typescript/pull/1156) [`ad017a9`](https://github.com/drwpow/openapi-typescript/commit/ad017a9ac2dc5b01726267fca9418b311fe91896) Thanks [@horaklukas](https://github.com/horaklukas)! - Avoid index signature TS error for paths with empty params

## 6.2.6

### Patch Changes

- [#1146](https://github.com/drwpow/openapi-typescript/pull/1146) [`12aa721`](https://github.com/drwpow/openapi-typescript/commit/12aa7212fbe09efd0fe89dca18713145e8da9c8e) Thanks [@drwpow](https://github.com/drwpow)! - Fix js-yaml $refs

## 6.2.5

### Patch Changes

- 7d09c3b: Support nested path parameters in `--path-params-as-types` (#1130). Thanks, [barakalon](https://github.com/barakalon)!

## 6.2.4

### Patch changes

- Fix remote `$ref`s to complete schemas (#1087)
- Fix incorrect check for protocol by [@happycollision](https://github.com/happycollision) (#1088)
- Fix missing parameters in operation object (#1090)

## 6.2.3

### Patch changes

- Fix tuples type generation by [@liangskyli](https://github.com/liangskyli) (#1085)

## 6.2.2

### Patch changes

- Fix path generation by [@HiiiiD](https://github.com/HiiiiD) (#991)
- If no type is specified, type as `unknown` by [@mitchell-merry](https://github.com/mitchell-merry) (#1049)
- Ensure not required parameters are created as optional properties by [@AplusKminus](https://github.com/AplusKminus) (#1053)
- Fix missing type defs (#1072)
- Deduplicate unions by [@mitchell-merry](https://github.com/mitchell-merry) (#1069)
- Fix tuples type generation support by [@liangskyli](https://github.com/liangskyli) (#1011)

## 6.2.1

### Patch changes

- Fix `$ref`’d parameters missing (#1061)
- Fix `oneOf` number const (#1056) by [@qnp](https://github.com/qnp)

## 6.2.0

### Minor changes

- New `--empty-objects-unknown` flag for better control over unspecified object types’ default shape by [@duncanbeevers](https://github.com/duncanbeevers) (#1032)

### Patch changes

- JSDoc improvements by [@mitchell-merry](https://github.com/mitchell-merry) (#1029)
- Fix readonly nullable properties by [@mtth](https://github.com/mtth) (#1036)
- Tiny QoL improvements to invalid schema errors (#1043)

## 6.1.1

### Patch changes

- Fix response key for HTTP ranges (#1010) [@stefanmaric](https://github.com/stefanmaric)
- Escape constant string in generated schema (#1014) [@mvdbeek](https://github.com/mvdbeek)
- Support fully-qualified refs as discriminator mapping values (#1017) [@sgrimm](https://github.com/sgrimm)
- Improve behavior of allOf + required properties (#1027) [@Swiftwork](https://github.com/Swiftwork)
- Make params non-nullable even if all params are optional (#1022) [@sgrimm](https://github.com/sgrimm)

## 6.1.0

### Minor changes

- Adds `webhook` typings by [@yacinehmito](https://github.com/yacinehmito) (#1001)
- Use undici’s `fetch()` instead of `request()` which can be overridden locally by [@yacinehmito](https://github.com/yacinehmito) (#1002)
- Adds type helpers only when used by [@imagoiq](https://github.com/imagoiq) (#992)

### Patch changes

- Fixes bug in glob output by [@BTMPL](https://github.com/BTMPL) (#999)
- Fixes header casing by [@HiiiiD](https://github.com/HiiiiD) (#990)
- Fixed multiple causes of bug #988 “cannot read properties of undefined” by [@HiiiiD](https://github.com/HiiiiD) and [@yacinehmito](https://github.com/yacinehmito) (#990 and #1002)

## 6.0.3

### Patch changes

- Fixed `nullable: true` (#983)
- Fixed `additionalProperties` bug (#983)

## 6.0.2

### Patch changes

- Fixes #975 where `#/components/examples` were being parsed as schema objects

## 6.0.1

### Patch changes

- Remove `postinstall` hook only meant for dev

## 6.0.0

## ⚠️ Breaking changes

- Dropped Prettier formatting and all formatting options. Now, simply format at your discretion (or not at all!)
- Dropped support for Swagger 2.0
- Dropped Node 14 support (it still works for now, but Node 14 bugs won’t be fixed if any arise)
- `--version` was changed to return the version of this library (also by dropping Swagger 2.0 support the old usage was no longer needed)
- Dropped `--raw-schema`. Your entry schema MUST be valid and complete (however, your $refs to subschemas may be partials).
- Dropped `--make-paths-enum` because it was incompatible with `--path-params-as-types`
- Dropped the CLI aliases `-it` and `-ap` (specify the full -`-immutable-types` or `--additional-properties` flag)
- Empty content: `{}` now returns `never`. Dropped the `--content-never` flag as this is now the default behavior.
- Renamed and upgraded the Node API’s `formatter()` function to `transform()` and `postTransform()`. It’s an overall improvement on the original concept with even more power than before.

### Major changes

- Sped up type generation by **3×** by dropping Prettier & optimizing deep-object crawl speed
- OpenAPI 3.1 support for `discriminator` and polymorphic types
- Complete codebase rewrite and cleanup
- Now ships modern ESNext code rather than ES2018
- Improved internal types & documentation
- Test cleanup, now powered by Vitest
- New `transform()` and `postTransform()` hooks give you more control in overriding/extending generated types

### Minor changes

- More accurate types for `oneOf` / `anyOf` / `allOf` (#894)
- `--immutable-types` has a new `-t` alias
- Addition of path.default types
- Support `nullable` as type arrays for OpenAPI 3.1 (#898)

### Patch changes

- Fixed multiple bugs with deep-linked remote schemas and complex `$ref`s
- Fixed `anyOf` intersections resulting in unexpected type signatures
- Fixed `[string, null]` generating as `unknown`
- Fixed `{ property: unknown; }` with `allOf` union
- Fixed `requestBody` missing `content` property
- Fixed headers missing remote `$ref`s

## 5.4.0

### Minor changes

- New `--content-never` flag forces never response body by [@duncanbeevers](https://github.com/duncanbeevers) (#905)

### Patch changes

- Empty strings are now allowed for properties like `@default` by [@duncanbeevers](https://github.com/duncanbeevers) (#906)
- Throws friendlier error on bad `--prettier-config` path by [@duncanbeevers](https://github.com/duncanbeevers) (#909)
- Objects are now allowed for properties like `@default` by [@duncanbeevers](https://github.com/duncanbeevers) (#910)
- Fixes `enum` export of operation paths by [@duncanbeevers](https://github.com/duncanbeevers) (#912)

## 5.3.0

### Minor changes

- New `--make-paths-enum` CLI flag by [@berzi](https://github.com/berzi) (#883)
- New `--path-params-as-types` CLI flag by [@Powell-v2](https://github.com/Powell-v) (#891)
- Supports `/** @constant */` JSDoc comments by [@PhilipTrauner](https://github.com/PhilipTrauner) (#896)
- You can now add your own custom comment header at the top of every generated doc (#904)

### Patch changes

- Fixes inconsistent comment title (#904)

## 5.2.0

### Minor changes

- The `--export-type` flag was added to generate type instead of interface by [@dominikdosoudil](https://github.com/dominikdosoudil) (#868)
- Updated schemas & examples

### Patch changes

- Tiny optimizations for a little speed boost (#881)
- Fixes CommonJS error for undici on older versions of Node (#879)

## 5.1.1

### Patch changes

- Removes CJS version from npm (to use CJS, use `openapi-typescript@4`). Version 5 switched to ESM as default anyway, and since tests are now testing ESM, the reliability of CJS was dubious (and there were TypeScript problems as well)
- Fixes type error when using TypeScript nightly (#847)
- Patches [security vulnerability with node-fetch](https://security.snyk.io/vuln/SNYK-JS-NODEFETCH-2342118) (by replacing with [undici](https://undici.nodejs.org/#/))

## 5.1.0

### Minor changes

- Adds constants support by [@sadfsdfdsa](https://github.com/sadfsdfdsa) (#831)

### Patch changes

- Fixes a syntax error caused by an empty `oneOf` by [@sadfsdfdsa](https://github.com/sadfsdfdsa) (#830)

## 5.0.1

### Patch changes

- Adds missing types for CJS build (#861)

## 5.0.0

### ⚠️ Breaking changes

- 5.x drops support for Node 12. If you’re still on Node 12, be sure to lock your version to 4.x.

### Major changes

- Updates this library to full ESM! ✨ This is the future of JavaScript, and is now natively supported in Node 14+.

### Minor changes

- Now supports a `URL()` as input to make ESM usage easier ([see example](https://github.com/drwpow/openapi-typescript/tree/5.x#-node))

## 4.5.0

### Minor changes

- Significantly-enhanced JSDoc output by [@sadfsdfdsa](https://github.com/sadfsdfdsa) (#797)

## 4.4.0

### Minor changes

- Adds TypeScript `@deprecated` comment to deprecated schema objects by [@bunkscene](https://github.com/bunkscene)

## 4.3.0

### Minor changes

- In many areas, changed out `any` with `unknown` (#769). See #554 for more explanation / context

### Patch changes

- An old bug is now gone! openapi-typescript would incorrectly generate `{ [key: string]: unknown }` for a type when it may have been a `string` or `number`. Now it will generate a more generic `unknown` type, unless it knows it’s dealing with an object for sure.

## 4.2.0

### Minor changes

- Reference arbitrary data on generated types via the `properties` key by [@Peteck](https://github.com/Peteck) (#626)

## 4.1.1

### Patch changes

- Fixes the remote schema URL cache being too long-lived by [@mbelsky](https://github.com/mbelsky) (#708)

## 4.1.0

### Minor changes

- New `--headersObject` and `--headers` CLI flags by [@ericzorn93](https://github.com/ericzorn93) (#764)

### Patch changes

- `"type": "file"` no longer generates unexpected results (#766)

## 4.0.2

### Patch changes

- Loading in-memory schemas through the JS API resulted in broken `$ref`s (#689)

## 4.0.1

### Patch changes

- Fixes `properties` + `anyOf` with only `required` properties by [@gr2m](https://github.com/gr2m) (#643)

## 4.0.0

### ⚠️ Breaking changes

- The Node.js API now returns a promise, and can no longer be run synchronously (a necessity because resolving remote schemas can never be synchronous). Other than that, there are no other breaking changes. CLI users are unaffected, and the types generated are backwards-compatible with previous versions.

### Major changes

- Now supports remote references (`$ref: "remote.yaml#/components/schemas/User`) 🎉 (#602)!

## 3.4.1

### Patch changes

- Fix glob accidentally generating empty folders alongside single-file schemas (#633)

## 3.4.0

### Minor changes

- Adds glob support thanks to [@sharmarajdaksh](https://github.com/sharmarajdaksh) (#615)
- Reverts #613 and adds a `--default-non-nullable` flag (#631)

## 3.3.1

### Patch changes

- Schema objects that have a `default:` property shouldn’t be marked as nullable (#613)

## 3.3.0

### Minor changes

- Changes default behavior of #585 to require an opt-in `--additional-properties` flag (#607)
- Adds `-c` shortcut alias for `--prettier-config` (#607)
- Adds `-it` shortcut alias for `--immutable-types` (#607)

## 3.2.4

### Patch changes

- `additionalProperties` now default to `true` per the OpenAPI 3.0 spec by [@mehalter](https://github.com/mehalter) (#583)

## 3.2.3

### Patch changes

- Fixed a parse error on `enum: []` (#563)
- Fixed another parse error on responses missing schemas (#565)
- Fixed a bug with the latest version of Prettier and `options.prettierConfig` (#566)

## 3.2.2

### Patch changes

- RequestBodies that had hyphens in their name would generate an error (#550). Thanks (again), [@ashsmith](https://github.com/ashsmith)!

## 3.2.1

### Patch changes

- Fixed an issue where a comment within a schema definition would break type gen (#548). Thanks, [@ashsmith](https://github.com/ashsmith)!

## 3.2.0

### Minor changes

- Added a new `--immutable-types` flag by [@dnalborczyk](https://github.com/dnalborczyk) (#522)

### Patch changes

- The `operations` interface inherits parameters properly by [@henhal](https://github.com/henhal) (#530)

## 3.1.2

### Patch changes

- Fixes package types for TypeScript projects (#520)

## 3.1.1

### Patch changes

- Better handles remote schema content types (#516)

## 3.1.0

### Minor changes

- Remote schema loading now follows redirects (#510)
- New `--auth` flag to access private schemas (#508)
- npm version now ships with ESM [package exports](https://nodejs.org/api/packages.html#packages_package_entry_points) for better interop between ESM & CommonJS (#509)

### Patch changes

- Fixes an OpenAPI V2 parameter bug by [@yamacent](https://github.com/yamacent) (#489)

## 3.0.4

### Patch changes

- If using OpenAPI 2.0, and you didn’t have `definitions`, an unexpected error was encountered. This is now fixed.

## 3.0.3

### Patch changes

- Improves handling of complex `oneOf` by [@gr2m](https://github.com/gr2m) (#491)

## 3.0.2

### Patch changes

- Fixed `requestBodies` transform by [@radist2s](https://github.com/radist2s) (#474)
- Fixed enum bug containing `null` by [@FedeBev](https://github.com/FedeBev) (#492)

## 3.0.1

### Patch changes

- Fixed generation bug where responseBodies that contained both a `$ref` and `operationId` generated invalid TypeScript (#464)

## 3.0.0

### Major changes

- This is marked as a breaking version for safety. Swagger v2 users should be able to migrate to `3.0.0` with no problems; OpenAPI v3 users will either experience no changes or minor changes that should be an overall improvement.

### Minor changes

- Adds long-requested paths support to Swagger v2 schemas
- Adds more compact comments, resulting more readable generated types

### Patch changes

- Fixes bugs in paths generation (missing $refs support in areas, inconsistent generation)

## 2.5.0

### Minor changes

- Comments can now be single-line, saving some needed space in the specs (#443)

### Patch changes

- `additionalProperties.oneOf` is now generating as expected (#442)

## 2.4.2

### Patch changes

- Fixes `paths.requestBody.content` possibly missing by [@robertmassaioli](https://github.com/robertmassaioli) (#369)
- Fix: check if path item is method operation by [@rendall](https://github.com/rendall) (#366)

## 2.4.1

### Patch changes

- escape quotes in enum string values by [@gr2m](https://github.com/gr2m) (#365)

## 2.4.0

### Minor changes

- Add `operations` interface by [@gr2m](https://github.com/gr2m) (#353)

## 2.3.4

### Patch changes

- Allow `$ref: 'foo.yaml#bar'` syntax, but cast to `any` type (TODO: full external schema support) (#354)

## 2.3.3

### Patch changes

- `$refs` in paths now respect optional parameters (#352) by [@gr2m](https://github.com/gr2m)

## 2.3.2

### Patch changes

- Handle parameters on paths as well as methods by [@samdbmg](https://github.com/samdbmg) (#347)

## 2.3.1

### Patch changes

- Set index type to all possible values (#348)

## 2.3.0

### Minor changes

- `requestBody` and `$ref`-type parameters added in response types by [@gr2m](https://github.com/gr2m)

🐣 Minor Changes

- responses without content schemas changed from `any` to `never` or `unknown` by [@gr2m](https://github.com/gr2m)

## 2.2.0

### Minor changes

- New name! Now published at `openapi-typescript`.
- Added paths support (#328)

## 2.1.0

### Minor changes

- Support for components.responses (#258)
- Adds tuple support (#293)

### Patch changes

- Fix missing port bug (#252)
- additionalProperties interpolation, primitive enums (#266)
- bubble up the error message / improve error message when failing to parse the schema (#269)
- Improve error message when server is unreachable (#288)

## 2.0.0

### Major changes

- OpenAPI 3.0 support (#223)
- Schema names are no longer transformed (e.g. `UserRole` is now `definitions['user']['role']`). See README for migration instructions. (#223)
- Flags with “deprecated” warnings in `1.x` were dropped and no longer work (#223)

### Minor changes

- Adds support for JSDoc comments (#223)
- Support for null values (#223)
- Improves Prettier config resolution (#224)
- Improves array and object handling (#226)

## 1.7.1

### Patch changes

- Now handles the `@` character in namespaces thanks to [@sorin-davidoi](https://github.com/sorin-davidoi) 🎉
- Updates Prettier to `2.0`

## 1.7.0

### Minor changes

- Swagger v3 is no longer unsupported! 🎉 But it’s in beta. Which means errors will probably arise. Please test it out on your existing v3 schema, and file any bugs here.
- The `--swagger` flag is now deprecated; this library will automatically parse the version from the schema.

### Minor changes

- Fixes a bug where `additionalProperties` weren’t respected for nested `properties` (#92).

## 1.6.2

- Fixes an issue where `--camelcase` wouldn’t camelCase `$ref`s properly

## 1.6.1

### Patch changes

- Fixes a bug where a definition with a missing `type` would be skipped, rather than assume it’s an `object` like Swagger does by default.

## 1.6.0

### Minor changes

- Adds Property mapper function (see README) that supports `x-nullable` and other properties by [@atlefren](https://github.com/atlefren) (#118)

## 1.5.0

### Minor changes

- Convert names containing spaces to use underscores (#75) thanks to [@svnv](https://github.com/svnv)

## 1.4.0

### Minor changes

- Puts out JSDoc thanks to [@lbenie](https://github.com/lbenie)

## 1.3.1

### Patch changes

- Fix nested arrays (#54)

## 1.3.0

### Minor changes

- The `--nowrapper` flag was added to the CLI, courtesy of [@scvnathan](https://github.com/scvnathan) (#33). Now you don’t have to wrap your interfaces if you don’t want to!

## 1.2.2

### Patch changes

- This fixes underscores from accidentally appearing in some TypeScript interface names (#29)

## 1.2.1

### Patch changes

- Swagger properties in `kebab-case` would break generation unless they were converted to `--camelcase` (#13). This has been fixed! 🎉 You still have the option of converting to `--camelcase`, but now you can keep `kebab-case` too if needed

## 1.2.0

### Minor changes

- Adds `--wrapper` option, letting you specify any namespace or module wrapper for exporting types. See the README for full description

### ⚠️ Breaking changes

- `--namespace` and `--export` options are now deprecated, in favor of the more versatile `--wrapper`

## 1.1.3

### Patch changes

- Now supports an `--export` option to export namespaces thanks to [@tpdewolf](https://github.com/tpdewolf)

## 1.1.2

### Patch changes

- No longer generates empty interfaces (caused by top-level definitions being array types, referencing other definitions)

## 1.1.1

### Patch changes

- Improves enum generation to be simpler-to-use (values are now just hardcoded inline, rather than trying to use TypeScript enums).

## 1.1.0

### Major changes

- Changes default behavior to preserve `snake_case` properties (you can still convert with `--camelcase`)

### Minor changes

- Bundles & ships with [@pika/pack](https://github.com/pikapkg/pack)

## 0.3.1

### Patch changes

- Falls back to `object` if it can’t grab properties

## 0.3.0

### Minor changes

- Different API, now requires `namespace` as 2nd parameter. Because namespacing is good.

### Patch changes

- Maybe a bug; maybe not—if a Swagger spec had a common name like `Error` it would break your build if another type extended from it

## 0.2.1

### Patch changes

- Fixes bug where number enums names could be generated.

## 0.2.0

### Minor changes

- Supports TypeScript enums

## 0.1.0

### Minor changes

- Exists
