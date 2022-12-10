import React, { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"
import { useParams } from "react-router-dom"
import {
	useAppDispatch,
	useAppSelector,
} from "../../../app/hooks"
import {
	fetchMoviesThunk,
	selectLoader,
	selectMovies,
} from "../../../features/movie/movieSlice"
import {
	Flex,
	Header,
} from "../../../styles/GlobalStyles.styled"
import {
	MovieDetailsFields,
	MoviesSearchData,
} from "../../../utils/types"
import NotFound from "../../NotFound/NotFound"
import MovieCard from "./MovieCard/MovieCard"
import {
	MovieResults,
	MoviesListContainer,
} from "./MoviesList.styled"
import PaginationBtns from "./PaginationBtns/PaginationBtns"

const MovieList: React.FC = () => {
	const [loading, setLoading] = useState<Boolean>(true)
	const movies = useAppSelector(selectMovies)
	const { searchInput, pageNum } = useParams()
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(
			fetchMoviesThunk({
				searchVal: searchInput,
				pageNum: parseInt(pageNum as string),
			}),
		).then(() => {
			setLoading(!loading)
		})
	}, [searchInput])

	useEffect(() => {
		console.log("movies:", movies)
		console.log("loading:", loading)
	}, [movies])

	let body
	if (loading === true) {
		body = (
			<Flex jc='center' ai='center'>
				<Oval
					height={35}
					width={35}
					color={"#84a6f0"}
					wrapperStyle={{}}
					wrapperClass=''
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#84a6f0'
					strokeWidth={3}
					strokeWidthSecondary={2}
				/>
			</Flex>
		)
	} else {
		if (movies.length > 0) {
			body = (
				<MoviesListContainer className='movielist-container'>
					<Header className='header'>Search Results</Header>
					{movies.length !== 0 ? (
						<PaginationBtns />
					) : (
						<div></div>
					)}
					<MovieResults className='movie-results'>
						{movies?.map((movie) => (
							<MovieCard
								key={movie.imdbID}
								data={movie}
							></MovieCard>
						))}
					</MovieResults>
					{/* {movies.length !== 0 ? <PaginationBtns /> : <div></div>} */}
				</MoviesListContainer>
			)
		} else {
			body = <NotFound></NotFound>
		}
	}
	return <>{body}</>
}

export default MovieList
