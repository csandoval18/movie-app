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
	const [currPageNum, setCurrPageNum] = useState<number>(1)
	const [pagPageNums, setPagPageNums] = useState([1, 2, 3, 4])

	let movies = useAppSelector(selectMovies)
	console.log('movies movielist:', movies)
	console.log('currPage:', currPageNum)
	return (
		<MoviesListContainer className='movielist-container'>
			<Header className='header'>Search Results</Header>
			<PaginationBtns />
			<MovieResults className='movie-results'>
				{movies?.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MovieResults>
			{movies.length !== 0 ? <></> : <div></div>}
		</MoviesListContainer>
	)
}

export default MovieList
