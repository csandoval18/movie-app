import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface PaginationFields {
	currPageNum: number
}

const initialState: PaginationFields = {
	currPageNum: 1,
}

export const paginationSlice = createSlice({
	name: 'CURR_PAGE_NUMBER',
	initialState,
	reducers: {
		setCurrPageNum: (state, action) => {
			state.currPageNum = action.payload
		},
	},
})

export const { setCurrPageNum } = paginationSlice.actions
export const selectToggleSearchbar = (state: RootState) =>
	state.pagination.currPageNum
export default paginationSlice.reducer
