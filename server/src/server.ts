import express from 'express'
import mongoConn from './mongoConn'
require('dotenv').config()

const main = async () => {
	const app = express()
	mongoConn()
}

main()
