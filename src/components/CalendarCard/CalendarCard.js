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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

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
				'&.MuiCard-root:first-of-type': {
					borderTop: 'none',
				},
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
			<CardActions sx={{ padding: 0, gap: '8px' }}>
				<Button
					onClick={props.handleOpen}
					fontSize={14}
					variant="h6"
					id={props.card.id}
					sx={{
						padding: '0 !important',
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
				<DeleteOutlinedIcon
					onClick={props.handleOpen}
					id={props.card.id}
					sx={{
						padding: '4px',
						border: ' 1px solid #E7E7E7',
						minWidth: 'inherit',
						fontSize: '26px',
						display: {
							xs: 'block',
							md: 'none',
						},
						textTransform: 'none',
					}}
				/>

				<Box
					variant="span"
					sx={{
						padding: '0 !important',
						background: '#E7E7E7',
						width: '1px',
						height: '14px',
						display: {
							xs: 'none',
							md: 'block',
						},
					}}
				/>

				<Link
					underline="none"
					component={RouterLink}
					to={'/events/' + props.card.id}
					fontSize={14}
					variant="h6"
					sx={{ color: '#1890FF', display: { xs: 'none', md: 'block' } }}>
					перейти на страницу
				</Link>
			</CardActions>
		</Card>
	)
}
