import {
	FETCH_EVENTS,
	SET_EVENTS_ERROR,
	SET_EVENTS_FETCHING,
} from './actionsTypes'
import axios from 'axios'

export const setEvents = (events) => ({
	type: FETCH_EVENTS,
	payload: events,
})

export const setEventsError = (err) => ({
	type: SET_EVENTS_ERROR,
	payload: err,
})

export const setEventsFetching = (fetching) => ({
	type: SET_EVENTS_FETCHING,
	payload: !!fetching,
})

export const fetchEvents = () => {
	return async (dispatch) => {
		try {
			dispatch(setEventsFetching(true))
			const events = await axios.get(
				'https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62'
			)
			dispatch(setEventsFetching(false))
			dispatch(setEvents(events?.data || []))
		} catch (error) {
			dispatch(setEventsFetching(false))
			dispatch(setEventsError(error?.message || error?.msg))
		}
	}
}
