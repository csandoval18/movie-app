import mongoose, { Model, Schema, Types } from 'mongoose'
import Movie from './Movie'

export interface IUser {
	name: string
	username: string
	email: string
	password: string
	date_created: Date
	favorites: Types.DocumentArray<typeof Movie>
}
const User = new Schema<IUser, Model<IUser>>({
	username: {
		type: String,
		required: true,
		min: 6,
		max: 25,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		max: 45,
	},
	password: {
		type: String,
		required: true,
		max: 1024,
		min: 45,
	},
	date_created: {
		type: Date,
		default: Date.now,
	},
	favorites: {
		type: [Movie],
	},
})

export const UserModel = mongoose.model('User', User)
export default Movie
