import { UserFields } from 'src/types'

// Validation
const Joi = require('@hapi/joi')

// Register Validation
export const registerValidation = (body: UserFields) => {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		username: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	})

	return schema.validate(body)
}

export const loginValidation = (body: UserFields) => {
	const schema = Joi.object({
		// username: Joi.string().min(6).required(),
		email: Joi.string().required().email(),
		password: Joi.string().required(),
	})

	return schema.validate(body)
}
