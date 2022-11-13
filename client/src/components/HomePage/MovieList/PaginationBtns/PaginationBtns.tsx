import { useEffect, useState } from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import {
	fetchMoviesThunk,
	selectMovies,
	selectMovieSearchInput,
} from '../../../../features/movie/movieSlice'
import { PaginationBtnsStyle } from '../MoviesList.elements'

const PaginationBtns = () => {
	const movies = useAppSelector(selectMovies)
	const { searchInput, pageNum } = useParams()
	const [pagPageNums, setPagPageNums] = useState([1, 2, 3, 4])
	const [currPageNum, setCurrPageNum] = useState<number>(
		pageNum ? parseInt(pageNum) : 1,
	)

	const navigate = useNavigate()
	let dispatch = useAppDispatch()
	const searchVal = useAppSelector(selectMovieSearchInput)

	console.log('currpage:', currPageNum)
	console.log('serachVal:', searchVal)

	const increasePagPages = () => {
		setPagPageNums(pagPageNums.map((curr: number) => curr + 4))
	}
	const decreasePagPages = () => {
		setPagPageNums(pagPageNums.map((curr: number) => curr - 4))
	}

	useEffect(() => {
		if (searchVal) {
			dispatch(
				fetchMoviesThunk({
					searchVal: searchVal,
					pageNum: currPageNum,
				}),
			)
			navigate(`/search=${searchInput}&page=${currPageNum}`)
		} else return
	}, [searchVal, currPageNum])
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
