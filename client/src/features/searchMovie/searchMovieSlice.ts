import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export interface SearchMovieState {
	searchVal: String
}

const initialState: SearchMovieState = {
	searchVal: '',
}

export const searchMovieSlice = createSlice({
	name: 'searchMovie',
	initialState,
	reducers: {
		// increment: (state) => {
		// 	state.value += 1
		// },
	},
})

// export const { increment, decrement, incrementByAmount } = searchMovieSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
// 	(amount: number): AppThunk =>
// 	(dispatch, getState) => {
// 		const currentValue = selectCount(getState())
// 		if (currentValue % 2 === 1) {
// 			dispatch(incrementByAmount(amount))
// 		}
// 	}

export default searchMovieSlice.reducer
