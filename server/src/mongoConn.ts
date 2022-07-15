import MongoClient from 'mongoose'
import cors from 'cors'
require('dotenv').config()

const mongoConn = () => {
	const url =
		'mongodb+srv://<username>:<password>@mflix.cjrmd.mongodb.net/test'
	MongoClient.connect(url, {
		auth: {
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
		},
	})

	const db = MongoClient.connection
	db.once('open', () => {
		console.log('Database conneced:', url)
	})
	db.on('error', (err) => {
		console.error('connection error', err)
	})
}

export default mongoConn
