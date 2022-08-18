import React, { useState } from 'react'
import { MovieData } from '../../../types'
import { MovieCardContainer } from './MovieCard.elements'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

interface MovieCardProps {
	data: MovieData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const [isFavorite, setIsFavorite] = useState(false)
	return (
		<MovieCardContainer>
			<div className='card w-96 glass'>
				<figure>
					<img src={data.Poster} alt='poster picture' />
				</figure>
				<span className='card-body'>
					<h2 className='card-title'>{data.Title}</h2>
					<p>{data.Type}</p>
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
