import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box, Grid, Container} from '@mui/material'

import MyCard from '../../components/Card/Card'
import Cover from '../../img/cover.png'


export default function EventsPage() {
	const years = [2019,2020,2021,2022]	
	const mounths = ['Янв','Фев','Март', 'Апр','Май','Июнь', 'Июль', 'Авг', 'Сен', 'Окт','Дек']	
	

	const cards = [
		{
			name: 'Событие 1', date: '05.10.2021', img: {Cover}
		},
		{
			name: 'Событие 2', date: '08.10.2021', img: {Cover}
		},
		{
			name: 'Событие 3', date: '12.10.2021', img: {Cover}
		},
		{
			name: 'Событие 4', date: '14.10.2021', img: {Cover}
		},
		{
			name: 'Событие 5', date: '16.10.2021', img: {Cover}
		},
		{
			name: 'Событие 6', date: '18.10.2021', img	: {Cover}
		},
	]
	return (
		<Container
			maxWidth="md"
			
		>
			<Box sx={{display: 'flex',flexDirection: 'row',gap: '8px', justifyContent: 'flex-end',marginBottom:'28px'}}>
				<Calendar options={years}/>
				<Calendar options={mounths}/>
			</Box>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

				{cards.map((card,index)=>(
					<Grid item xs={2} sm={4} md={4} key={index}>
						<MyCard
							card={card}
						/>
					</Grid>
				))}

			</Grid>
		</Container>
	)
}
