import React, { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"
import {
	useAppDispatch,
	useAppSelector,
} from "../../app/hooks"
import {
	fetchFavoritesThunk,
	selectFavoriteMovies,
} from "../../features/movie/movieSlice"
import { Flex } from "../../styles/GlobalStyles.styled"
import { useIsAuth } from "../../utils/api/isAuth"
import MovieCard from "../HomePage/MovieList/MovieCard/MovieCard"
import {
	MovieResults,
	MoviesListContainer,
} from "../HomePage/MovieList/MoviesList.styled"
import { FavoritesBlock } from "./Favorites.styled"

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
	const [loading, setLoading] = useState<Boolean>(true)
	const isLoggedIn = useIsAuth()
	const dispatch = useAppDispatch()
	let favorites = useAppSelector(selectFavoriteMovies)

	useEffect(() => {
		dispatch(fetchFavoritesThunk()).then(() =>
			setLoading(false),
		)
		console.log("favorites:", favorites)
	}, [])

	let body
	if (!isLoggedIn.payload && !loading) {
		body =
			favorites.length > 0 ? (
				favorites.map((movie) => (
					<MovieCard
						key={movie.imdbID}
						data={movie}
						variant={"favorites"}
					></MovieCard>
				))
			) : (
				<div>You have no favorite movies.</div>
			)
	} else if (!isLoggedIn && !loading) {
		body = (
			<div>Please sign in to see your favorite movies.</div>
		)
	} else {
		body = (
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
		)
	}
	return (
		<>
			{!loading ? (
				<FavoritesBlock className='Favorites'>
					<MoviesListContainer className='movielist-container'>
						<MovieResults>{body}</MovieResults>
					</MoviesListContainer>
				</FavoritesBlock>
			) : (
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
			)}
		</>
	)
}

export default Favorites
