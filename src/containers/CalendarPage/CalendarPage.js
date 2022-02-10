import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container } from '@mui/material'
import Calendar from '../../components/Calendar/Calendar'

import CalendarCard from '../../components/CalendarCard/CalendarCard'

import ModalRemove from '../../components/Modals/ModalRemove'
import { removeEvent } from '../../redux/actions/userActions'

import { Button } from '@mui/material'
import { useFilteredEvents } from '../../hooks/useFilteredEvents'
import { years, months, ALL_YEARS, ALL_MONTHS } from '../../constants/constants'
import { ButtonStyle } from '../../components/Modals/ModalSubmit'

export default function CalendarPage() {
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

	const [open, setOpen] = useState(false)

	const [cardId, setCardId] = useState('')
	const handleOpen = (event) => {
		setCardId(event.target.id)
		setOpen(true)
	}

	const handleClose = () => setOpen(false)

	const dispatch = useDispatch()
	const handleRemoveEvent = () => {
		dispatch(removeEvent(itemId[0]))
		handleClose()
	}

	useEffect(() => {
		localStorage.setItem('year', year)
		localStorage.setItem('month', month)
	}, [year, month])

	const { userEvents } = useSelector((state) => state.user)

	const itemId = userEvents.filter((item) => item.id === +cardId)

	console.log(itemId)
	const [pageSize, setPageSize] = useState(3)
	const [filteredEvents] = useFilteredEvents(userEvents, year, month)
	const [paginatedEvents, setPaginatedEvents] = useState(filteredEvents)

	useEffect(() => {
		setPaginatedEvents(filteredEvents.slice(0, pageSize))
	}, [pageSize, filteredEvents])
	const handlePageSize = () => {
		setPageSize((prev) => prev + 3)
	}

	return (
		<Container
			maxWidth="md"
			sx={{
				paddingLeft: '20px 	!important',
				paddingRight: '20px !important',
				display: 'flex',
				flexDirection: 'column',
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
					flexDirection: 'column',
					mb: '65px',
				}}>
				{paginatedEvents.map((card, index) => (
					<CalendarCard card={card} key={index} handleOpen={handleOpen} />
				))}
			</Box>
			<Button
				onClick={handlePageSize}
				variant="contained"
				sx={{ ...ButtonStyle, background: '#1890FF', alignSelf: 'center' }}>
				Загрузить больше
			</Button>
			<ModalRemove
				open={open}
				handleClose={handleClose}
				handleRemoveEvent={handleRemoveEvent}
				title={'Вы уверены, что хотите отказаться?'}
			/>
		</Container>
	)
}
