import React from 'react'
import MovieCard from './MovieCard/MovieCard'
import { TrendingMoviesContainer } from './TrendingMovies.elements'

const TrendingMovies = () => {
	return (
		<>
			<h2>Trending Movies</h2>
			<TrendingMoviesContainer>
				<MovieCard></MovieCard>
				<MovieCard></MovieCard>
				<MovieCard></MovieCard>
				<MovieCard></MovieCard>
			</TrendingMoviesContainer>
		</>
	)
}

export default TrendingMovies
