import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { selectMovieSearchInput } from '../../../features/searchMovie/searchMovieSlice'
import { useSearchMovies } from '../../../utils/useSearchMovies'
import { useSortByYear } from '../../../utils/useSortByYear'
import MovieCard from './MovieCard/MovieCard'
import { Header, MoviesListContainer } from './MoviesList.elements'

const TrendingMovies: React.FC = () => {
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	let movies = useSearchMovies()
	movies = useSortByYear(movies)

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
