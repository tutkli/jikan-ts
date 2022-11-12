export enum AnimeEndpoints {
  AnimeSearch = '/anime',
  AnimeFullById = '/anime/{id}/full',
  AnimeById = '/anime/{id}',
  AnimeCharacters = '/anime/{id}/characters',
  AnimeStaff = '/anime/{id}/staff',
  AnimeEpisodes = '/anime/{id}/episodes',
  AnimeEpisodeById = '/anime/{id}/episodes/{episode}',
  AnimeVideos = '/anime/{id}/videos',
  AnimeVideosEpisodes = '/anime/{id}/videos/episodes',
  AnimePictures = '/anime/{id}/pictures',
  AnimeStatistics = '/anime/{id}/statistics',
  AnimeRecommendations = '/anime/{id}/recommendations',
}

export enum MangaEndpoints {
  Manga = '/manga',
  MangaFullById = '/manga/{id}/full',
  MangaById = '/manga/{id}',
  MangaCharacters = '/manga/{id}/characters',
  MangaPictures = '/manga/{id}/pictures',
  MangaStatistics = '/manga/{id}/statistics',
  MangaRecommendations = '/manga/{id}/recommendations',
}

export enum TopEndpoints {
  TopAnime = '/top/anime',
  TopManga = '/top/Manga',
}
