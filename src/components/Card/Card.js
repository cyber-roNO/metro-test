import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import moment from 'moment'

export default function MyCard(props) {
	return (
		<Card
			sx={{
				maxWidth: { xs: 335, sm: 406 },
				flexBasis: { xs: '100%', md: '50%' },
				border: '1px solid #E7E7E7',
				borderRadius: '2px',
				boxShadow: 'none',
			}}>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '16px 24px',
				}}>
				<Typography variant="h3" fontSize={16}>
					{props.card.title}
				</Typography>
				<CardActions sx={{ padding: 0 }}>
					<Link
						underline="none"
						component={RouterLink}
						to={'/' + props.card.id}
						fontSize={14}
						variant="h6"
						sx={{ color: '#1890FF' }}>
						Больше
					</Link>
				</CardActions>
			</CardContent>

			<CardMedia
				component="img"
				height="255"
				image={props.card.image}
				alt="cover"
			/>
			<CardContent
				sx={{
					padding: '24px',
				}}>
				<Typography variant="h3" fontSize={16}>
					{moment(props.card.date).format('DD.MM.YYYY')}
				</Typography>
			</CardContent>
		</Card>
	)
}
