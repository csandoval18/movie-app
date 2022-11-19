import mongoose, { Schema } from 'mongoose'
import { MovieDetails, RatingsFields } from 'src/types'

// export interface IMovie {
// 	title: String,
// 	type: String,
// 	cast: String,[]
// 	rated: String,
// 	directors: String,
// 	plot: String,
// 	release: String,
// }
// const RatingsFieldsSchema = new Schema<RatingsFields>({
// 	Source: String,
// 	Value: String,
// })

const Movie = new Schema<MovieDetails>({
	Title: String,
	Year: Number,
	Rated: String,
	Released: String,
	Runtime: String,
	Genre: String,
	Director: String,
	Writer: String,
	Actors: String,
	Plot: String,
	Language: String,
	Country: String,
	Awards: String,
	Poster: String,
	Ratings: Array<RatingsFields>,
	Metascore: String,
	imdbRating: String,
	imdbVotes: String,
	imdbID: String,
	Type: String,
	DVD: String,
	BoxOffice: String,
	Production: String,
	Website: String,
	Response: String,
})

export const MovieModel = mongoose.model('Movie', Movie)
export default Movie
