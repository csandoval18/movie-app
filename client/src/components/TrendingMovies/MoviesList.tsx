import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectMovieSearchInput } from '../../features/searchMovie/searchMovieSlice'
import { MovieData } from '../../types'
import MovieCard from './MovieCard/MovieCard'
import { Header, MoviesListContainer } from './MoviesList.elements'

const TrendingMovies: React.FC = () => {
	const [movies, setMovies] = useState<MovieData[]>([])
	const searchMovieInput = useAppSelector(selectMovieSearchInput)

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=${searchMovieInput}&apikey=9eaecb1`
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log('data:', data)
				setMovies(data.Search)
			})
	}

	// Will fetch when page loads
	useEffect(() => {
		getMovieRequest()
	}, [searchMovieInput])

	return (
		<>
			<img src='' alt='' />
			<Header>Movies</Header>
			<MoviesListContainer>
				{movies.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MoviesListContainer>
		</>
	)
}

export default TrendingMovies
