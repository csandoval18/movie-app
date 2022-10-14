import { Request, Response } from 'express'
import { MovieModel } from '../model/Movie'
const router = require('express').Router()

router.post('/favorite', async (req: Request, res: Response) => {
	const movie = new MovieModel({
		title: req.body.title,
		type: req.body.type,
		cast: req.body.cast,
		rated: req.body.rated,
		directors: req.body.directors,
		plot: req.body.plot,
		release: req.body.realease,
	})
})

export default router
