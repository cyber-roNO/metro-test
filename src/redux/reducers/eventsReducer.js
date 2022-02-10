import {
	FETCH_EVENTS,
	SET_EVENTS_ERROR,
	SET_EVENTS_FETCHING,
	FETCH_LISTINGS_SUCCESS,
} from '../actions/actionsTypes'

const initialState = {
	events: [],
	error: null,
	eventsFetching: false,
	pageSize: 0,
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
		case FETCH_LISTINGS_SUCCESS:
			return {
				...state,
				pageSize: state.pageSize + 3,
				events: [...state.events, ...action.events],
			}
		default:
			return state
	}
}
