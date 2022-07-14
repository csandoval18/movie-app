import express from 'express'
import mongoConn from './mongoConn'
require('dotenv').config()

const main = async () => {
	const app = express()
	mongoConn()

	const port = process.env.PORT
	app.listen(port, () => console.log('server started in port:', port))
}

main().catch((err) => {
	console.log(err)
})
