import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { Box } from '@mui/material'

export default function EventsPage() {
	return (
		<Box
			sx={{
				position: 'relative',
				margin: 'auto 314px ',
			}}>
			<Calendar />
		</Box>
	)
}
