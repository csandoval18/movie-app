import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import {
	MovieDetailsFields,
	MoviesSearchData,
} from '../../utils/types'
import { useSortByYear } from '../../utils/useSortByYear'

export interface MovieSliceState {
	searchVal: String
	movies: MoviesSearchData[]
	movieDetails: MovieDetailsFields | undefined
	favorites: MovieDetailsFields[]
	loading: Boolean
}
interface fetchMoviesArgs {
	searchVal: String | undefined
	pageNum?: number
}
const initialState: MovieSliceState = {
	searchVal: '',
	movies: [],
	movieDetails: undefined,
	favorites: [],
	loading: false,
}
export const fetchMoviesThunk = createAsyncThunk(
	'movie/fetchMoviesThunk',
	async (
		fetchMoviesArgs: fetchMoviesArgs = {
			searchVal: '',
			pageNum: 1,
		},
	) => {
		const url = `http://www.omdbapi.com/?s=${fetchMoviesArgs.searchVal}&apikey=9eaecb1&page=${fetchMoviesArgs.pageNum}`
		let movies = await axios
			.get(url)
			.then((res) => res.data.Search)
			.catch((err) => console.log(err))
		// movies = useSortByYear(movies)
		return movies
	},
)
export const fetchMovieDetailsThunk = createAsyncThunk(
	'movie/fetchMovieDetails',
	async (fetchMoviesArgs: fetchMoviesArgs) => {
		const url = `http://www.omdbapi.com/?i=${fetchMoviesArgs.searchVal}&apikey=9eaecb1`
		const movie = await axios
			.get(url)
			.then((res) => res.data)
			.catch((err) => console.log(err))
		return movie
	},
)
export const fetchFavoritesThunk = createAsyncThunk(
	'movie/fetchFavoritesThunk',
	async (): Promise<MovieDetailsFields[]> => {
		const url = 'http://localhost:4000/api/users/favorites'
		const token = sessionStorage.getItem('token') as string
		const result = await axios
			.get(url, {
				headers: { Authorization: token },
			})
			.then((res) => res.data)
			.catch((err) => console.log(err))
		return result
	},
)
export const movieSlice = createSlice({
	name: 'MOVIE_SLICE',
	initialState,
	reducers: {
		setSearchVal: (state, action) => {
			state.searchVal = action.payload
		},
		setMovies: (state, action) => {
			state.movies.push(...action.payload)
		},
		setFavorites: (state, action) => {
			state.favorites = action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			// fetchMoviesThunk Cases
			.addCase(fetchMoviesThunk.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchMoviesThunk.fulfilled, (state, action) => {
				state.loading = false
				state.movies = [...action.payload]
			})
			.addCase(fetchMoviesThunk.rejected, (state) => {
				state.loading = false
				state.movies = []
			})
			// fetchMovieDetailsThunk Cases
			.addCase(fetchMovieDetailsThunk.pending, (state) => {
				state.loading = true
			})
			.addCase(
				fetchMovieDetailsThunk.fulfilled,
				(state, action) => {
					state.loading = false
					state.movieDetails = action.payload
				},
			)
			.addCase(fetchMovieDetailsThunk.rejected, (state) => {
				state.loading = false
				state.movieDetails = undefined
			})
			// fetchFavoritesThunk Cases
			.addCase(fetchFavoritesThunk.pending, (state) => {
				state.loading = true
			})
			.addCase(
				fetchFavoritesThunk.fulfilled,
				(state, action) => {
					state.loading = false
					state.favorites = action.payload
				},
			)
			.addCase(fetchFavoritesThunk.rejected, (state) => {
				state.loading = false
				state.favorites = []
			})
	},
})
export const { setSearchVal, setMovies, setFavorites } =
	movieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export const selectMovies = (state: RootState) =>
	state.movie.movies
export const selectMovieDetails = (state: RootState) =>
	state.movie.movieDetails
export const selectFavoriteMovies = (state: RootState) =>
	state.movie.favorites
export default movieSlice.reducer
