import React, { useState, useEffect } from 'react'
import { Box, Container, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../../containers/EventsPage/loader.css'

import Cover from '../../img/cover.png'

export default function CardDetail() {
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
	console.log(window.location.pathname)
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
			<Container
				maxWidth="lg"
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					gap: '80px',
				}}>
				<Box sx={{ flexBasis: '50%' }}>
					<CardMedia component="img" height="341" image={Cover} alt="cover" />
				</Box>
				<Box sx={{ flexBasis: '50%' }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
						}}
						mb={'34px'}>
						<Typography variant="h4" fontSize={24}>
							Событие 1
						</Typography>
						<Box
							sx={{
								color: '#722ED1',
								padding: '1px 8px',
								border: '1px solid #D3ADF7',
								borderRadius: '2px',
								background: '#F9F0FF',
								lineHeight: '20px',
								display: 'flex',
								alignItems: 'center',
							}}
							fontSize={12}>
							08.10.2021
						</Box>
					</Box>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Typography>
				</Box>
			</Container>
		)
	}
}
