import { Response } from 'express'
import { ExtendedRequest } from 'src/types'
import jwt, { Secret } from 'jsonwebtoken'

const verifyToken = (req: ExtendedRequest, res: Response) => {
	const token = req.headers['authorization'] as string
	console.log('verify token request header:', req.headers['authorization'])
	if (!token) return res.status(401).send('Server Access Denied')
	try {
		const payload = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)
		req.user = payload
		return res.status(200).send(req.user)
	} catch (err) {
		// return res.status(400).send('You are not authorized')
		res.send('You are not authorized')
	}
}

export default verifyToken
