import {configureStore, createSlice} from '@reduxjs/toolkit'

const conterSlice = createSlice({
	name: 'counter',
	initialState: {count: 0},
	reducers: {
		increment: (state) => {state.count += 1},
		decrement: (state) => {state.count -= 1},
		reset: (state) => {state.count = 0}
	}
})

export const {increment, decrement, reset} = conterSlice.actions

export function makeStore() {
	return configureStore({
		reducer: {
			counter: conterSlice.reducer
		}
	})
}