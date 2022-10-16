import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface SearchBarToggle {
	toggleSearchBar: Boolean
}
const initialState: SearchBarToggle = {
	toggleSearchBar: false,
}
export const navbarSlice = createSlice({
	name: 'TOGGLE_SEARCH_BAR',
	initialState,
	reducers: {
		setToggleSearchBar: (state, action) => {
			state.toggleSearchBar = action.payload
		},
	},
})
export const { setToggleSearchBar } = navbarSlice.actions
export const selectToggleSearchbar = (state: RootState) =>
	state.navbar.toggleSearchBar
export default navbarSlice.reducer
