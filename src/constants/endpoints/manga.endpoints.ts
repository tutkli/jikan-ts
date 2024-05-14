export const MangaEndpoints = {
	mangaSearch: '/manga',
	mangaFullById: '/manga/{id}/full',
	mangaById: '/manga/{id}',
	mangaCharacters: '/manga/{id}/characters',
	mangaNews: 'manga/{id}/news',
	mangaTopics: '/manga/{id}/forum',
	mangaPictures: '/manga/{id}/pictures',
	mangaStatistics: '/manga/{id}/statistics',
	mangaMoreInfo: '/manga/{id}/moreinfo',
	mangaRelations: 'manga/{id}/relations',
	mangaExternal: '/manga/{id}/external',
	mangaRecommendations: '/manga/{id}/recommendations'
} as const
