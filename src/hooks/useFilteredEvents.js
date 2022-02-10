import { useState, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import { ALL_YEARS, ALL_MONTHS } from '../constants/constants'

export const useFilteredEvents = (userEvents, year, mounth) => {
	const [filteredEvents, setFilteredEvents] = useState(userEvents)

	useEffect(() => {
		if (year !== ALL_YEARS && mounth !== ALL_MONTHS) {
			setFilteredEvents(
				userEvents
					.filter((item) => moment(item.date).format('YYYY') === year)
					.filter((item) => moment(item.date).format('MMMM') === mounth)
			)
			return
		}

		if (year === ALL_YEARS && mounth !== ALL_MONTHS) {
			setFilteredEvents(
				userEvents.filter((item) => moment(item.date).format('MMMM') === mounth)
			)
			return
		}

		if (year === ALL_YEARS && mounth !== ALL_MONTHS) {
			setFilteredEvents(
				userEvents.filter((item) => moment(item.date).format('MMMM') === mounth)
			)
			return
		}

		if (year !== ALL_YEARS && mounth === ALL_MONTHS) {
			setFilteredEvents(
				userEvents.filter((item) => moment(item.date).format('YYYY') === year)
			)
			return
		}
		setFilteredEvents(userEvents)
		// eslint-disable-next-line
	}, [userEvents, year, mounth])

	return [filteredEvents]
}
