import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useAppSelector } from '../../../app/hooks'
import { selectMovieSearchInput } from '../../../features/searchMovie/searchMovieSlice'
import { Header } from '../../../styles/GlobalStyles.elements'
import { MovieData } from '../../../types'
import { useSearchMovies } from '../../../utils/useSearchMovies'
import { useSortByYear } from '../../../utils/useSortByYear'
import MovieCard from './MovieCard/MovieCard'
import {
	MovieResults,
	MoviesListContainer,
	PaginationBtns,
} from './MoviesList.elements'

const TrendingMovies: React.FC = () => {
	const [pageNumber, setPageNumber] = useState<number>(1)
	const searchMovieInput = useAppSelector(selectMovieSearchInput)

	let movies = useSearchMovies(pageNumber)
	movies = useSortByYear(movies)

	// const switchPages = (direction: string): any => {
	// 	switch (direction) {
	// 		case 'left':
	// 		case 'right':
	// 			setPageNumber(pageNumber + 1)
	// 	}
	// }

	useEffect(() => {
		console.log('searchMovieInput:', searchMovieInput)
	}, [searchMovieInput])

	return (
		<MoviesListContainer>
			<Header>Search Result</Header>
			<MovieResults className='movie-results'>
				{movies?.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MovieResults>
			{movies ? (
				<PaginationBtns>
					<div className='btn-group'>
						<button
							className='btn'
							onClick={() => {
								if (pageNumber === 1) return
								setPageNumber(pageNumber - 1)
							}}
						>
							«
						</button>
						<button className='btn btn-active'>1</button>
						<button className='btn'>2</button>
						<button className='btn'>3</button>
						<button className='btn'>4</button>
						<button
							className='btn'
							onClick={() => {
								setPageNumber(pageNumber + 1)
							}}
						>
							»
						</button>
					</div>
				</PaginationBtns>
			) : (
				<div></div>
			)}
		</MoviesListContainer>
	)
}

export default TrendingMovies
