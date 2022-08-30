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
			{movieDetails ? (
				<>
					<p>{movieDetails?.Title}</p>
					<Flex ai='center' jc='center'>
						<img src={movieDetails?.Poster} alt='' />
					</Flex>

					<p>
						Type:{' '}
						{movieDetails?.Type[0].toUpperCase() +
							movieDetails?.Type.substring(1)}
					</p>
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
					<p>Production: {movieDetails?.Production}</p>
					<p>Country: {movieDetails?.Language}</p>
					<p>Released: {movieDetails?.Released}</p>
					<p>Runtime: {movieDetails?.Runtime}</p>
					<p>Writer: {movieDetails?.Writer}</p>
					<p>IMDB Rating: {movieDetails?.imdbRating}</p>
					<p>IMDB Votes: {movieDetails?.imdbVotes}</p>
					<p>Ratings:</p>
					<Flex bg='yellow'>
						{movieDetails?.Ratings.map((rating) => (
							<div>
								<p>{rating.Source}</p> <p>{rating.Value}</p>
							</div>
						))}
					</Flex>
				</>
			) : (
				<div>No movie data</div>
			)}
		</MovieDetailsContainer>
	)
}

export default MovieDetails
