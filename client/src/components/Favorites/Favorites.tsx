import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useIsAuth } from '../../utils/api/isAuth'
import { MovieDetailsFields } from '../../utils/types'

interface FavoritesProps {}

const Favorites: React.FC<FavoritesProps> = () => {
	const [favorites, setFavorites] = useState<MovieDetailsFields[]>([])
	const isLoggedIn = useIsAuth()

	const token = sessionStorage.getItem('token') as string

	const fetchFavoriteMovies = async () => {
		await axios
			.get('http://localhost:4000/api/users/favorites/', {
				headers: { Authorization: `${token}` },
			})
			.then((res) => setFavorites(res.data))
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		fetchFavoriteMovies()
	}, [])

	return (
		<div>
			{favorites.map((movie) => (
				<div key={`favorite-${movie.imdbID}`}>{movie.Title}</div>
			))}
		</div>
	)
}

export default Favorites
