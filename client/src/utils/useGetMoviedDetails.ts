import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectMovieSearchInput } from '../features/searchMovie/searchMovieSlice'
import { MovieSearchData } from '../types'

export const useSearchMovies = (pageNumber = 1): MovieSearchData[] => {
	const [movie, setMovie] = useState<MovieSearchData>()
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
