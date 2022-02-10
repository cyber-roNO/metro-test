import { useState, useEffect } from 'react'
import { Box, Container, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import moment from 'moment'
import { Button } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import ModalSubmit from '../Modals/ModalSubmit'
import ModalRemove from '../Modals/ModalRemove'
import '../../loader/loader.css'

import { useDispatch, useSelector } from 'react-redux'
import {
	addEvent,
	removeEvent,
	setFirstName,
	setSecondName,
} from '../../redux/actions/userActions'
import { ButtonStyle } from '../Modals/ModalSubmit'

export default function CardDetail() {
	const { firstName, secondName } = useSelector((state) => state.user)

	const [name, setName] = useState(() => firstName || '')
	const [surname, setSurname] = useState(() => secondName || '')

	const handleChangeName = (event) => {
		setName(event.target.value)
	}
	const handleChangeSurname = (event) => {
		setSurname(event.target.value)
	}

	const dispatch = useDispatch()

	const handleSubmitForm = () => {
		dispatch(setFirstName(name))
		dispatch(setSecondName(surname))
		dispatch(addEvent(itemId[0]))
		handleClose()
	}

	const handleRemoveEvent = () => {
		dispatch(removeEvent(itemId[0]))
		handleClose()
	}

	useEffect(() => {
		localStorage.setItem('name', name)
		localStorage.setItem('surname', surname)
	}, [name, surname])

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const { events, eventsFetching, error } = useSelector((state) => state.events)

	const id = +window.location.pathname.replace('/events/', '')
	console.log(id)
	const itemId = events.filter((item) => item.id === id)

	const { userEvents } = useSelector((state) => state.user)
	const usersCount = userEvents.filter((item) => item.id === id)

	if (error) {
		return <div>Ошибка: {error.message}</div>
	}
	if (!!eventsFetching) {
		return (
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
	return (
		<>
			{itemId.length === 0 ? null : (
				<Container
					maxWidth="lg"
					sx={{
						display: 'flex',
						flexDirection: 'column',

						maxWidth: { xs: '335px', md: '900px', lg: '1200px' },
						p: {
							xs: '0 20px !important',
							md: '0 20px !important',
							lg: '0 !important',
						},
					}}>
					<Container
						maxWidth="lg"
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', md: 'row' },
							justifyContent: 'space-between',
							gap: { xs: '20px', md: '73px' },
							maxWidth: { xs: '335px', md: '900px', lg: '1200px' },
							p: '0 !important',
							mb: { xs: '30px', md: '70px' },
						}}>
						<Box>
							<CardMedia
								component="img"
								image={itemId[0].image}
								alt="cover"
								sx={{
									minWidth: { xs: 'inherit', md: '410px', lg: '527px' },
									maxHeight: { xs: '209px', md: '250px', lg: '329px' },
								}}
							/>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}>
							<Box>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-start',
										gap: '10px',
										width: '100%',
										mb: { xs: '20px', md: '32px' },
									}}>
									<Typography variant="h4" fontSize={24}>
										{itemId[0].title}
									</Typography>
									<Box
										sx={{
											color: '#722ED1',
											padding: '1px 8px',
											border: '1px solid #D3ADF7',
											borderRadius: '2px',
											background: '#F9F0FF',
											lineHeight: '20px',

											display: 'flex',
											alignItems: 'center',
										}}
										fontSize={12}>
										{moment(itemId[0].date).format('DD.MM.YYYY')}
									</Box>
								</Box>
								<Typography
									fontSize={14}
									sx={{ mb: { xs: '20px', md: '32px' } }}>
									{itemId[0].description}
								</Typography>
							</Box>
							{+usersCount.length !== 0 ? (
								<Button
									onClick={handleOpen}
									variant="contained"
									color="error"
									sx={{
										...ButtonStyle,
										alignSelf: 'flex-end',
										background: '#FF4D4F',
									}}>
									Отписаться
								</Button>
							) : (
								<Button
									onClick={handleOpen}
									variant="contained"
									sx={{
										...ButtonStyle,
										alignSelf: 'flex-end',
										background: '#1890FF',
										gap: '10px',
									}}>
									<ArrowForwardIosOutlinedIcon sx={{ width: '14px' }} />
									Записаться
								</Button>
							)}
						</Box>
						{+usersCount.length !== 0 ? (
							<ModalRemove
								open={open}
								handleClose={handleClose}
								handleRemoveEvent={handleRemoveEvent}
								title={'Вы уверены, что хотите отписаться?'}
							/>
						) : (
							<ModalSubmit
								open={open}
								handleClose={handleClose}
								handleSubmitForm={handleSubmitForm}
								handleChangeName={handleChangeName}
								handleChangeSurname={handleChangeSurname}
								name={name}
								surname={surname}
								itemId={itemId}
							/>
						)}
					</Container>
					<Box>
						<Typography variant="h4" fontSize={20} sx={{ mb: '15px' }}>
							Посетители{' '}
							<Typography
								variant="span"
								sx={{ color: 'rgba(66, 66, 66, 0.45)' }}>
								{usersCount.length}
							</Typography>
						</Typography>
						<Typography variant="h4" fontSize={14}>
							{usersCount.length === 0
								? 'пока никто не записан'
								: firstName + ' ' + secondName}
						</Typography>
					</Box>
				</Container>
			)}
		</>
	)
}
