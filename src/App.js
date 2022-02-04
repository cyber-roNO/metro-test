import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import EventsPage from './containers/EventsPage/EventsPage'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<EventsPage />} />
				<Route path="/calendar" />
			</Routes>
		</>
	)
}

export default App
