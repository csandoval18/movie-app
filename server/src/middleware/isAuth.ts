import { Response } from 'express'
import { ExtendedRequest } from 'src/types'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import { UserModel } from '../model/User'

const isAuth = async (
	req: ExtendedRequest,
	res: Response,
): Promise<JwtPayload | null> => {
	const token = req.headers['authorization'] as string
	console.log('token:', token)
	if (!token) return null
	try {
		const payload = jwt.verify(token, process.env.TOKEN_SECRET as Secret)
		if (typeof payload !== 'string') {
			const user = await UserModel.findOne({ username: payload.username })
			req.user = payload
			if (!user) {
				return res.send('no user found')
			} else {
				return req.user
			}
		}
		return null
	} catch (err) {
		return err
	}
}

export default isAuth
