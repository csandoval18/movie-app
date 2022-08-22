import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState, AppThunk } from '../../app/store'
import { MoviesSearchData } from '../../types'
import { useSearchMovies } from '../../utils/useSearchMovies'

export interface SearchMovieState {
	searchVal: String
	movies: MoviesSearchData[]
  loading: Boolean
}

const initialState: SearchMovieState = {
	searchVal: '',
	movies: [],
  loading: false,
}

export const fetchMoviesThunk = createAsyncThunk(
	'movie/fetchMoviesThunk',
	async (pageNumber: number = 1) => {
		const searchMovieInput = selectMovieSearchInput
		const movies = await axios
			.get(
				`http://www.omdbapi.com/?s=${searchMovieInput}&apikey=9eaecb1&page=${pageNumber}`,
			)
			.then((res) => res.data)

		return movies
		// return res.data.Search.map((movie: MoviesSearchData) => movie.Title)
	},
)

export const movieSlice = createSlice({
	name: 'SET_MOVIE_SEARCH_INPUT',
	initialState,
	reducers: {
		setSearchVal: (state, action) => {
			state.searchVal = action.payload
		},
		setMovies: (state, action) => {
			state.movies.push(...action.payload)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMoviesThunk.pending, (state) => {
				state. = 'loading'
			})
			.addCase(fetchMoviesThunk.fulfilled, (state, action) => {
				state.status = 'idle'
				state.movies.push(...action.payload)
			})
			.addCase(fetchMoviesThunk.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export const { setSearchVal, setMovies } = movieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export const selectMovies = (state: RootState) => state.movie.movies
export default movieSlice.reducer
