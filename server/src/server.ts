import express from 'express'
import mongoConn from './mongoConn'
import authRoute from './routes/auth'
require('dotenv').config()

const main = async () => {
	const app = express()
	mongoConn()

	//Middleware body parser
	app.use(express.json())
	//Route Middleware
	app.use('/api/user', authRoute)

	const port = process.env.PORT
	app.listen(port, () => console.log('server started in port:', port))
}

main().catch((err) => {
	console.log(err)
})
