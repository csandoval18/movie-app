import React, { useEffect, useState } from 'react'
import { MovieData } from '../../types'
import MovieCard from './MovieCard/MovieCard'
import { Header, MoviesListContainer } from './MoviesList.elements'

const TrendingMovies: React.FC = () => {
	const [movies, setMovies] = useState<MovieData[]>([])

	// const getMovieRequest = async () => {
	// 	const url = 'http://www.omdbapi.com/?s=star+wars&apikey=9eaecb1'
	// 	await fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log('data:', data)
	// 			setMovies(data.Search)
	// 		})
	// }

	// Will fetch when page loads
	// useEffect(() => {
	// 	getMovieRequest()
	// }, [])
	// console.log('movies:', movies)

	return (
		<>
			<img src='' alt='' />
			<Header>Movies</Header>
			<MoviesListContainer>
				{movies.map((movie) => (
					<MovieCard key={movie.imdbID} data={movie}></MovieCard>
				))}
			</MoviesListContainer>
		</>
	)
}

export default TrendingMovies
