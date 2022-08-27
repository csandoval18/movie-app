import { NextFunction } from 'express'

const jwt = require('jsonwebtoken')

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('auth-token')
}
