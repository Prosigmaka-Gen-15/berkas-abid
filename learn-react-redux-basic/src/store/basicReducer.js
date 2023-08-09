
function basicReducer (state = 'abid', action) {
	if (action.type === 'ubahNama') {
		return 'bambang'
	}

	return state
}

export default basicReducer