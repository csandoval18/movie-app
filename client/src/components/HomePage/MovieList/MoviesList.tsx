import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
	fetchMoviesThunk,
	selectMovies,
} from '../../../features/movie/movieSlice'
import { Header } from '../../../styles/GlobalStyles.elements'
import MovieCard from './MovieCard/MovieCard'
import { MovieResults, MoviesListContainer } from './MoviesList.elements'
import PaginationBtns from './PaginationBtns/PaginationBtns'

const MovieList: React.FC = () => {
	const { searchInput, pageNum } = useParams()
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(
			fetchMoviesThunk({
				searchVal: searchInput,
				pageNum: parseInt(pageNum as string),
			}),
		)
	}, [searchInput, pageNum])
	const movies = useAppSelector(selectMovies)
	console.log('movies movielist:', movies)
	return (
		<>
			{movies.length > 0 ? (
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
			) : (
				<div></div>
			)}
		</>
	)
}

export default MovieList
