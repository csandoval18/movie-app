import cors from 'cors'
import express from 'express'
import mongoConn from './mongoConn'
import authRoute from './routes/users'
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
	app.use('/api/users', authRoute)

	const port = process.env.PORT
	app.listen(port, () => console.log('Server started in port:', port))
}

main().catch((err) => {
	console.log(err)
})
