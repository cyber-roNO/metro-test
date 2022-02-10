import {
	Modal,
	Typography,
	Box,
	Button,
	TextField,
	Backdrop,
	Fade,
	CardMedia,
} from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
export const ButtonStyle = {
	borderRadius: '50px',
	textTransform: 'none',
	fontSize: '14px',
	lineHeight: '22px',
	padding: '7px 20px',
	minWidth: '59px',
	fontWeight: 'bold',
	boxShadow: 'none',
	letterSpacing: 0,
}

export default function ModalSubmit(props) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		maxWidth: { xs: 300, sm: 572 },
		width: '100%',

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
						p={'16px 24px'}
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							borderBottom: '1px solid #E7E7E7',
						}}>
						<Typography variant="h3" fontSize={16}>
							Записаться на событие
						</Typography>
						<CloseOutlinedIcon
							onClick={props.handleClose}
							sx={{ cursor: 'pointer' }}
						/>
					</Box>
					<Box p={'20px 24px'} sx={{ borderBottom: '1px solid #E7E7E7' }}>
						<Box
							mb={'30px'}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: '17px',
							}}>
							<Box>
								<CardMedia
									component="img"
									height="38"
									image={props.itemId[0].image}
									alt="cover"
									sx={{ maxWidth: '38px' }}
								/>
							</Box>
							<Box>
								<Typography
									id="modal-modal-description"
									fontSize={14}
									sx={{ lineHeight: '22px' }}>
									{props.itemId[0].title}
								</Typography>
								<Typography
									id="modal-modal-description"
									fontSize={14}
									sx={{
										lineHeight: '22px',
										color: 'rgba(66, 66, 66, 0.45)',
									}}>
									{props.itemId[0].description.slice(0, 27) + '...'}
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '10px',
							}}>
							<TextField
								onChange={props.handleChangeName}
								fullWidth
								id="filled-size-small"
								label="Имя"
								variant="outlined"
								size="small"
								className="modal-input"
								value={props.name ? props.name : ''}
							/>
							<TextField
								onChange={props.handleChangeSurname}
								fullWidth
								id="filled-size-small"
								label="Фамилия"
								variant="outlined"
								size="small"
								className="modal-input"
								value={props.surname ? props.surname : ''}
							/>
						</Box>
					</Box>
					<Box
						p={'15px 16px'}
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
							onClick={props.handleSubmitForm}
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
