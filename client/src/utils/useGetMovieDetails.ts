import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMovieSearchInput } from '../features/movie/movieSlice'
import { MovieDetailsFields } from './types'

export const useGetMovieDetails = (): MovieDetailsFields | undefined => {
	const [movie, setMovie] = useState<MovieDetailsFields | undefined>(undefined)
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	const url = `http://www.omdbapi.com/?t=${searchMovieInput}&apikey=9eaecb1}`

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setMovie(data.Search)
			})
	}, [url])

	return movie
}
