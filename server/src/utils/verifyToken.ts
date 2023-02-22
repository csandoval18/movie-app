import { ExtendedRequest, ExtendedResponse } from "../types"
import jwt, { JwtPayload, Secret } from "jsonwebtoken"
import { UserModel } from "../models/User"

interface UserResponse {
	payload: JwtPayload | null
}

const verifyToken = async (
	req: ExtendedRequest,
	res: ExtendedResponse,
): Promise<UserResponse> => {
	const token = req.headers["authorization"] as string
	// console.log('verify token request header:', req.headers['authorization'])
	if (!token) return res.status(401).send({ payload: null })
	try {
		// Need to check if user exists here otherwise session stays even if user account is deleted
		const payload = jwt.verify(
			token,
			process.env.TOKEN_SECRET as Secret,
		)
		req.user = payload
		const user = await UserModel.findOne({
			username: req.user.username,
		})
		if (user)
			return res.status(200).send({ payload: req.user })
		else return res.status(400).send({ payload: null })
	} catch (err) {
		// User not logged in
		return res.send({ payload: null })
	}
}

export default verifyToken
