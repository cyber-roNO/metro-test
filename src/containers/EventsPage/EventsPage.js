import '../../loader/loader.css'
import { useState, useEffect } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box, Container } from '@mui/material'
import MyCard from '../../components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../../redux/actions/eventsActions'
import { useFilteredEvents } from '../../hooks/useFilteredEvents'
import { years, months, ALL_YEARS, ALL_MONTHS } from '../../constants/constants'

export default function EventsPage() {
	const [year, setYear] = useState(() => {
		const saved = localStorage.getItem('year')
		return saved || ALL_YEARS
	})
	const [month, setmonth] = useState(() => {
		const saved = localStorage.getItem('month')
		return saved || ALL_MONTHS
	})

	const handleChangeYear = (event) => {
		setYear(event.target.value)
	}
	const handleChangemonth = (event) => {
		setmonth(event.target.value)
	}

	useEffect(() => {
		localStorage.setItem('year', year)
		localStorage.setItem('month', month)
		// eslint-disable-next-line
	}, [year, month])

	const dispatch = useDispatch()
	const { events, eventsFetching, error } = useSelector((state) => state.events)
	const [filteredEvents] = useFilteredEvents(events, year, month)

	useEffect(() => {
		dispatch(fetchEvents())
		// eslint-disable-next-line
	}, [])

	if (error) {
		return <div>Ошибка: {error?.message || error}</div>
	}

	if (!!eventsFetching) {
		return (
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}

	return (
		<Container
			maxWidth="md"
			sx={{
				paddingLeft: '20px 	!important',
				paddingRight: '20px !important',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '8px',
					justifyContent: 'flex-end',
					maxWidth: { xs: '335px', sm: '406px', md: 'initial' },
					m: { xs: '0 auto 25px auto', md: '0 0 25px 0' },
				}}>
				<Calendar
					options={years}
					value={year ? year : ALL_YEARS}
					handleChange={handleChangeYear}
				/>
				<Calendar
					options={Object.values(months)}
					value={month ? month : ALL_MONTHS}
					handleChange={handleChangemonth}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: { xs: 'center', md: 'space-between' },
					gap: '40px',
				}}>
				{filteredEvents.map((card, index) => (
					<MyCard card={card} key={index} />
				))}
			</Box>
		</Container>
	)
}
