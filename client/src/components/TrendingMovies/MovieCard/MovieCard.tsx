import React from 'react'
import { MovieData } from '../../../types'
import { MovieCardContainer } from './MovieCard.elements'

interface MovieCardProps {
	data: MovieData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	return (
		<MovieCardContainer>
			<p>{data.Title}</p>
			<img src={data.Poster} alt='' />
			<p>{data.Year}</p>
		</MovieCardContainer>
	)
}

export default MovieCard
