import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import {
	fetchMoviesThunk,
	selectMovies,
	selectMovieSearchInput,
	setMovies,
} from '../../../../features/movie/movieSlice'
import { useSearchMovies } from '../../../../utils/useSearchMovies'
import { useSortByYear } from '../../../../utils/useSortByYear'
import { PaginationBtnsStyle } from '../MoviesList.elements'

const PaginationBtns = () => {
	const [currPageNum, setCurrPageNum] = useState<number>(1)
	const [pagPageNums, setPagPageNums] = useState([1, 2, 3, 4])
	const searchVal = useAppSelector(selectMovieSearchInput)
	const movies = useAppSelector(selectMovies)
	// let movies =  useSearchMovies(currPageNum)
	// movies = useSortByYear(movies)
	let dispatch = useAppDispatch()

	const increasePagPages = () => {
		console.log('increase pages')
		setPagPageNums(pagPageNums.map((curr: number) => curr + 4))
		dispatch(fetchMoviesThunk({ searchVal: searchVal }))
	}

	const decreasePagPages = () => {
		setPagPageNums(pagPageNums.map((curr: number) => curr - 4))
		dispatch(fetchMoviesThunk({ searchVal: searchVal }))
	}
	return (
		<PaginationBtnsStyle>
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
					className={currPageNum === pagPageNums[0] ? 'btn btn-active' : 'btn'}
				>
					{pagPageNums[0]}
				</button>
				<button
					className={currPageNum === pagPageNums[1] ? 'btn btn-active' : 'btn'}
				>
					{pagPageNums[1]}
				</button>
				<button
					className={currPageNum === pagPageNums[2] ? 'btn btn-active' : 'btn'}
				>
					{pagPageNums[2]}
				</button>
				<button
					className={currPageNum === pagPageNums[3] ? 'btn btn-active' : 'btn'}
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
		</PaginationBtnsStyle>
	)
}

export default PaginationBtns
