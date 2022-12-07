import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useAppDispatch,
	useAppSelector,
} from '../../../../app/hooks'
import {
	fetchMoviesThunk,
	selectMovies,
} from '../../../../features/movie/movieSlice'
import { setPagBtnValues } from '../../../../utils/useSetPagBtnRange'
import { PaginationBtnsStyle } from '../MoviesList.styled'

const PaginationBtns = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const movies = useAppSelector(selectMovies)
	const { searchInput, pageNum } = useParams()
	const pageNumInt = parseInt(pageNum as string)
	const [pageNums, setPageNums] = useState<number[]>(
		setPagBtnValues(pageNumInt),
	)
	const [currPageNum, setCurrPageNum] = useState<number>(
		pageNum ? parseInt(pageNum) : 1,
	)
	const increasePagPages = () => {
		setPageNums(pageNums.map((curr: number) => curr + 4))
	}
	const decreasePagPages = () => {
		setPageNums(pageNums.map((curr: number) => curr - 4))
	}
	useEffect(() => {
		if (searchInput) {
			dispatch(
				fetchMoviesThunk({
					searchVal: searchInput,
					pageNum: currPageNum,
				}),
			)
			navigate(`/search=${searchInput}&page=${currPageNum}`)
		} else return
	}, [searchInput, currPageNum])
	return (
		<PaginationBtnsStyle>
			<div className='btn-group'>
				<button
					className='btn'
					onClick={() => {
						if (currPageNum === 1) return
						if (currPageNum === pageNums[0]) decreasePagPages()
						setCurrPageNum(currPageNum - 1)
					}}
				>
					«
				</button>
				<button
					className={
						currPageNum === pageNums[0]
							? 'btn btn-active'
							: 'btn'
					}
				>
					{pageNums[0]}
				</button>
				<button
					className={
						currPageNum === pageNums[1]
							? 'btn btn-active'
							: 'btn'
					}
				>
					{pageNums[1]}
				</button>
				<button
					className={
						currPageNum === pageNums[2]
							? 'btn btn-active'
							: 'btn'
					}
				>
					{pageNums[2]}
				</button>
				<button
					className={
						currPageNum === pageNums[3]
							? 'btn btn-active'
							: 'btn'
					}
				>
					{pageNums[3]}
				</button>
				<button
					className='btn'
					onClick={() => {
						/* Pagination next button disable does not work if last page with results = 10 and next page has 0. 
              I would need to call and extra movie to see if there is more results, 
              but omdb does not allow to fetch more than 10 movies. I can either switch 
              to displaying max 9 movies per page and using the 10th as a check for the 
              next page, or I can fetch the next 10 results and check the length
            */
						if (movies.length !== 10) return
						if (currPageNum === pageNums[pageNums.length - 1])
							increasePagPages()
						setCurrPageNum(currPageNum + 1)
						console.log('curr page num:', currPageNum)
						navigate(
							`/search=${searchInput}&page=${currPageNum}`,
						)
					}}
				>
					»
				</button>
			</div>
		</PaginationBtnsStyle>
	)
}

export default PaginationBtns
