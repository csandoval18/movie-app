import MongoClient from 'mongoose'

const mongoConn = () => {
	const url = 'mongodb+srv://csandoval:<password>@mflix.cjrmd.mongodb.net/test'
	MongoClient.connect(url, {
		auth: { username: 'csandoval', password: 'chiclayo1018' },
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
