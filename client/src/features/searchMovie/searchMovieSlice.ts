import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface SearchMovieState {
	searchVal: String
}

const initialState: SearchMovieState = {
	searchVal: '',
}

export const searchMovieSlice = createSlice({
	name: 'SET_MOVIE_SEARCH_INPUT',
	initialState,
	reducers: {
		setSearchVal: (state, action) => {
			state.searchVal = action.payload
		},
	},
})

export const { setSearchVal } = searchMovieSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.searchMovie.searchVal
export default searchMovieSlice.reducer
