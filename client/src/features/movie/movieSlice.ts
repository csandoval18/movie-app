import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { useAppSelector } from '../../app/hooks'
import { RootState, AppThunk } from '../../app/store'
import { MovieDetails, MoviesSearchData } from '../../types'
import { useSearchMovies } from '../../utils/useSearchMovies'
import { useSortByYear } from '../../utils/useSortByYear'

export interface SearchMovieState {
	searchVal: String
	movies: MoviesSearchData[]
	movieDetails: MovieDetails | undefined
	loading: Boolean
}

interface fetchMoviesArgs {
	searchVal: String | undefined
	pageNum?: number
}

const initialState: SearchMovieState = {
	searchVal: '',
	movies: [],
	movieDetails: undefined,
	loading: false,
}

export const fetchMoviesThunk = createAsyncThunk(
	'movie/fetchMoviesThunk',
	async (fetchMoviesArgs: fetchMoviesArgs = { searchVal: '', pageNum: 1 }) => {
		const url = `http://www.omdbapi.com/?s=${fetchMoviesArgs.searchVal}&apikey=9eaecb1&page=${fetchMoviesArgs.pageNum}`
		let movies = await axios
			.get(url)
			.then((res) => res.data.Search)
			.catch((err) => console.log(err))
		movies = useSortByYear(movies)
		return movies
	},
)

export const fetchMovieDetailsThunk = createAsyncThunk(
	'movie/fetchMovieDetails',
	async (fetchMoviesArgs: fetchMoviesArgs) => {
		const url = `http://www.omdbapi.com/?i=${fetchMoviesArgs.searchVal}&apikey=9eaecb1`
		let movie = await axios
			.get(url)
			.then((res) => res.data)
			.catch((err) => console.log(err))
		return movie
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
			.addCase(fetchMovieDetailsThunk.fulfilled, (state, action) => {
				state.loading = false
				state.movieDetails = action.payload
			})
			.addCase(fetchMovieDetailsThunk.rejected, (state) => {
				state.loading = false
				state.movieDetails = undefined
			})
	},
})

export const { setSearchVal, setMovies } = movieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export const selectMovies = (state: RootState) => state.movie.movies
export const selectMovieDetails = (state: RootState) => state.movie.movieDetails
export default movieSlice.reducer
