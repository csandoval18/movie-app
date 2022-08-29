import { Request } from 'express'

export interface UserFields {
	name: string
	username: string
	email: string
	password: string
}

export interface ExtendedRequest extends Request {
	user: any
	session: Express.Request & { userId: number }
}
