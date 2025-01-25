export const ClubsEndpoints = {
	clubById: '/clubs/{id}',
	clubMembers: '/clubs/{id}/members',
	clubStaff: '/clubs/{id}/staff',
	clubRelations: '/clubs/{id}/relations',
	clubSearch: '/clubs'
} as const
