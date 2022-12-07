import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
	fetchFavoritesThunk,
	selectFavoriteMovies,
} from '../../features/movie/movieSlice'
import { useIsAuth } from '../../utils/api/isAuth'
import MovieCard from '../HomePage/MovieList/MovieCard/MovieCard'
import {
	MovieResults,
	MoviesListContainer,
} from '../HomePage/MovieList/MoviesList.styled'
import { FavoritesBlock } from './Favorites.styled'

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
	const isLoggedIn = useIsAuth()
	const dispatch = useAppDispatch()
	let favorites = useAppSelector(selectFavoriteMovies)

	useEffect(() => {
		dispatch(fetchFavoritesThunk())
		console.log('favorites:', favorites)
	}, [])

	let body
	if (isLoggedIn) {
		body =
			favorites.length > 0 ? (
				favorites.map((movie) => (
					<MovieCard
						key={movie.imdbID}
						data={movie}
						variant={'favorites'}
					></MovieCard>
				))
			) : (
				<div>You have no favorite movies.</div>
			)
	} else {
		/* This still renders first before isloggedin query response is received. 
    Need to add a loader and flag to dsiplay once isloggedin is detected as done*/
		body = <div>Please sign in to see your favorite movies.</div>
	}
	return (
		<FavoritesBlock className='Favorites'>
			<MoviesListContainer className='movielist-container'>
				<MovieResults>{body}</MovieResults>
			</MoviesListContainer>
		</FavoritesBlock>
	)
}

export default Favorites
