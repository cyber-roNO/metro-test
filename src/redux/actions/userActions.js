import {
	ADD_EVENT,
	REMOVE_EVENT,
	SET_FIRST_NAME,
	SET_SECOND_NAME,
} from './actionsTypes'

export const addEvent = (event) => ({
	type: ADD_EVENT,
	payload: event,
})

export const removeEvent = (event) => ({
	type: REMOVE_EVENT,
	payload: event,
})

export const setFirstName = (name) => ({
	type: SET_FIRST_NAME,
	payload: name,
})

export const setSecondName = (surname) => ({
	type: SET_SECOND_NAME,
	payload: surname,
})
