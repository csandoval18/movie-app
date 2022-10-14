import mongoose, { Schema } from 'mongoose'

export interface IMovie {
	title: string
	type: string
	cast: string[]
	rated: string
	directors: string
	plot: string
	release: string
}

const Movie = new Schema<IMovie>({
	title: String,
	type: String,
	cast: [String],
	rated: String,
	directors: [String],
	plot: String,
	release: Date,
})

export const MovieModel = mongoose.model('Movie', Movie)
export default Movie
