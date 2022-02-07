import React, { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import EventsPage from './containers/EventsPage/EventsPage'
import CardDetail from './components/CardDetail/CardDetail'
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<EventsPage />} />
				<Route path="/calendar" />
				<Route path="/:id" element={<CardDetail />} />
			
			</Routes>
		</>
	)
}

export default App
