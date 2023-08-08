import { configureStore } from "@reduxjs/toolkit"
import personsSlice from "./personsSlice.js"

const store = configureStore({
	reducer: {
		persons: personsSlice
	}
})

export default store