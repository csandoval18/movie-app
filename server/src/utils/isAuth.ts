import { NextFunction, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { ExtendedRequest } from 'src/types'
require('dotenv').config()

export const isAuth = (
	req: ExtendedRequest,
	res: Response,
	next: NextFunction,
) => {
	const authorization = req.headers['authorization']
	console.log('request header:', req.headers['authorization'])
	// if (!authorization) throw new Error('Not Authenticated')
	try {
		// const token = authorization!.split(' ')[1]
		const payload = verify(
			authorization as string,
			process.env.TOKEN_SECRET as string,
		)
		// console.log('token:', token)
		console.log('payload:', payload)
	} catch (err) {
		console.log('err:', err)
		// throw new Error('Not Authenticated')
	}
	return next()
}
