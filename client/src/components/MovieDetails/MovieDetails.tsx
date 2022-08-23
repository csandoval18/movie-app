import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectMovieDetails } from '../../features/movie/movieSlice'
import { Flex, Header } from '../../styles/GlobalStyles.elements'
import { MovieDetailsContainer } from './MovieDetails.elements'

const MovieDetails = () => {
	const movieDetails = useAppSelector(selectMovieDetails)
	console.log('movie details:', movieDetails)

	return (
		<MovieDetailsContainer>
			<Header className='header'>Movie Details</Header>
			<p>{movieDetails?.Title}</p>
			<Flex ai='center' jc='center'>
				<img src={movieDetails?.Poster} alt='' />
			</Flex>

			<p>Genre: {movieDetails?.Genre}</p>
			<p>Rated: {movieDetails?.Rated}</p>
			<p>Actors: {movieDetails?.Actors}</p>
			<p>Box Office: {movieDetails?.BoxOffice}</p>
			<p>Country: {movieDetails?.Country}</p>
			<p>Plot: {movieDetails?.Plot}</p>
			<p>Awards: {movieDetails?.Awards}</p>
			<p>Metascore: {movieDetails?.Metascore}</p>
			<p>Country: {movieDetails?.DVD}</p>
			<p>Country: {movieDetails?.Director}</p>
			<p>Country: {movieDetails?.Production}</p>
			<p>Country: {movieDetails?.Language}</p>
			<p>Ratings:</p>
			<Flex bg='yellow'>
				{movieDetails?.Ratings.map((rating) => (
					<div>
						<p>{rating.Source}</p> <p>{rating.Value}</p>
					</div>
				))}
			</Flex>
			<p>Released: {movieDetails?.Released}</p>
			<p>Runtime: {movieDetails?.Runtime}</p>
		</MovieDetailsContainer>
	)
}

export default MovieDetails
