import { Schema } from 'mongoose'

const movieSchema = new Schema({
	title: String,
	type: String,
	cast: [String],
	rated: String,
	directors: [String],
	fullplot: String,
	released: Date,
})

module.exports = {
	movieSchema,
}
