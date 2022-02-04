import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'

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
			a: {
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
		}}
	/>
)

export default function Header() {
	return (
		<ThemeProvider theme={theme}>
			<AppBar
				sx={{
					backgroundColor: '#fff',
					padding: '36px 130px',
					boxShadow: 'none',
					position: 'relative',
				}}>
				<Toolbar
					sx={{
						backgroundColor: '#fff',
						justifyContent: 'flex-end',
						padding: '0 !important',
						gap: '20px',
					}}>
					{LinkGlobalStyles}
					<Link component={RouterLink} to="/" underline="none">
						<MailOutlineIcon fontSize="small" />
						События
					</Link>
					<Link component={RouterLink} to="/calendar" underline="none">
						<MailOutlineIcon fontSize="small" />
						Календарь
					</Link>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}
