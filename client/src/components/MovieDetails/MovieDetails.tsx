import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectMovieDetails } from '../../features/movie/movieSlice'
import { Flex, Header } from '../../styles/GlobalStyles.elements'
import MovieList from '../HomePage/MovieList/MoviesList'
import {
	MovieDetailsCard,
	MovieDetailsContainer,
} from './MovieDetails.elements'

const MovieDetails = () => {
	const movieDetails = useAppSelector(selectMovieDetails)
	console.log('movie details:', movieDetails)

	return (
		<MovieDetailsContainer className='movie-details-container'>
			<MovieDetailsCard className='details-card'>
				<Header className='header'>Movie Details</Header>
				{movieDetails ? (
					<>
						<div className='overflow-x-auto'>
							<table className='content-table'>
								<thead>
									<tr>
										<th colSpan={2}>{movieDetails?.Title}</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colSpan={2}>
											<span className='poster-container'>
												<img src={movieDetails?.Poster} alt='' />
											</span>
										</td>
									</tr>
									<tr>
										<th>Type:</th>
										<td>
											{movieDetails?.Type[0].toUpperCase() +
												movieDetails?.Type.substring(1)}
										</td>
									</tr>
									<tr>
										<td>Genre:</td>
										<td>{movieDetails?.Genre}</td>
									</tr>
									<tr>
										<td>Rated:</td>
										<td>{movieDetails?.Rated}</td>
									</tr>
									<tr>
										<td>Actors:</td>
										<td>{movieDetails?.Actors}</td>
									</tr>
									<tr>
										<td>Box Office</td>
										<td>{movieDetails?.BoxOffice}</td>
									</tr>
									<tr>
										<td>Country:</td>
										<td>{movieDetails?.Country}</td>
									</tr>
									<tr>
										<td>Metascore:</td>
										<td>{movieDetails?.Metascore}</td>
									</tr>
									<tr>
										<td>Plot:</td>
										<td>{movieDetails?.Plot}</td>
									</tr>
									<tr>
										<td>Awards:</td>
										<td>{movieDetails?.Awards}</td>
									</tr>
									<tr>
										<td>Director:</td>
										<td>{movieDetails?.Director}</td>
									</tr>
									<tr>
										<td>DVD</td>
										<td>{movieDetails?.DVD}</td>
									</tr>
								</tbody>
							</table>
						</div>
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
					<div>loading movie data...</div>
				)}
			</MovieDetailsCard>
		</MovieDetailsContainer>
	)
}

export default MovieDetails
