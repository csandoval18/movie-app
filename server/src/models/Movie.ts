import mongoose, { Schema } from "mongoose"
import { MovieDetails, RatingsFields } from "src/types"

const Movie = new Schema<MovieDetails>(
	{
		Title: String,
		Year: String,
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
		imdbID: {
			type: String,
			unique: true,
			required: true,
		},
		Type: String,
		DVD: String,
		BoxOffice: String,
		Production: String,
		Website: String,
		Response: String,
		totalSeasons: {
			type: String,
			required: false,
		},
	},
	{ _id: false },
)

export const MovieModel = mongoose.model("Movie", Movie)
export default Movie
