import { UserParameters } from 'src/types'

// Validation
const Joi = require('@hapi/joi')

// Register Validation
const registerValidation = (data: UserParameters) => {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		username: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	})

	Joi.validate(data, schema)
}

const loginValidation = (data: UserParameters) => {
	const schema = Joi.object({
		username: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required(),
	})

	Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation
