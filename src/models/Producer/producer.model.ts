import type {
	JikanImages,
	JikanNamedResource,
	JikanResourceTitle
} from '../Common'

export interface Producer {
	mal_id: number
	url: string
	titles: JikanResourceTitle[]
	images: JikanImages
	favorites: number
	established: string | null
	about: string | null
	count: number
}

export interface ProducerFull extends Producer {
	external: JikanNamedResource[]
}
