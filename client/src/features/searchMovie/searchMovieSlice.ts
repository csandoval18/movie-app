import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface SearchMovieState {
	searchVal: String
}

const initialState: SearchMovieState = {
	searchVal: '',
}

export const searchMovieSlice = createSlice({
	name: 'searchMovieVal',
	initialState,
	reducers: {
		setSearchVal: (state) => {
			state.searchVal = state.searchVal
		},
	},
})

export const { setSearchVal } = searchMovieSlice.actions
export const selectCount = (state: RootState) => state.counter.value
export default searchMovieSlice.reducer
