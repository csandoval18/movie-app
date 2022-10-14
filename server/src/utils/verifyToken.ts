import { Response } from 'express'
import { ExtendedRequest } from 'src/types'
import jwt, { Secret } from 'jsonwebtoken'

const verifyToken = (req: ExtendedRequest, res: Response) => {
	const token = req.headers['auth-token'] as string
	if (!token) return res.status(401).send('Access Denied')
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET as Secret)
		req.user = verified
    return res.status(200).send('Successfully verified user')
	} catch (err) {
		return res.status(400).send('Invalid Token')
	}
}

export default verifyToken