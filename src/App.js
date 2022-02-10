import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import EventsPage from './containers/EventsPage/EventsPage'
import CardDetail from './components/CardDetail/CardDetail'
import CalendarPage from './containers/CalendarPage/CalendarPage'
import { connect } from 'react-redux'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<EventsPage />} />
				<Route path="/calendar" element={<CalendarPage />} />
				<Route path="/:id" element={<CardDetail />} />
			</Routes>
		</>
	)
}

export default connect()(App)
