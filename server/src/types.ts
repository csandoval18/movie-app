import { Request } from 'express'

export interface UserFields {
	name: string
	username: string
	email: string
	password: string
}

export interface ExtendedRequest extends Request {
	user: any
	session: Express.Request & { userId: number }
}

export interface MoviesSearchData {
	Title: string
	Year: string
	Type: string
	Poster: string
	imdbID: string
}

export interface RatingsFields {
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
	totalSeasons: string | null
}

export interface JWTError {
	name: string
	message: string
	expiredAt: string
}
