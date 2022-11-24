export interface MoviesSearchData {
	Title: string
	Year: string
	Type: string
	Poster: string
	imdbID: string
}

interface RatingsFields {
	Source: string
	Value: string
}

export interface MovieDetails {
	Title: string
	Year: string | number
	Rated: string
	Released: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Ratings: RatingsFields[]
	Metascore: string | number
	imdbRating: string | number
	imdbVotes: string | number
	imdbID: string
	Type: string
	DVD: string
	BoxOffice: string | number
	Production: string
	Website: string
	Response: string
}

export interface TokenPayload {
	_id: string
	username: string
	iat: number
	exp: number
}
