import React from 'react'
import { MovieCardContainer } from './MovieCard.elements'

interface MovieCardProps {
	movie: any
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	return (
		<MovieCardContainer>
			<p>{movie.Title}</p>
			<img src={movie.Poster} alt='' />
			<p>{movie.Year}</p>
		</MovieCardContainer>
	)
}

export default MovieCard
