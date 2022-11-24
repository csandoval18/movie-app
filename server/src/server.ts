import cors from 'cors'
import express from 'express'
import mongoConn from './mongoConn'
import authRoute from './routes/user'
import favoriteRoute from './routes/favorites'
require('dotenv').config()

const main = async () => {
	const app = express()
	mongoConn()
	app.use(
		cors({
			origin: ['http://localhost:3000'],
			credentials: true,
		}),
	)
	// Middleware body parser
	app.use(express.json())
	// Route Middleware
	app.use('/api/user', authRoute)
	app.use('/api/user', favoriteRoute)

	const port = process.env.PORT
	app.listen(port, () => console.log('Server started in port:', port))
}

main().catch((err) => {
	console.log(err)
})
