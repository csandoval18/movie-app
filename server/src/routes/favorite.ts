import { NextFunction, Response } from 'express'
import { UserModel } from '../model/User'
import { ExtendedRequest } from '../types'
import { MovieModel } from '../model/Movie'
import isAuth from '../middleware/isAuth'
import { model } from 'mongoose'
const router = require('express').Router()

router.post(
	'/favorite',
	async (req: ExtendedRequest, res: Response, next: NextFunction) => {
		const movieData = req.body.movieData
		console.log('data:', movieData)
		const movie = new MovieModel(movieData)
		// await movie.save()
		console.log('movie:', movie)
		try {
			let payload = isAuth(req, res)
			console.log('result:', payload)
			if (payload !== false) {
				const user = await UserModel.findOne({ username: payload.username })
				await UserModel.findOneAndUpdate(
					{ username: payload.username },
					{ $push: { favorites: movieData } },
				)
				console.log('user:', user)
			}
			return res.status(200)
		} catch (err) {
			return res.status(400).send('error lol')
		}
	},
)

export default router
