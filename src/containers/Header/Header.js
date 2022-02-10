import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Link } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { NavLink as RouterLink } from 'react-router-dom'
import { ReactComponent as EventIcon } from '../../img/events.svg'
import { ReactComponent as CalendarIcon } from '../../img/calendar.svg'

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
			'*': {
				margin: 0,
				padding: 0,
				boxSizing: 'border-box',
			},
			body: {
				maxWidth: '1440px',
				margin: '0 auto',
			},
			html: {
				overflowX: 'hidden',
				marginRight: 'calc(-1 * (100vw - 100%))',
			},
			h3: {
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
				'svg path': {
					transition: 'stroke .3s ease',
				},
				'&:hover svg path': {
					stroke: '#1890FF',
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
			'.active': {
				color: '#1890FF !important',
				'svg path': {
					stroke: '#1890FF',
				},
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
			},
			'.modal-input label': {
				fontSize: 14,
				color: ' rgba(66, 66, 66, 0.45)',
				lineHeight: 'inherit',
			},
			'.modal-input input': {
				fontSize: 14,
				color: '#242424',
				padding: '6px 12px',
			},
			'.modal-input fieldset': {
				borderColor: 'color: rgba(66, 66, 66, 0.45)',
			},
		}}
	/>
)

export default function Header() {
	return (
		<ThemeProvider theme={theme}>
			<AppBar
				position="static"
				sx={{
					backgroundColor: '#fff',
					pt: { xs: '27px', md: '53px' },
					mb: { xs: '50px', md: '155px' },
					m: {
						xs: '0 auto 50px auto',
						md: '0 auto 150px auto',
						lg: '0 0 150px 0',
					},
					maxWidth: { xs: 'inherit', md: '900px', lg: 'inherit' },

					boxShadow: 'none',
				}}>
				<Toolbar
					sx={{
						backgroundColor: '#fff',
						justifyContent: { xs: 'center', md: 'flex-end' },
						padding: {
							xs: '0 !important',
							md: '0 20px !important',
							lg: '0 !important',
						},
						gap: '45px',
						mr: { xs: '0', lg: '120px' },
					}}>
					{LinkGlobalStyles}
					<Link
						component={RouterLink}
						to="/"
						underline="none"
						className="header__link">
						<EventIcon />
						События
					</Link>
					<Link
						component={RouterLink}
						to="/calendar"
						underline="none"
						className="header__link">
						<CalendarIcon />
						Календарь
					</Link>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	)
}
