import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../app/hooks'
import { fetchMovieDetailsThunk } from '../../../../features/movie/movieSlice'
import { MoviesSearchData } from '../../../../types'
import { MovieCardStyle } from './MovieCard.elements'

interface MovieCardProps {
	data: MoviesSearchData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [isFavorite, setIsFavorite] = useState(false)

	const handleAddToFavorites = async () => {
		const movieDetails = await dispatch(
			fetchMovieDetailsThunk({ searchVal: data.imdbID }),
		)
		console.log(movieDetails.payload)
		await axios.post('http://localhost:4000/api/user/')
	}
	return (
		<MovieCardStyle className='card card-compact bg-base-100 shadow-xl'>
			<figure>
				<img src={data.Poster} alt='poster picture' />
			</figure>
			<span className='card-body'>
				<h2 className='card-title'>{data.Title}</h2>
				<p>{data.Type[0].toUpperCase() + data.Type.substring(1)}</p>
				<p>{data.Year}</p>
				<div className='card-actions justify-end'>
					<button
						className='btn btn-primary'
						onClick={() => {
							navigate(`/movie-details/${data.imdbID}`)
						}}
					>
						Details
					</button>
					<button
						className='btn btn-primary'
						onClick={() => {
							setIsFavorite(!isFavorite)
							handleAddToFavorites()
						}}
					>
						{isFavorite ? (
							<IoMdHeart style={{ fontSize: 25 }} />
						) : (
							<IoMdHeartEmpty style={{ fontSize: 25 }} />
						)}
					</button>
				</div>
			</span>
		</MovieCardStyle>
	)
}

export default MovieCard
