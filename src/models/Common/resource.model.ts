export interface JikanResource {
	mal_id: number
	type: string
	name: string
	url: string
}

export interface JikanNamedResource {
	name: string
	url: string
}

export interface JikanResourceTitle {
	type: string
	title: string
}

export interface JikanResourcePeriod {
	from: string | null
	to: string | null
	prop: {
		from: { day: number | null; month: number | null; year: number | null }
		to: { day: number | null; month: number | null; year: number | null }
		string: string | null
	}
}

export interface JikanResourceRelation {
	relation: string
	entry: JikanResource[]
}
