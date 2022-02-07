import React, { useState, useEffect } from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box, Container } from '@mui/material'

import MyCard from '../../components/Card/Card'
import './loader.css'
export default function EventsPage() {
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

	const years = [2019, 2020, 2021, 2022]
	const mounths = [
		'Янв',
		'Фев',
		'Март',
		'Апр',
		'Май',
		'Июнь',
		'Июль',
		'Авг',
		'Сен',
		'Окт',
		'Дек',
	]
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
						marginBottom: '28px',
					}}>
					<Calendar options={years} />
					<Calendar options={mounths} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						gap: '105px',
					}}>
					{items.map((card, index) => (
						<MyCard card={card} key={index} />
					))}
				</Box>
			</Container>
		)
	}
}
