import { Request, Response } from 'express'
const router = require('express').Router()
const User = require('../model/User')
import { registerValidation } from '../utils/validation'

router.post('/register', async (req: Request, res: Response) => {
	// Validate data entered by user
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	// Check if username already exists
	const usernameExists = await User.findOne({ email: req.body.email })
	console.log('username:', usernameExists)
	if (usernameExists) return res.status(400).send('Username already taken')

	// Check if email already exists
	const emailExists = await User.findOne({ email: req.body.email })
	if (emailExists)
		return res.status(400).send('Email is already linked to an account')

	// Create a new user
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
})

export default router
