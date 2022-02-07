import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from '@mui/material';
import Cover from '../../img/cover.png'
import { Link as RouterLink } from 'react-router-dom'

export default function MyCard(props) {
   
    return (
        <Card sx={{ maxWidth: 355 }}>
          <CardActionArea>
            <CardContent 
                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
            >
                <Typography  variant="h6" component="div">
                    {props.card.name}
                </Typography>
                <Link underline='none'  component={RouterLink} to="/calendar">
                    Больше
                </Link >
            </CardContent>

            <CardMedia
              component="img"
              height="140"
              image={Cover}
              alt="cover"
            />
            <CardContent>
              <Typography  variant="h6" component="div">
                {props.card.date}
              </Typography>
         
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
