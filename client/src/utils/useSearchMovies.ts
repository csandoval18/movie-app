import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMovieSearchInput } from '../features/movie/movieSlice'
import { MoviesSearchData } from '../types'

export const useSearchMovies = async (
	pageNumber = 1,
): Promise<MoviesSearchData[]> => {
	const [movies, setMovies] = useState<MoviesSearchData[]>([])
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	const url = `http://www.omdbapi.com/?s=${searchMovieInput}&apikey=9eaecb1&page=${pageNumber}`

	await fetch(url)
		.then((res) => res.json())
		.then((data) => {
			setMovies(data.Search)
		})

	return movies
}
