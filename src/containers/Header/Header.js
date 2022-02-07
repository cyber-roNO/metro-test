import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { NavLink as RouterLink } from 'react-router-dom'

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgba(0, 0, 0, 0.85)',
		},
	},
})

const LinkGlobalStyles = (
	<GlobalStyles
		styles={{
			'.header__link': {
				position: 'relative',
				display: 'flex',
				gap: '10px',
				fontSize: 14,
				lineHeight: '22px',
				padding: '13px 20px',
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
					width: 121,
				},

			},
			".active": {
				color: '#1890FF !important',
				'&:after': {
					content: '""',
					position: 'absolute',
					bottom: '0',
					display: 'block',
					width: 121,
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

				sx={{
					backgroundColor: '#fff',
					maxWidth: 1200,
					margin: '36px auto',	
					mb: '74px',
					boxShadow: 'none',
					position: 'relative',
					padding: '0 16px'
				}}>
				<Toolbar
					sx={{
						backgroundColor: '#fff',
						justifyContent: 'flex-end',
						padding: '0 !important',
						gap: '20px',
					}}>
					{LinkGlobalStyles}
					<Link component={RouterLink} to="/" underline="none" className='header__link' >
						<MailOutlineIcon fontSize="small" />
						События
					</Link>
					<Link component={RouterLink} to="/calendar" underline="none"  className='header__link'>
					<MailOutlineIcon fontSize="small" />
						Календарь
					</Link>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}
