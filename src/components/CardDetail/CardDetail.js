import React, { useState, useEffect } from 'react'
import { Box, Container, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../../containers/EventsPage/loader.css'
import moment from 'moment'

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
	
	const id = +window.location.pathname.replace('/', '');
	const itemId = items.filter((item) => (item.id===id))

	if (error) {
		return <div>Ошибка: {error.message}</div>
	} else if (!isLoaded ) {
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
	} else  {
		return (
			<>
				{itemId.length===0 ? null : <Container
					maxWidth="lg"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '80px',
					}}>
					<Box sx={{ flexBasis: '50%' }}>
						<CardMedia component="img" height="341" image={itemId[0].image} alt="cover" />
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
								{itemId[0].title}
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
								 {moment(itemId[0].date).format('DD.MM.YYYY')}
							</Box>
						</Box>
						<Typography>
							{itemId[0].description}
						</Typography>
					</Box>
				</Container>}
				
			</>
		)
	}

}
