import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import {
	selectMovies,
	selectMovieSearchInput,
} from '../../../features/movie/movieSlice'
import { Header } from '../../../styles/GlobalStyles.elements'
import { MoviesSearchData } from '../../../types'
import { useSearchMovies } from '../../../utils/useSearchMovies'
import MovieCard from './MovieCard/MovieCard'
import {
	MovieResults,
	MoviesListContainer,
	PaginationBtnsStyle,
} from './MoviesList.elements'
import PaginationBtns from './PaginationBtns/PaginationBtns'

const MovieList: React.FC = () => {
	// Need to add a loader for movie search and disable going to the next/previous page pagination btns while loading

	let movies = useAppSelector(selectMovies)

	console.log('movies movielist:', movies)
	return (
		<MoviesListContainer className='movielist-container'>
			<Header className='header'>Search Results</Header>
			{movies.length !== 0 ? <PaginationBtns /> : <div></div>}
			<MovieResults className='movie-results'>
				{movies?.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MovieResults>
			{/* {movies.length !== 0 ? <PaginationBtns /> : <div></div>} */}
		</MoviesListContainer>
	)
}

export default MovieList
