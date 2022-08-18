import { Request, Response } from 'express'
const router = require('express').Router()
const User = require('../model/User')

//Validatio
const Joi = require('@hapi/joi')

const schema = Joi.object({
	name: Joi.string().min(6).required(),
	username: Joi.string().min(6).required(),
	email: Joi.string().min(6).required().email(),
	password: Joi.string().min(6).required(),
})

router.post('/register', async (req: Request, res: Response) => {
	//Validate data entered by user
	const { error } = schema.validate(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	const user = new User({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	})
	try {
		const savedUser = await user.save()
		return res.send(savedUser)
	} catch (err) {
		return res.status(400).send(err)
	}
	// return res.status(400).send('There is error with validation servers')
})

export default router
