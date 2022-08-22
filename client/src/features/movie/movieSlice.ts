import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'
import { MoviesSearchData } from '../../types'

export interface SearchMovieState {
	searchVal: String
	movies: MoviesSearchData[]
}

const initialState: SearchMovieState = {
	searchVal: '',
	movies: [],
}

export const movieSlice = createSlice({
	name: 'SET_MOVIE_SEARCH_INPUT',
	initialState,
	reducers: {
		setSearchVal: (state, action) => {
			state.searchVal = action.payload
		},
		setMovies: (state, action) => {
			state.movies = action.payload
		},
	},
})

export const { setSearchVal } = movieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export default movieSlice.reducer
