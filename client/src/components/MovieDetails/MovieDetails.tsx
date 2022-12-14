import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
	fetchMovieDetailsThunk,
	selectMovieDetails,
} from "../../features/movie/movieSlice"
import { Header } from "../../styles/GlobalStyles.styled"
import { RatingsFields } from "../../utils/types"
import {
	MovieDetailsCard,
	MovieDetailsContainer,
} from "./MovieDetails.elements"

const MovieDetails = () => {
	// Get imdbID from url through useParams hook from react router
	const [loading, setLoading] = useState<Boolean>(true)
	const { imdbID } = useParams()
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchMovieDetailsThunk({ searchVal: imdbID })).then(
			() => setLoading(false),
		)
	}, [])
	const movieDetails = useAppSelector(selectMovieDetails)
	return (
		<MovieDetailsContainer className='movie-details-container'>
			<MovieDetailsCard className='details-card'>
				<Header className='header'>Movie Details</Header>
				{!loading ? (
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
										<td>Type:</td>
										<td>
											{/* {movieDetails?.Type[0].toUpperCase() +
												movieDetails?.Type.substring(1)} */}
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
										<td>
											{movieDetails?.BoxOffice
												? movieDetails.BoxOffice
												: "N/A"}
										</td>
									</tr>
									<tr>
										<td>Country:</td>
										<td>{movieDetails?.Country}</td>
									</tr>
									<tr>
										<td>Language:</td>
										<td>{movieDetails?.Language}</td>
									</tr>
									<tr>
										<td>Plot:</td>
										<td>{movieDetails?.Plot}</td>
									</tr>
									<tr>
										<td>Runtime:</td>
										<td>{movieDetails?.Runtime}</td>
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
										<td>Writer:</td>
										<td>{movieDetails?.Writer}</td>
									</tr>
									<tr>
										<td>Release Date:</td>
										<td>{movieDetails?.Released}</td>
									</tr>
									<tr>
										<td>DVD</td>
										<td>
											{movieDetails?.DVD
												? movieDetails.DVD
												: "N/A"}
										</td>
									</tr>
									<tr>
										<td>Production:</td>
										<td>
											{movieDetails?.Production
												? movieDetails.Production
												: "N/A"}
										</td>
									</tr>
									<tr>
										<td>Metascore:</td>
										<td>{movieDetails?.Metascore}</td>
									</tr>
									<tr>
										<td>IMDB Votes:</td>
										<td>{movieDetails?.imdbVotes}</td>
									</tr>
									<tr>
										<td>Ratings:</td>
										<td>
											<ul>
												{movieDetails?.Ratings.length !== 0
													? movieDetails?.Ratings.map(
															(rating: RatingsFields) => (
																<li
																	key={
																		movieDetails.imdbID +
																		rating.Source
																	}
																>
																	{rating.Source ===
																	"Internet Movie Database"
																		? "IMDB: " + rating.Value
																		: `${rating.Source}: ${rating.Value}`}
																</li>
															),
													  )
													: "N/A"}
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</>
				) : (
					<div>loading movie data...</div>
				)}
			</MovieDetailsCard>
		</MovieDetailsContainer>
	)
}

export default MovieDetails
function dispatch(arg0: any) {
	throw new Error("Function not implemented.")
}
