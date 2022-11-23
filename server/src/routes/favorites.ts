import { Request, Response } from 'express'
import { MovieModel } from '../model/Movie'
const router = require('express').Router()

router.post('/favorite', async (req: Request, res: Response) => {
	const data = req.body.data
	const movie = new MovieModel(data)
	try {
		const savedMovie = await movie.save()
		return res.send(savedMovie)
	} catch (err) {
		return res.status(400).send(err)
	}
})

export default router
