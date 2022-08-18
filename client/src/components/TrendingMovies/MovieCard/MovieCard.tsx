import React from 'react'
import { MovieData } from '../../../types'
import { MovieCardContainer, Title } from './MovieCard.elements'

interface MovieCardProps {
	data: MovieData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
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
						<button className='btn btn-primary'>Heart</button>
						<button className='btn btn-primary'>Details</button>
					</div>
				</span>
			</div>
		</MovieCardContainer>
	)
}

export default MovieCard
