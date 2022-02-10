import * as React from 'react'

import {
	Link,
	Button,
	Box,
	CardActions,
	Typography,
	CardMedia,
	CardContent,
	Card,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function CalendarCard(props) {
	return (
		<Card
			sx={{
				borderTop: '1px solid #E7E7E7',
				borderRadius: '2px',
				boxShadow: 'none',
				display: 'flex',
				padding: '13px 0',
				justifyContent: 'space-between',
				maxWidth: { xs: '335px', sm: '406px', md: 'initial' },
				m: { xs: '0 auto 0px auto', md: '0' },
				width: '100%',
			}}>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0',
					paddingBottom: '0 !important',
					gap: '17px',
				}}>
				<CardMedia
					component="img"
					height="38"
					image={props.card.image}
					alt="cover"
					sx={{ maxWidth: '38px' }}
				/>
				<Box>
					<Typography variant="h3" fontSize={16} sx={{ lineHeight: '22px' }}>
						{props.card.title}
					</Typography>
					<Typography
						fontSize={14}
						sx={{ color: 'rgba(66, 66, 66, 0.45)', lineHeight: '22px' }}>
						{props.card.description.slice(0, 27) + '...'}
					</Typography>
				</Box>
			</CardContent>
			<CardActions sx={{ padding: 0 }}>
				<Button
					onClick={props.handleOpen}
					fontSize={14}
					variant="h6"
					value={props.card.id}
					sx={{
						color: '#1890FF',
						display: {
							xs: 'none',
							md: 'block',
						},
						textTransform: 'none',
						'&.MuiButtonBase-root:hover': {
							bgcolor: 'transparent',
						},
					}}>
					удалить
				</Button>
				<Link
					underline="none"
					component={RouterLink}
					to={'/' + props.card.id}
					fontSize={14}
					variant="h6"
					sx={{ color: '#1890FF', display: { xs: 'none', md: 'block' } }}>
					перейти на страницу
				</Link>
			</CardActions>
		</Card>
	)
}
