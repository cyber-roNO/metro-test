import React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import { NativeSelect } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const MyInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
	  marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
	  position: 'relative',
	  backgroundColor: theme.palette.background.paper,
	  fontSize: 14,
	  padding: '5px 12px',
	   color: '#242424',
	  borderRadius: 2, 
	  boxShadow:'0px 2px 0px rgba(0, 0, 0, 0.016)',
	  border:'1px solid #E7E7E7',
	  transition: theme.transitions.create(['border-color']),
	  '&:focus': {
		borderColor: '#1890FF',
	  },
	  'icon': {
		  
	  }
	},
  }));
  

export default function Calendar(props) {

		
	return (
		<Box>
			<FormControl sx={{ minWidth: 72, maxHeight: 32 }} size="small" variant="standard">
			
				<NativeSelect
					value={props.value}
					input={<MyInput />}
					onChange={props.handleChange}
					id="demo-customized-select-native"
					IconComponent={KeyboardArrowDownOutlinedIcon}

					sx={{ fontSize: 14, padding: 0, height: '100%',}}
				>
					{props.options.map((value, index) => (
						<option  key={index}  value={value}>{value}</option>
					))}	
				
					
				</NativeSelect>
			</FormControl>
		</Box>
	)
}
