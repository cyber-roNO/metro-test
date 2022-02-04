import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Calendar() {
	const [year, setYear] = React.useState('')

	const handleChange = (event) => {
		setYear(event.target.value)
	}
	return (
		<Box sx={{ maxWidth: 74 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>
					Год
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={year}
					label="Год"
					onChange={handleChange}
					sx={{ fontSize: 14, padding: 0 }}>
					<MenuItem value={2020}>2020</MenuItem>
					<MenuItem value={2021}>2021</MenuItem>
					<MenuItem value={2022}>2022</MenuItem>
				</Select>
			</FormControl>
		</Box>
	)
}
