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

const MovieList: React.FC = () => {
	const [currPageNum, setCurrPageNum] = useState<number>(1)
	const searchMovieInput = useAppSelector(selectMovieSearchInput)
	const [pagPageNums, setPagPageNums] = useState([1, 2, 3, 4])

	let movies = useSearchMovies(currPageNum)
	movies = useSortByYear(movies)

	const increasePagPages = () => {
		console.log('called increase pag pages')
		setPagPageNums(pagPageNums.map((curr) => curr + 4))
	}

	const decreasePagPages = () => {
		setPagPageNums(pagPageNums.map((curr) => curr - 4))
	}
	console.log('currPage:', currPageNum)

	// useEffect(() => {
	// 	console.log('searchMovieInput:', searchMovieInput)
	// }, [searchMovieInput])
	// console.log('movies:', movies)
	return (
		<MoviesListContainer className='movielist-container'>
			<Header className='header'>Search Results</Header>
			<MovieResults className='movie-results'>
				{movies?.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MovieResults>
			{movies.length !== 0 ? (
				<PaginationBtns>
					<div className='btn-group'>
						<button
							className='btn'
							onClick={() => {
								if (currPageNum === 1) return
								if (currPageNum === pagPageNums[0]) decreasePagPages()
								setCurrPageNum(currPageNum - 1)
							}}
						>
							«
						</button>
						<button
							className={
								currPageNum === pagPageNums[0] ? 'btn btn-active' : 'btn'
							}
						>
							{pagPageNums[0]}
						</button>
						<button
							className={
								currPageNum === pagPageNums[1] ? 'btn btn-active' : 'btn'
							}
						>
							{pagPageNums[1]}
						</button>
						<button
							className={
								currPageNum === pagPageNums[2] ? 'btn btn-active' : 'btn'
							}
						>
							{pagPageNums[2]}
						</button>
						<button
							className={
								currPageNum === pagPageNums[3] ? 'btn btn-active' : 'btn'
							}
						>
							{pagPageNums[3]}
						</button>
						<button
							className='btn'
							onClick={() => {
								if (movies.length !== 10) return
								if (currPageNum === pagPageNums[pagPageNums.length - 1])
									increasePagPages()
								setCurrPageNum(currPageNum + 1)
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

export default MovieList
