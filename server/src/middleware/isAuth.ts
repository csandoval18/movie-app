import { Response } from 'express'
import { ExtendedRequest } from 'src/types'
import jwt from 'jsonwebtoken'

const isAuth = (req: ExtendedRequest, res: Response) => {
	const token = req.headers['authorization'] as string
	console.log('token:', token)
	if (!token) return res.status(401).send('Server Access Denied')
	try {
		const payload = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)
		req.user = payload
		return req.user
	} catch (err) {
		return res.send(err)
	}
}

export default isAuth
