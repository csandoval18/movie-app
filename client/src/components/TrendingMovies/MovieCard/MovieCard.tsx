import React from 'react'
import { MovieData } from '../../../types'
import { MovieCardContainer, Title } from './MovieCard.elements'

interface MovieCardProps {
	data: MovieData
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	return (
		<MovieCardContainer>
			<Title>
				<p>{data.Title}</p>
			</Title>
			<img src={data.Poster} alt='' />
			<p>{data.Year}</p>
		</MovieCardContainer>
	)
}

export default MovieCard
