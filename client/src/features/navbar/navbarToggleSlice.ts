import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface SearchBarToggle {
	toggleSearchBar: boolean
}

const initialState: SearchBarToggle = {
	toggleSearchBar: false,
}

export const navbarSlice = createSlice({
	name: 'SET_MOVIE_SEARCH_INPUT',
	initialState,
	reducers: {
		setToggleSearchBar: (state, action) => {
			state.toggleSearchBar = action.payload
		},
	},
})

export const { setToggleSearchBar } = navbarSlice.actions
export const selectMovieSearchInput = (state: RootState) =>
	state.movie.searchVal
export default navbarSlice.reducer
