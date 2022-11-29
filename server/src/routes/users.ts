import argon2 from 'argon2'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { MovieModel } from '../model/Movie'
import { ExtendedRequest } from 'src/types'
import isAuth from '../middleware/isAuth'
import { UserModel } from '../model/User'
import { loginValidation, registerValidation } from '../utils/validation'
import verifyToken from '../utils/verifyToken'
require('dotenv').config()
const router = require('express').Router()

// Register validaiton
router.post('/register', async (req: Request, res: Response) => {
	// Validate data entered by user
	const { error } = registerValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	// Check if username already exists
	const usernameExists = await UserModel.findOne({
		username: req.body.username,
	})
	if (usernameExists)
		return res
			.status(400)
			.send({ field: 'username', msg: 'Username already taken' })

	// Check if email already exists
	const emailExists = await UserModel.findOne({ email: req.body.email })
	if (emailExists)
		return res
			.status(400)
			.send({ field: 'email', msg: 'Email is already linked to an account' })
	// Hash passwords
	const hashpw = await argon2.hash(req.body.password)
	// Create a new user
	const user = new UserModel({
		username: req.body.username,
		email: req.body.email,
		password: hashpw,
	})

	try {
		const savedUser = await user.save()
		return res.send(savedUser)
	} catch (err) {
		return res.status(400).send(err)
	}
})

// Login validation
router.post('/login', async (req: ExtendedRequest, res: Response) => {
	const { error } = loginValidation(req.body)
	if (error) return res.status(400).send(error.details[0].message)
	//Check if email exists
	const user = await UserModel.findOne({ username: req.body.username })
	if (!user)
		return res
			.status(400)
			.send({ field: 'username', msg: 'Username or password is incorrect' })

	const valid = await argon2.verify(user.password, req.body.password)
	//Unsuccessful login
	if (!valid)
		return res.status(400).send({ field: 'password', msg: 'Wrong password' })
	//Sign jwt
	const token = jwt.sign(
		{ _id: user._id, username: user.username },
		process.env.TOKEN_SECRET as jwt.Secret,
		{ expiresIn: '1h' },
	)
	return res.header('Authorization', token).send(token)
})

router.post('/auth', async (req: ExtendedRequest, res: Response) => {
	verifyToken(req, res)
})

router.post('/favorites', async (req: ExtendedRequest, res: Response) => {
	const movieData = req.body.movieData
	// Save movie to Movie collection
	console.log('favorites route')
	try {
		let payload = isAuth(req, res)
		if (payload) {
			// const movie = new MovieModel(movieData)
			// await movie.save()
			const user = await UserModel.findOne({ username: payload.username })
			console.log('user.fav:', user?.favorites)
			await UserModel.findOneAndUpdate(
				{ username: user?.username },
				{ $addToSet: { favorites: movieData } },
			)
			console.log('user:', user)
		}
		return res.status(200).send('Added movie to favorites')
	} catch (err) {
		return res.status(400).send(err)
	}
})

router.delete('/favorites', async (req: ExtendedRequest, res: Response) => {
	const movieID = req.body.movieId
	try {
		let payload = isAuth(req, res)
		if (payload) {
			const user = await UserModel.findOne({ username: payload.username })
			console.log('user favorites:', user?.favorites)
			return res.status(200).send(user?.favorites)
			await UserModel.findOneAndUpdate(
				{ username: user?.username },
				{ $addToSet: { favorites: movieID } },
			)
		}
		return res.send(payload)
	} catch (err) {
		return res.send(err)
	}
})

router.get('/favorites', async (req: ExtendedRequest, res: Response) => {
	try {
		let payload = isAuth(req, res)
		if (payload) {
			const user = await UserModel.findOne({ username: payload.username })
			console.log('user favorites:', user?.favorites)
			return res.status(200).send(user?.favorites)
		}
		return res.send(payload)
	} catch (err) {
		return res.send(err)
	}
})

export default router
