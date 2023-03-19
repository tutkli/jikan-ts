# v0.6.6 (19.03.2023)

### Clients

- ⚠️ `tslog` have been removed.

The benefits of pretty logging weren't enough to add an external lib.

- Removed default cache options as they are not necessary.

### Docs

- Documentation has been moved to this project

### Build 

- Updated dependencies


<!-- CHANGELOG SPLIT MARKER -->

# v0.6.5 (28.01.2023)

### Clients

- Fix: missing imports from Season Client.


<!-- CHANGELOG SPLIT MARKER -->

# v0.6.4 (24.01.2023)

### Build

- ⚠️ Downgrade `axios` to v0.27.2 and `axios-cache-interceptor` to v0.10.7.

Version 1 of Axios caused CORS errors on browser calls that I yet have to figure a solution for. In the meantime, Axios will be downgraded so the lib actually works. Sorry for the inconvenience.

- All other dependencies have been updated.

### Clients

- New Seasons Clients added!

### Typings

- Add missing genres in `Manga` model.

<!-- CHANGELOG SPLIT MARKER -->

# v0.6.3

### Anime Client

- Add page query param in `getAnimeEpisodes` and `getAnimeEpisodeVideos`

### Typings

- Fix Typos in Anime interface 

<!-- CHANGELOG SPLIT MARKER -->

# v0.6.2

### Build

- Updated dependencies
- Make package side effects free
- Refactor BaseClient for better organization
- Remove unnecessary inheritance in JikanClient

### Typings

- Fix Typo in Manhwa type

<!-- CHANGELOG SPLIT MARKER -->

# v0.6.1

### Build

- Update dependencies
- Don't add external dependencies in built package

<!-- CHANGELOG SPLIT MARKER -->

# v0.6 (21/12/2022)

### BREAKING CHANGES

- `JikanUniqueResponse` has been removed. Now all the request return `JikanResponse` with the corresponding data Type.
- `JikanUniqueResource` has been renamed to `JikanResource`.

### MangaClient

- Correct `getMangaStatistics` function name.
- Correct `getEpisodeVideos` function name.

### AnimeClient

- Correct `getEpisodeVideos` function name.

### Tests

- Complete coverage of all the clients.

### Docs

- Remove typedoc documentation generator.
- Launch new documentation page! https://tutkli.github.io/jikan-ts-docs/

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.52 (26/11/2022)

### Build

- Remove yarn-check from package as it has vulnerable dependencies

### Docs

- Complete docs overhaul


<!-- CHANGELOG SPLIT MARKER -->

# v0.5.5 (26/11/2022)

### Build

- Replace parcel with esbuild
- Update dependencies

### Clients

- Replace Pino with tslog
- Fix exporting TopClient

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.42 (13/11/2022)

### Models

- Fix typo in anime model

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.4 (13/11/2022)

### Build

- Add .npmignore

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.3 (13/11/2022)

### Bugs

- Fix pino logger imports

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.2 (12/11/2022)

### Config

- Change TS module config to "es2022"

### Bugs

- Fix pino logger imports

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.1 (12/11/2022)

### Modules

 - Fix exporting Params module

### Build

 - Add lint script

<!-- CHANGELOG SPLIT MARKER -->

# v0.5.0 (12/11/2022)

### Test

- Added Client tests

<!-- CHANGELOG SPLIT MARKER -->

# v0.4.0 (12/11/2022)

### Clients

- Added TopClient
- Added search queryParams to AnimeClient, MangaClient and TopClient.

### Docs

- Improve models and clients documentation

<!-- CHANGELOG SPLIT MARKER -->

# v0.3.0 (12/11/2022)

### Clients

- More endpoints added to the MangaClient:
  - getMangaCharacters
  - getMangaPictures
  - getMangaStatistics
  - getMangaRecommendations
