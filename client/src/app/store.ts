import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import movieSlice from '../features/movie/movieSlice'
import navbarSlice from '../features/navbar/navbarSlice'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		movie: movieSlice,
		navbar: navbarSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
