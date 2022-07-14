import MongoClient from 'mongoose'
require('dotenv').config()

const mongoConn = () => {
	const uri = process.env.ATLAS_URI as string
	MongoClient.connect(uri)

	const db = MongoClient.connection
	db.once('open', () => {
		console.log('Database conneced ✅ ')
	})
	db.on('error', (err) => {
		console.error('connection error', err)
	})
}

export default mongoConn
