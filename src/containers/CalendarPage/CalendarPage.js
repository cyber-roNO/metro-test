import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Container } from '@mui/material'
import Calendar from '../../components/Calendar/Calendar'

import CalendarCard from '../../components/CalendarCard/CalendarCard'
import { years } from '../EventsPage/EventsPage'
import { mounths } from '../EventsPage/EventsPage'
import ModalRemove from '../../components/Modals/ModalRemove'
import moment from 'moment'
import { removeEvent } from '../../redux/actions/userActions'

import { Button } from '@mui/material'

export default function CalendarPage() {
	const [year, setYear] = useState(() => {
		const saved = localStorage.getItem('year')
		return saved || 'все года'
	})
	const [mounth, setMounth] = useState(() => {
		const saved = localStorage.getItem('mounth')
		return saved || 'все месяцы'
	})

	const handleChangeYear = (event) => {
		setYear(event.target.value)
	}
	const handleChangeMounth = (event) => {
		setMounth(event.target.value)
	}

	const [open, setOpen] = useState(false)

	const [cardId, setCardId] = useState('')
	const handleOpen = (event) => {
		setCardId(event.target.value)
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
		localStorage.setItem('mounth', mounth)
	}, [year, mounth])
	const { userEvents } = useSelector((state) => state.user)
	const itemId = userEvents.filter((item) => item.id === +cardId)

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
					value={year ? year : 'все года'}
					handleChange={handleChangeYear}
				/>
				<Calendar
					options={Object.values(mounths)}
					value={mounth ? mounth : 'все месяцы'}
					handleChange={handleChangeMounth}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}>
				{year !== 'все года' && mounth !== 'все месяцы'
					? userEvents
							.filter((item) => moment(item.date).format('YYYY') === year)
							.filter((item) => moment(item.date).format('MMMM') === mounth)
							.map((card, index) => (
								<CalendarCard card={card} key={index} handleOpen={handleOpen} />
							))
					: year === 'все года' && mounth !== 'все месяцы'
					? userEvents
							.filter((item) => moment(item.date).format('MMMM') === mounth)
							.map((card, index) => (
								<CalendarCard card={card} key={index} handleOpen={handleOpen} />
							))
					: year !== 'все года' && mounth === 'все месяцы'
					? userEvents
							.filter((item) => moment(item.date).format('YYYY') === year)
							.map((card, index) => (
								<CalendarCard card={card} key={index} handleOpen={handleOpen} />
							))
					: userEvents.map((card, index) => (
							<CalendarCard card={card} key={index} handleOpen={handleOpen} />
					  ))}
			</Box>
			{/* <Button variant="contained">Загрузить больше</Button> */}
			<ModalRemove
				open={open}
				handleClose={handleClose}
				handleRemoveEvent={handleRemoveEvent}
				title={'Вы уверены, что хотите отказаться?'}
			/>
		</Container>
	)
}
