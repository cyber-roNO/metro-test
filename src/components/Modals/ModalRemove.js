import { Modal, Typography, Box, Button, Backdrop, Fade } from '@mui/material'
import { ReactComponent as WarningIcon } from '../../img/icon-warning.svg'
import { ButtonStyle } from './ModalSubmit'

export default function ModalRemove(props) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: { xs: 300, sm: 442 },
		width: '100%',
		p: '25px',
		bgcolor: '#fff',
		boxShadow:
			'0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
		borderRadius: '2px',
		'&:focus': {
			outline: 'none',
		},
	}
	return (
		<Modal
			open={props.open}
			onClose={props.handleClose}
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}>
			<Fade in={props.open}>
				<Box sx={style}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							gap: '16px',
							mb: '30px',
						}}>
						<WarningIcon sx={{ cursor: 'pointer' }} />

						<Typography variant="h3" fontSize={16}>
							{props.title}
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							gap: '10px',
							justifyContent: 'flex-end',
						}}>
						<Button
							variant="outlined"
							onClick={props.handleClose}
							sx={{
								...ButtonStyle,
								color: 'rgba(66, 66, 66, 0.45)',
								border: '1px solid rgba(66, 66, 66, 0.45) !important',
							}}>
							Отмена
						</Button>
						<Button
							onClick={props.handleRemoveEvent}
							variant="contained"
							sx={{ ...ButtonStyle, background: '#1890FF' }}>
							ОК
						</Button>
					</Box>
				</Box>
			</Fade>
		</Modal>
	)
}
