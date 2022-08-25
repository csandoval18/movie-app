import Mongoose from 'mongoose'
require('dotenv').config()

const mongoConn = () => {
	const url = 'mongodb+srv://<username>:<password>@mflix.cjrmd.mongodb.net/test'
	Mongoose.connect(url, {
		auth: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		},
	})

	const db = Mongoose.connection
	db.once('open', () => {
		console.log('Database conneced')
	})
	db.on('error', (err) => {
		console.error('connection error', err)
	})
}

export default mongoConn
