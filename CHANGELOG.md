## [3.0.0](https://github.com/tutkli/jikan-ts/compare/v2.2.0...v3.0.0) (2026-03-22)

### ⚠ BREAKING CHANGES

- consolidate and rewrite client test suites
- migrate from Biome to Oxlint and Oxfmt
- replace Axios with Ky

### Features

- add axios cache configuration and integrate in clients ([66fcc98](https://github.com/tutkli/jikan-ts/commit/66fcc9884e0503ed6ffb2db8b99103971f171317))
- add ClubsClient ([d115e77](https://github.com/tutkli/jikan-ts/commit/d115e77bbda651fc97f38fe1f1ae652109fca55d))
- add MagazinesClient ([b3b268e](https://github.com/tutkli/jikan-ts/commit/b3b268e8dcf37aecb18405ef345f460e07e47d90))
- add schedules endpoint and fix manga client types ([0aa1c4e](https://github.com/tutkli/jikan-ts/commit/0aa1c4eb6663f2447177c10123d983ced819dee3))
- add support for people, producers, reviews, and recommendations APIs ([ee18f7f](https://github.com/tutkli/jikan-ts/commit/ee18f7fed549d33bcca2b86d63aaa0fcc09a8f72))
- add WatchClient to Jikan client ([f7d8900](https://github.com/tutkli/jikan-ts/commit/f7d890058a978c96f1756569cb69cb50be9adf94))
- add WatchClient with endpoints and models for watch API ([038de99](https://github.com/tutkli/jikan-ts/commit/038de99e1ac4b90fdd10306305d3c92069c0cacb))
- enforce `noUnusedImports` rule in linter config ([a34f8c2](https://github.com/tutkli/jikan-ts/commit/a34f8c2bea263f062159cc21674d9b5ad833b21c))

### Bug Fixes

- correct clubs endpoints typo and update pagination types ([07e7581](https://github.com/tutkli/jikan-ts/commit/07e7581c68f1a2fcd0f5fb2232e0b3b005a5720a))
- use correct trailingCommas key in biome config ([5fbce96](https://github.com/tutkli/jikan-ts/commit/5fbce9693077e186c88c05fb5ed53b7067c9e52d))
- **watch.client:** correct parameter handling in promo fetch ([ad166b9](https://github.com/tutkli/jikan-ts/commit/ad166b9284da5ff2417577681c7745dfa298411a))

### Code Refactoring

- consolidate and rewrite client test suites ([3d70373](https://github.com/tutkli/jikan-ts/commit/3d7037317fc195ad7ddf1a7c17d6675a86dfc672))
- migrate from Biome to Oxlint and Oxfmt ([0b7e2d8](https://github.com/tutkli/jikan-ts/commit/0b7e2d891bd4ec2ad0e0d8048bef8b72819b2ddc))
- replace Axios with Ky ([bb1154d](https://github.com/tutkli/jikan-ts/commit/bb1154d5aead5667521d94e9bb3f9bbf36ae9fb9))

## [2.1.0](https://github.com/tutkli/jikan-ts/compare/v2.0.2...v2.1.0) (2024-10-20)

### Bug Fixes

- remove package-lock.json ([c336dae](https://github.com/tutkli/jikan-ts/commit/c336dae7289240c6d027b02f500801cdf9362d0f))
- synopsis type for anime ([#12](https://github.com/tutkli/jikan-ts/issues/12)) ([764d8ce](https://github.com/tutkli/jikan-ts/commit/764d8ce1a71e75199e53a4e9f9257c7d10bccc3e))

## [2.0.2](https://github.com/tutkli/jikan-ts/compare/v2.0.1...v2.0.2) (2024-07-13)

### Bug Fixes

- title_english for anime and manga models ([8480f97](https://github.com/tutkli/jikan-ts/commit/8480f97d93b5bd97b826e444b91456a89e3cd1be))

## [2.0.1](https://github.com/tutkli/jikan-ts/compare/v2.0.0...v2.0.1) (2024-05-19)

### Features

- add getTopCharacters to topClient ([258c928](https://github.com/tutkli/jikan-ts/commit/258c92859748c15436fc115fc2062faa1dddee36))
- add random client ([2e034d1](https://github.com/tutkli/jikan-ts/commit/2e034d1c8a5832edbd48dc111df6b8df1dd2146d))
- add random to jikan client ([5a4a03d](https://github.com/tutkli/jikan-ts/commit/5a4a03d1329ec6b9842571611aaf07181db44b5b))
- add some missing anime and manga endpoints ([b98dcb8](https://github.com/tutkli/jikan-ts/commit/b98dcb814374de4080f1b54d3faeb6b951941481))

### Bug Fixes

- animeSearch endpoint ([#9](https://github.com/tutkli/jikan-ts/issues/9)) ([a21319a](https://github.com/tutkli/jikan-ts/commit/a21319aa759c21944906ab0378bb5eeccbf557f6))
- character model ([4f9f76a](https://github.com/tutkli/jikan-ts/commit/4f9f76a47693c7b0daac2adf220158284d81e300))
- remove banner from build output ([ba11de2](https://github.com/tutkli/jikan-ts/commit/ba11de294e7d8126181e6a283c6646a12942489f))
- simplify types ([2fba166](https://github.com/tutkli/jikan-ts/commit/2fba16686f1c8a2f10386357ae5b2b979105ef68))

### Performance Improvements

- remove boilerplate ([6a60194](https://github.com/tutkli/jikan-ts/commit/6a60194b244325f8660d6254a6f9d4f71fbdb9dd))
- remove type boilerplate ([f5fd9d3](https://github.com/tutkli/jikan-ts/commit/f5fd9d32ff0ba50a4fed0489144fc28d9b2263c3))
- remove unnecesary type assertion ([db2bfb0](https://github.com/tutkli/jikan-ts/commit/db2bfb06327aab0d520d2a4a1b20af40196390d5))
- rename identifiers to pathParams ([932fac1](https://github.com/tutkli/jikan-ts/commit/932fac1bc07f912b86e1aeb0ca35ab83aab13f3c))
- replace enum endpoints with consts ([f268a9a](https://github.com/tutkli/jikan-ts/commit/f268a9a0e9d0bc8678117e899e0b98b89df52983))

## [1.2.2](https://github.com/tutkli/jikan-ts/compare/v1.2.1...v1.2.2) (2024-05-06)

### Bug Fixes

- interface JikanResourcePeriod ([#7](https://github.com/tutkli/jikan-ts/issues/7)) ([cdd6403](https://github.com/tutkli/jikan-ts/commit/cdd6403f945513323d232ef33a91287d93ebd2c1))
- lintstaged biome command ([d97e0d1](https://github.com/tutkli/jikan-ts/commit/d97e0d19d9eee09cba8b98dd4e3671609df92181))

## [1.2.1](https://github.com/tutkli/jikan-ts/compare/1.2.0...v1.2.1) (2024-02-07)

### Bug Fixes

- add vitest.config.ts to .npmignore ([64d2b8f](https://github.com/tutkli/jikan-ts/commit/64d2b8f8d8e38e23a01857521bb2e08816b4ff0c))
- linting errors ([d61544c](https://github.com/tutkli/jikan-ts/commit/d61544c6a24006c270ae40b4633f5daba5dce0b3))
- remove jest config ([80d031c](https://github.com/tutkli/jikan-ts/commit/80d031c9e2975deee03ef2a1c5bea45b41bc09e3))
- replaceIdentifiers match function ([abaf4a1](https://github.com/tutkli/jikan-ts/commit/abaf4a102797b56fdb7ea62e37b879ab4b6f9e9d))
- tsconfig ([9a9183d](https://github.com/tutkli/jikan-ts/commit/9a9183dbc96f32b1f3373ccd11078c982c73826d))

## [1.2.0](https://github.com/tutkli/jikan-ts/compare/v1.0.0...1.2.0) (2024-02-06)

### Features

- add some missing anime endpoints ([4bb9f73](https://github.com/tutkli/jikan-ts/commit/4bb9f736f50a262a2970d2e486b26d73804ffc21))

### Bug Fixes

- add prepare script to setup githooks ([57c9c95](https://github.com/tutkli/jikan-ts/commit/57c9c95e63c19b26d08ea8f7ed10b0ec6d5450d5))
- anime search params ([9b0a6ba](https://github.com/tutkli/jikan-ts/commit/9b0a6ba20ac781881975a8345248573878a081bc))
- base client arguments visibility ([bec2944](https://github.com/tutkli/jikan-ts/commit/bec2944b2c76862c9b85078cc9791d4c98d5c167))
- manga status typo ([#5](https://github.com/tutkli/jikan-ts/issues/5)) ([5b54655](https://github.com/tutkli/jikan-ts/commit/5b546557465d1bdaa11fa6e494d9112d877661b9))
- status params for anime and manga search ([b734159](https://github.com/tutkli/jikan-ts/commit/b734159dfe09e766cf6537963b0e08bfe0a404dd))

## [1.0.0](https://github.com/tutkli/jikan-ts/compare/v0.6.62...v1.0.0) (2023-06-09)

### Features

- add characters client ([2d8a7c4](https://github.com/tutkli/jikan-ts/commit/2d8a7c4dc583ca814822b715827a73ee87a4d486))
- add genres client ([f4f3f94](https://github.com/tutkli/jikan-ts/commit/f4f3f943da5813fd5d8183d3e97dd5ade408beb9))
- add schedules client ([e87ccb4](https://github.com/tutkli/jikan-ts/commit/e87ccb46082d6fa8817408a6b95b5d316b9e3925))

### Bug Fixes

- add unapproved to anime and manga search params ([9c11268](https://github.com/tutkli/jikan-ts/commit/9c1126833540cc8791e2f9c20ba8a352ba3c409b))
- move endpoint constants to their own file ([153d8c3](https://github.com/tutkli/jikan-ts/commit/153d8c38c7a083e636355fed219cb48ebc545a5f))
- move genre model to it's own directory ([dc5c4cf](https://github.com/tutkli/jikan-ts/commit/dc5c4cfb58dac9bfe69dd3abb09e568f0653cebd))

## [0.6.62](https://github.com/tutkli/jikan-ts/compare/v0.6.61...v0.6.62) (2023-05-06)

### Features

- add function to replace path parameters ([71fba70](https://github.com/tutkli/jikan-ts/commit/71fba7000d4062667313a9f58466a706299871d8))

### Bug Fixes

- change search params fields to optional ([2157f80](https://github.com/tutkli/jikan-ts/commit/2157f80c6e6cbc9fb14779b96b2f09adbc871a96))

## [0.6.61](https://github.com/tutkli/jikan-ts/compare/v0.6.5...v0.6.61) (2023-03-19)

### Bug Fixes

- deploy workflow ([73cc848](https://github.com/tutkli/jikan-ts/commit/73cc8481966caa3b6b78ef2cd1b17ecac8485537))
- deploy workflow ([cc9f7db](https://github.com/tutkli/jikan-ts/commit/cc9f7db76023aa614d5128b2e60d13d1504fabcd))
- deploy workflow ([f39483b](https://github.com/tutkli/jikan-ts/commit/f39483ba4995e8b81698712f6a92541d70c71b9a))
- remove default cache options ([e70a4bb](https://github.com/tutkli/jikan-ts/commit/e70a4bb9b27ad036d7a5c660a4c9d6c5c091d4e9))

## [0.6.5](https://github.com/tutkli/jikan-ts/compare/v0.6.4...v0.6.5) (2023-01-28)

### Bug Fixes

- added missing exports from models/Common/index & models/Params/index, fixing imports for seasons-client ([#4](https://github.com/tutkli/jikan-ts/issues/4)) ([becd021](https://github.com/tutkli/jikan-ts/commit/becd021c8705b421cfedcfe4961030ba06d93aea))

## [0.6.4](https://github.com/tutkli/jikan-ts/compare/v0.6.3...v0.6.4) (2023-01-24)

### Features

- added seasons client ([#3](https://github.com/tutkli/jikan-ts/issues/3)) ([65648a3](https://github.com/tutkli/jikan-ts/commit/65648a3e8c5f4f2e4a1a5850c68660a02fca31b4))

### Bug Fixes

- missing genres in manga model ([2661fe3](https://github.com/tutkli/jikan-ts/commit/2661fe36d076449e6990328d1f600b5a2bc3369e))

### Performance Improvements

- esbuild config file ([c20b8e5](https://github.com/tutkli/jikan-ts/commit/c20b8e5bb053e5e6536fe3083fd3abccf1a2d236))
- esbuild.config ([594c644](https://github.com/tutkli/jikan-ts/commit/594c6445d26f60ffd2685aa1202431e6de4b63b4))

## [0.6.3](https://github.com/tutkli/jikan-ts/compare/v0.6.1...v0.6.3) (2023-01-12)

### Bug Fixes

- typo in Manhwa type ([5065db4](https://github.com/tutkli/jikan-ts/commit/5065db4fa469339d5b893e0081d38762dc9baa50))

## [0.6.1](https://github.com/tutkli/jikan-ts/compare/v0.6.0...v0.6.1) (2022-12-28)

### Reverts

- Revert "build: update axios and axios-cache-interceptor" ([89d592b](https://github.com/tutkli/jikan-ts/commit/89d592b74aae5d279cbc06f37e21e31ba5f6ead6))

## [0.6.0](https://github.com/tutkli/jikan-ts/compare/v0.5.52...v0.6.0) (2022-12-21)

### Bug Fixes

- add license url ([64e557e](https://github.com/tutkli/jikan-ts/commit/64e557ec6416663d48a73fdedb1f45a8dc21033f))
- jest config as js file ([46a3121](https://github.com/tutkli/jikan-ts/commit/46a312106e0fe407b5eecbe253b3086b29659696))

## [0.5.52](https://github.com/tutkli/jikan-ts/compare/v0.5.5...v0.5.52) (2022-11-26)

## [0.5.5](https://github.com/tutkli/jikan-ts/compare/7262d66edcc06c65e0598c37f776eaaad5a01342...v0.5.5) (2022-11-26)

### Features

- Add Anime and Manga Models ([2a72c8a](https://github.com/tutkli/jikan-ts/commit/2a72c8a86ba36aaa921cd331d51dafac4bdce237))
- Add Axios and Pino configuration. Add API Clients. ([ebbd567](https://github.com/tutkli/jikan-ts/commit/ebbd567d318f0fc2218fefd09f932f1ea43439fa))
- Add TopClient ([0435df6](https://github.com/tutkli/jikan-ts/commit/0435df630d14d3b6957c3fac416e7df3ed38c18b))

### Bug Fixes

- Add missing index files ([048acae](https://github.com/tutkli/jikan-ts/commit/048acaea17939d219b09d2c3027761962ccb53bc))
- esbuild configuration ([b42b47a](https://github.com/tutkli/jikan-ts/commit/b42b47a9fd7ff42c16c3ee41398c6ed8040ec66b))
- export TopClient ([376d51b](https://github.com/tutkli/jikan-ts/commit/376d51b2e9fa1f061ce255a11084ef56c851d23f))
- exporting params module ([78455d4](https://github.com/tutkli/jikan-ts/commit/78455d42d75a9dd72c1d05186d561a84c4373f1e))
- missing comma ([a39e31b](https://github.com/tutkli/jikan-ts/commit/a39e31bbc0c20d70036b061108bf21630c76cce6))
- optional search params in MangaClient and TopClient ([3e24a37](https://github.com/tutkli/jikan-ts/commit/3e24a372fb496f7f11ef4e67614c63f179ded414))
- optional search params in MangaClient and TopClient ([09b27f1](https://github.com/tutkli/jikan-ts/commit/09b27f16d257f65441ecce157e68348014f318db))
- pino imports ([78ae50b](https://github.com/tutkli/jikan-ts/commit/78ae50bc76f1e51b3d5b522c9e85977ff2ef0bf1))
- pino imports ([4339d62](https://github.com/tutkli/jikan-ts/commit/4339d6274237c24394a8556a3807ff913a4f9f7d))
- pino imports ([a2d53d5](https://github.com/tutkli/jikan-ts/commit/a2d53d53f87f71eaf56171c1fb51f5a9b2292a24))
- pino imports ([9c930cf](https://github.com/tutkli/jikan-ts/commit/9c930cf08180a36e731f1f1cbfc9f83b0a995fc7))
- pino logger imports ([b0633bb](https://github.com/tutkli/jikan-ts/commit/b0633bbf5bbf57d618f6f7507cb8de47aa55add5))
- treat jest as CommonJS module ([ddf97e7](https://github.com/tutkli/jikan-ts/commit/ddf97e72bf2594de50001ad1e51dbdd3b89a9c72))
- tsconfig declaration ([6dd43a6](https://github.com/tutkli/jikan-ts/commit/6dd43a6703702c7c0dec59fb31cd856f50c47c48))
- typo in anime model ([ef6c8ab](https://github.com/tutkli/jikan-ts/commit/ef6c8ab68eadd7093ce1ea47d0ab260ff0200f80))
- update .gitignore ([7262d66](https://github.com/tutkli/jikan-ts/commit/7262d66edcc06c65e0598c37f776eaaad5a01342))

### Reverts

- Revert "build: update ts moduleResolution config" ([0e52108](https://github.com/tutkli/jikan-ts/commit/0e52108f7c845391793c46e7ba2de69f4999d286))
