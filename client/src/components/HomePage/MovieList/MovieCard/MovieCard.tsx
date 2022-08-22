import React, { useState } from 'react'
import { MovieCardContainer } from './MovieCard.elements'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MoviesSearchData } from '../../../../types'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../app/hooks'

interface MovieCardProps {
	data: MoviesSearchData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const [isFavorite, setIsFavorite] = useState(false)

	return (
		<MovieCardContainer
			onClick={() => {
				navigate('/movie-details')
			}}
		>
			<div className='card card-compact bg-base-100 shadow-xl'>
				<figure>
					<img src={data.Poster} alt='poster picture' />
				</figure>
				<span className='card-body'>
					<h2 className='card-title'>{data.Title}</h2>
					<p>{data.Type[0].toUpperCase() + data.Type.substring(1)}</p>
					<p>{data.Year}</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-primary'>Details</button>
						<button
							className='btn btn-primary'
							onClick={() => {
								setIsFavorite(!isFavorite)
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
			</div>
		</MovieCardContainer>
	)
}

export default MovieCard
