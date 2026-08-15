export type UserGender = 'any' | 'male' | 'female' | 'nonbinary'

export interface UsersSearchParams {
	page?: number
	limit?: number
	q?: string
	gender?: UserGender
	location?: string
	maxAge?: number
	minAge?: number
}

export type UserHistoryType = 'anime' | 'manga'
