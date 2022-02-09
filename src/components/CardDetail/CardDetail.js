import React, { useState, useEffect } from 'react'
import { Box, Container, CardMedia } from '@mui/material'
import Typography from '@mui/material/Typography'
import '../../containers/EventsPage/loader.css'
import moment from 'moment'	
import { Button } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Modal } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import { TextField  } from '@mui/material'

export default function CardDetail() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 572,
		bgcolor: "#fff",
		boxShadow: '0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
		borderRadius: '2px'
		
	  };
	  

	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true)	
					setItems(result)
				},

				(error) => {
					setIsLoaded(true)
					setError(error)
				}
			)
	}, [])
	
	const id = +window.location.pathname.replace('/', '');
	const itemId = items.filter((item) => (item.id===id))

	if (error) {
		return <div>Ошибка: {error.message}</div>
	} else if (!isLoaded ) {
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
	} else  {
		return (
			<>
				{itemId.length===0 ? null : <Container
					maxWidth="lg"
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '73px',
						paddingLeft: '0 !important',
						paddingRight: '0 !important',
					}}>
					<Box>
						<CardMedia component="img" height="329" image={itemId[0].image} alt="cover"  sx={{ minWidth: '527px'}}/>
					</Box>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}>
						<Box>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									width: '100%',
								}}
								mb={'32px'}>
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
							<Typography>
								{itemId[0].description}
							</Typography>
						</Box>

						<Button onClick={handleOpen} variant="contained" sx={{alignSelf:'flex-end',background: '#1890FF', borderRadius: '50px',textTransform: 'none',fontSize: '14px', lineHeight: '22px', padding:'7px 20px', gap: '8px'}}>
							<ArrowForwardIosOutlinedIcon sx={{width: '14px'}}/>
							Записаться
						</Button>
					</Box>

					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
						timeout: 500,
						}}
					>
						<Fade in={open}>
							<Box sx={style} >
								<Box p={'16px 24px'} sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center', borderBottom: '1px solid #E7E7E7'}}>
									<Typography variant="h3" fontSize={16}>
										Записаться на событие
									</Typography>
									<CloseOutlinedIcon onClick={handleClose} sx={{cursor:'pointer'}}/>
								</Box>
								<Box  p={'20px 24px'}>
									<Box mb={'30px'} sx={{display: 'flex', alignItems: 'center', gap:'17px'}}>
										<Box>
											<CardMedia component="img" height="38" image={itemId[0].image} alt="cover" sx={{ maxWidth: '38px'}}/>
										</Box>
										<Box>	
											<Typography id="modal-modal-description" fontSize={14} sx={{lineHeight: '22px'}}>
												{itemId[0].title}
											</Typography>
											<Typography id="modal-modal-description" fontSize={14} sx={{lineHeight: '22px', color: 'rgba(66, 66, 66, 0.45)'}}>
												{itemId[0].description.slice(0,27) + '...'}
											</Typography>
										</Box>
										
									</Box>
									<Box sx={{display:'flex',flexDirection:'column', gap:'10px'}}>

										<TextField fullWidth id="filled-size-small" label="Имя" variant="outlined" size="small"/>
										<TextField fullWidth id="filled-size-small" label="Фамилия" variant="outlined" size="small"/>

									</Box>
									
								</Box>
						
							
							</Box>
						</Fade>
					</Modal>
				</Container>}
				
			</>
		)
	}

}
