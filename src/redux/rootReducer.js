import { combineReducers } from 'redux'
import { eventsReducer } from './reducers/eventsReducer'
import { userReducer } from './reducers/userReducer'

export const rootReducer = combineReducers({
	user: userReducer,
	events: eventsReducer,
})
