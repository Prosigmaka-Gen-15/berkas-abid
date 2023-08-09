import { configureStore } from "@reduxjs/toolkit"

import basicReducer from "./basicReducer"

const store = configureStore({
	reducer: {
		basicReducer: basicReducer
	}
})

export default store