import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectMovieSearchInput } from '../../features/searchMovie/searchMovieSlice'
import { MovieData } from '../../types'
import MovieCard from './MovieCard/MovieCard'
import { Header, MoviesListContainer } from './MoviesList.elements'
import { useSearchMovies } from '../../utils/useSearchMovies'

const TrendingMovies: React.FC = () => {
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	let movies = useSearchMovies()

	useEffect(() => {
		console.log('searchMovieInput:', searchMovieInput)
	}, [searchMovieInput])

	return (
		<>
			<img src='' alt='' />
			<Header>Movies</Header>
			<MoviesListContainer>
				{movies?.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MoviesListContainer>
		</>
	)
}

export default TrendingMovies
