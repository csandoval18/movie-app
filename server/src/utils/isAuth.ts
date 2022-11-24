import { NextFunction, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { ExtendedRequest } from 'src/types'
require('dotenv').config()

export const isAuth = (req: ExtendedRequest, res: Response) => {
	const authorization = req.headers['authorization']
	console.log('request header:', req.headers['authorization'])
	// if (!authorization) throw new Error('Not Authenticated')
	try {
		const payload = verify(
			authorization as string,
			process.env.TOKEN_SECRET as string,
		)
		console.log('payload:', payload)
		return payload
	} catch (err) {
		console.log('err:', err)
		//crashes server
		// throw new Error('Not Authenticated')
	}
}
