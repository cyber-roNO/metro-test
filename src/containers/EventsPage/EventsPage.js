import React, { useState, useEffect } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box, Container } from '@mui/material'
import moment from 'moment'
import 'moment/locale/ru'
import MyCard from '../../components/Card/Card'
import '../../loader/loader.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../../redux/actions/eventsActions'

export const years = ['2020', '2021', '2022', 'все года']
export const mounths = {
	1: 'январь',
	2: 'февраль',
	3: 'март',
	4: 'апрель',
	5: 'май',
	6: 'июнь',
	7: 'июль',
	8: 'август',
	9: 'сентябрь',
	10: 'октябрь',
	11: 'ноябрь',
	12: 'декабрь',
	13: 'все месяцы',
}

export default function EventsPage() {
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

	useEffect(() => {
		localStorage.setItem('year', year)
		localStorage.setItem('mounth', mounth)
	}, [year, mounth])

	const dispatch = useDispatch()
	const { events, eventsFetching, error } = useSelector((state) => state.events)

	useEffect(() => {
		dispatch(fetchEvents())
	}, [])

	if (error) {
		return <div>Ошибка: {error.message}</div>
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
					flexWrap: 'wrap',
					justifyContent: { xs: 'center', md: 'space-between' },
					gap: '40px',
				}}>
				{year !== 'все года' && mounth !== 'все месяцы'
					? events
							.filter((item) => moment(item.date).format('YYYY') === year)
							.filter((item) => moment(item.date).format('MMMM') === mounth)
							.map((card, index) => <MyCard card={card} key={index} />)
					: year === 'все года' && mounth !== 'все месяцы'
					? events
							.filter((item) => moment(item.date).format('MMMM') === mounth)
							.map((card, index) => <MyCard card={card} key={index} />)
					: year !== 'все года' && mounth === 'все месяцы'
					? events
							.filter((item) => moment(item.date).format('YYYY') === year)
							.map((card, index) => <MyCard card={card} key={index} />)
					: events.map((card, index) => <MyCard card={card} key={index} />)}
			</Box>
		</Container>
	)
}
