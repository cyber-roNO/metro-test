import {
	FETCH_EVENTS,
	SET_EVENTS_ERROR,
	SET_EVENTS_FETCHING,
} from '../actions/actionsTypes'

const initialState = {
	events: [],
	error: null,
	eventsFetching: false,
}

export const eventsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_EVENTS:
			return {
				...state,
				events: action.payload,
			}

		case SET_EVENTS_FETCHING:
			return {
				...state,
				eventsFetching: action.payload,
			}

		case SET_EVENTS_ERROR:
			return {
				...state,
				error: action.payload,
			}

		default:
			return state
	}
}
