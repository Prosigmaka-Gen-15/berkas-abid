import { createSlice } from "@reduxjs/toolkit"

const personsSlice = createSlice({
	name: 'persons',
	initialState: [
		{ name: 'Abid', age: 20 },
		{ name: 'John', age: 30 },
		{ name: 'Doe', age: 40 },
	],
	reducers: {
		addPerson (state, action) {
			state.push(action.payload)
		}
	}
})

export const { addPerson } = personsSlice.actions
export default personsSlice.reducer