import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	token: '',
	user: {}
}

const authSlice = createSlice({
	name: 'auth',
	initialState: { ...initialState },
	reducers: {
		processLogin (state, action) {
			state.token = action.payload.accessToken
			state.user = action.payload.user
		}
	}
})

export const { processLogin } = authSlice.actions
export default authSlice.reducer