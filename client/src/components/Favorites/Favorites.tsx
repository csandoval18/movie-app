import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useIsAuth } from '../../utils/api/isAuth'
import { MovieDetailsFields } from '../../utils/types'
import MovieCard, {
	cardVariant,
} from '../HomePage/MovieList/MovieCard/MovieCard'
import {
	MovieResults,
	MoviesListContainer,
} from '../HomePage/MovieList/MoviesList.elements'
import { FavoritesBlock } from './Favorites.styled'

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
	const [favorites, setFavorites] = useState<MovieDetailsFields[]>([])
	const isLoggedIn = useIsAuth()

	const token = sessionStorage.getItem('token') as string

	const fetchFavoriteMovies = async () => {
		await axios
			.get('http://localhost:4000/api/users/favorites', {
				headers: { Authorization: `${token}` },
			})
			.then((res) => {
				console.log('res.data:', res.data)
				setFavorites(res.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		fetchFavoriteMovies()
		console.log('favorites:', favorites)
	}, [])

	let body
	if (isLoggedIn) {
		body =
			favorites.length > 0 ? (
				favorites.map((movie) => (
					// <div key={`favorite-${movie.imdbID}`}>{movie.Title}</div>
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
