import { Response } from 'express'
import { ExtendedRequest, JWTError } from 'src/types'
import jwt, { Secret } from 'jsonwebtoken'

const verifyToken = (req: ExtendedRequest, res: Response) => {
	const token = req.headers['authorization'] as string
	console.log('verify token request header:', req.headers['authorization'])
	if (!token) return res.status(401).send('Server Access Denied')
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)
		req.user = verified
		console.log('req.user:', req.user)
		return res.status(200).send(req.user)
	} catch (err) {
		let error: JWTError = err
		return res.status(400).send(error)
	}
}

export default verifyToken
