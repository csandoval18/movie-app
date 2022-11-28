import { Response } from 'express'
import { ExtendedRequest } from '../types'
import jwt from 'jsonwebtoken'
import { UserModel } from '../model/User'

const verifyToken = async (req: ExtendedRequest, res: Response) => {
	const token = req.headers['authorization'] as string
	// console.log('verify token request header:', req.headers['authorization'])
	if (!token) return res.status(401).send('Server Access Denied')
	try {
		//need to check if user exists here otherwise session stays even if user account is deleted
		const payload = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret)
		req.user = payload
		const user = await UserModel.findOne({ username: req.user.username })
		if (user) return res.status(200).send(req.user)
		else return res.status(400).send('user not found')
	} catch (err) {
		return res.send(null)
	}
}

export default verifyToken
