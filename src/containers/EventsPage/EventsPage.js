import React, { useState, useEffect } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box, Container } from '@mui/material'
import moment from 'moment'
import 'moment/locale/ru'

import MyCard from '../../components/Card/Card'
import './loader.css'
export default function EventsPage() {
	let [year, setYear] = useState(() => {
		const saved = localStorage.getItem('year')
		return saved || ''
	})
	let [mounth, setMounth] = useState(() => {
		const saved = localStorage.getItem('mounth')
		return saved || ''
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

	const years = ['2020', '2021', '2022', 'все года']
	const mounths = {
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

	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true)
					setItems(result)
				},

				(error) => {
					setIsLoaded(true)
					setError(error)
				}
			)
	}, [])
	if (!year) {
		year = 'все года'
	}
	if (!mounth) {
		mounth = 'все месяцы'
	}
	if (error) {
		return <div>Ошибка: {error.message}</div>
	} else if (!isLoaded) {
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
	} else {
		return (
			
			<Container maxWidth="md">
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: '8px',
						justifyContent: 'flex-end',
						marginBottom: '25px',
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
						justifyContent: 'space-between',
						gap: '40px',
					}}>
					{year !== 'все года' && mounth !== 'все месяцы'
						? items
								.filter((item) => moment(item.date).format('YYYY') === year)
								.filter((item) => moment(item.date).format('MMMM') === mounth)
								.map((card, index) => <MyCard card={card} key={index} />)
						: year === 'все года' && mounth !== 'все месяцы'
						? items
								.filter((item) => moment(item.date).format('MMMM') === mounth)
								.map((card, index) => <MyCard card={card} key={index} />)
						: year !== 'все года' && mounth === 'все месяцы'
						? items
								.filter((item) => moment(item.date).format('YYYY') === year)
								.map((card, index) => <MyCard card={card} key={index} />)
						: items.map((card, index) => <MyCard card={card} key={index} />)}
				</Box>
			</Container>
		)
	}
}
