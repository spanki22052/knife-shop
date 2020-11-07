const initialState = {
	menuState: false
}

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_MENU_STATE":
			return {
				...state,
				menuState: !state.menuState
			}
		case "SET_FALSE_STATE":
			if (state.menuState) {
				return {
					...state,
					menuState: false
				}
			}
			return {
				...state
			}
		default:
			return state;
	}
}

export default menuReducer;