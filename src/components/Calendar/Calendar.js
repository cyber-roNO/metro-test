import React, { useState } from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function Calendar(props) {
	return (
		<Box>
			<FormControl sx={{ minWidth: 72, maxHeight: 32 }} size="small">
				<Select
					value={props.value}
					autoWidth
					onChange={props.handleChange}
					sx={{ fontSize: 14, padding: 0, height: '100%' }}>
					{props.options.map((value, index) => (
						<MenuItem key={index} value={value}>
							{value}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	)
}
