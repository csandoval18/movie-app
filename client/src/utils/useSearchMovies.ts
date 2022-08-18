import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMovieSearchInput } from '../features/searchMovie/searchMovieSlice'
import { MovieData } from '../types'

export const useSearchMovies = (pageNumber = 1): MovieData[] => {
	const [movies, setMovies] = useState<MovieData[]>([])
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	const url = `http://www.omdbapi.com/?s=${searchMovieInput}&apikey=9eaecb1&page=${pageNumber}`

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log('data:', data)
				setMovies(data.Search)
			})
	}, [url])

	return movies
}
