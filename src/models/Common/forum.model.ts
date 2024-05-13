export interface JikanForum {
	mal_id: number
	url: string
	title: string
	date: string
	author_username: string
	author_url: string
	comments: number
	last_comment: {
		url: string
		author_username: string
		author_url: string
		date: string
	}
}

export type ForumFilter = 'all' | 'episode' | 'other'
