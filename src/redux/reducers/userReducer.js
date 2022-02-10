import {
	ADD_EVENT,
	REMOVE_EVENT,
	SET_FIRST_NAME,
	SET_SECOND_NAME,
} from '../actions/actionsTypes'

const initialState = {
	firstName: '',
	secondName: '',
	userEvents: [],
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FIRST_NAME:
			return {
				...state,
				firstName: action.payload,
			}

		case SET_SECOND_NAME:
			return {
				...state,
				secondName: action.payload,
			}

		case ADD_EVENT:
			return {
				...state,
				userEvents: [...state.userEvents, action.payload],
			}

		case REMOVE_EVENT:
			return {
				...state,
				userEvents: state.userEvents.filter(
					(el) => el.id !== action.payload.id
				),
			}

		default:
			return state
	}
}
