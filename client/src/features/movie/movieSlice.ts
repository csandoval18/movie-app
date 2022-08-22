import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { useAppSelector } from '../../app/hooks'
import { RootState, AppThunk } from '../../app/store'
import { MoviesSearchData } from '../../types'
import { useSearchMovies } from '../../utils/useSearchMovies'

export interface SearchMovieState {
	searchVal: String
	movies: MoviesSearchData[]
	loading: Boolean
}

interface fetchMoviesArgs {
	searchVal: String | undefined
	pageNum?: number
}

const initialState: SearchMovieState = {
	searchVal: '',
	movies: [],
	loading: false,
}

export const fetchMoviesThunk = createAsyncThunk(
	'movie/fetchMoviesThunk',
	async (fetchMoviesArgs: fetchMoviesArgs) => {
		const url = `http://www.omdbapi.com/?s=${fetchMoviesArgs.searchVal}&apikey=9eaecb1`
		const movies = await axios
			.get(url)
			.then((res) => res.data.Search)
			.catch((err) => console.log(err))
		return movies
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
	},
})

export const { setSearchVal, setMovies } = movieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export const selectMovies = (state: RootState) => state.movie.movies
export default movieSlice.reducer
