import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { NavLink as RouterLink } from 'react-router-dom'
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#242424',
		},
	},
})

const LinkGlobalStyles = (
	<GlobalStyles
		styles={{
			'*' :{
				margin: 0,
				padding: 0,
				boxSizing: 'border-box',
			},
			'body' : {
				maxWidth: '1440px',
				margin: '0 auto'
			},
			'html' : {
				overflowX: 'hidden',
				marginRight: 'calc(-1 * (100vw - 100%))',
			  },
			  'h3': {
				  color: '#242424',
				  fontWeight: '700 !important',
				 
			  },
			
			'.header__link': {
				position: 'relative',
				display: 'flex',
				gap: '10px',
				fontSize: 14,
				fontWeight: 500,
				lineHeight: '22px',
				padding: '8px 0px',
				alignItems: 'center',
				justifyContent: 'center',
				transition: 'all .3s ease',
				'&:hover': {
					color: '#1890FF',
				},
				'&:after': {
					content: '""',
					position: 'absolute',
					bottom: '0',
					display: 'block',
					width: '0',
					height: '2px',
					marginTop: '-2px',
					background: '#1890FF',
					transition: 'width .3s ease',
				},
				'&:hover::after': {
					width: '100%',
				},

			},
			".active": {
				color: '#1890FF !important',
				'&:after': {
					content: '""',
					position: 'absolute',
					bottom: '0',
					display: 'block',
					width: '100%',
					height: '2px',
					marginTop: '-2px',
					background: '#1890FF',
					transition: 'width .3s ease',
				},
			  }
			  
		}}
	/>
)

export default function Header() {
	return (
		<ThemeProvider theme={theme}>
			<AppBar
				position='static'
				sx={{
					backgroundColor: '#fff',
					
					pt: '53px',	
					mb: '115px',
					boxShadow: 'none',
				
				}}>
				<Toolbar
					sx={{
						backgroundColor: '#fff',
						justifyContent: 'flex-end',
						padding: '0 !important',
						gap: '45px',
						mr: '120px',
					}}>
					{LinkGlobalStyles}
					<Link component={RouterLink} to="/" underline="none" className='header__link' >
						<GridViewOutlinedIcon fontSize="small" />
						События
					</Link>
					<Link component={RouterLink} to="/calendar" underline="none"  className='header__link'>
					<EventNoteOutlinedIcon fontSize="small" />
						Календарь
					</Link>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}
