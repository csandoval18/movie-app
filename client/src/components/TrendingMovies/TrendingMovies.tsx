import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard/MovieCard'
import { Header, TrendingMoviesContainer } from './TrendingMovies.elements'
import axios from 'axios'

const TrendingMovies = () => {
	const [movie, setMovie] = useState({})

	const getMovieRequest = async () => {
		const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=9eaecb1'
		await fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log('data:', data)
				setMovie(data)
			})
	}

	// Will fetch when page loads
	useEffect(() => {
		getMovieRequest()
	}, [])

	return (
		<>
			<img src='' alt='' />
			<Header>Movie Collection</Header>
			<TrendingMoviesContainer>
				<MovieCard movie={movie}></MovieCard>
			</TrendingMoviesContainer>
		</>
	)
}

export default TrendingMovies
