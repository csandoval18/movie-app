import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
	IoMdClose,
	IoMdHeart,
	IoMdHeartEmpty,
} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../app/hooks'
import {
	fetchFavoritesThunk,
	fetchMovieDetailsThunk,
} from '../../../../features/movie/movieSlice'
import {
	MovieDetailsFields,
	MoviesSearchData,
} from '../../../../utils/types'
import { useIsAuth } from '../../../../utils/api/isAuth'
import { MovieCardStyle } from './MovieCard.styled'

export const enum cardVariant {
	default = '',
	favorites = 'favorites',
}

interface MovieCardProps {
	data: MoviesSearchData | MovieDetailsFields
	variant?: string
}

const MovieCard: React.FC<MovieCardProps> = ({
	data,
	variant,
}) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [isFavorite, setIsFavorite] = useState(false)
	const isLoggedIn = useIsAuth()
	const token = sessionStorage.getItem('token') as string

	const addToFavorites = async () => {
		const movieDetails = await dispatch(
			fetchMovieDetailsThunk({ searchVal: data.imdbID }),
		)
		console.log(movieDetails.payload)
		await axios.post(
			'http://localhost:4000/api/users/favorites/',
			{
				movieData: movieDetails.payload,
			},
			{
				headers: { Authorization: token },
			},
		)
	}
	const handleRemoveMovie = async () => {
		let flag = null
		flag = await axios.delete(
			'http://localhost:4000/api/users/favorites',
			{
				data: { movieID: data.imdbID },
				headers: { Authorization: token },
			},
		)
		if (flag) return true
		else return false
	}
	let cardActions
	if (variant === 'favorites') {
		cardActions = (
			<>
				<button
					className='btn btn-outline btn-accent'
					onClick={() => {
						navigate(`/movie-details/${data.imdbID}`)
					}}
				>
					Details
				</button>
				<button
					className='btn btn-outline btn-square btn-error'
					onClick={async () => {
						await handleRemoveMovie()
						dispatch(fetchFavoritesThunk())
					}}
				>
					<IoMdClose fontSize={32}></IoMdClose>
				</button>
			</>
		)
	} else {
		cardActions = (
			<>
				<button
					className='btn btn-outline btn-accent'
					onClick={() => {
						navigate(`/movie-details/${data.imdbID}`)
					}}
				>
					Details
				</button>
				{isLoggedIn ? (
					<button
						className='btn btn-outline btn-primary'
						onClick={() => {
							setIsFavorite(!isFavorite)
							addToFavorites()
						}}
					>
						{isFavorite ? (
							<IoMdHeart style={{ fontSize: 25 }} />
						) : (
							<IoMdHeartEmpty style={{ fontSize: 25 }} />
						)}
					</button>
				) : (
					<></>
				)}
			</>
		)
	}
	return (
		<MovieCardStyle className='card card-compact bg-base-100 shadow-xl'>
			<figure>
				<img src={data.Poster} alt='poster picture' />
			</figure>
			<span className='card-body'>
				<h2 className='card-title'>{data.Title}</h2>
				<p>
					{data.Type[0].toUpperCase() + data.Type.substring(1)}
				</p>
				<p>{data.Year}</p>
				<div className='card-actions justify-end'>
					{cardActions}
				</div>
			</span>
		</MovieCardStyle>
	)
}

export default MovieCard
