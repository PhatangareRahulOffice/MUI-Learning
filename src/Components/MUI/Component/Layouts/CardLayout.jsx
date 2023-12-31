import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardLayout() {
  return (
    <>
    <Box width='300px'>
        <Card>
            <CardMedia 
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
            alt=' Unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div' > React</Typography>
                <Typography variant='body2' color='text.secondary'>
                    React Js is a JavaScript library for building user interface.React can be used as a base development of single-page or mobile application
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'> Share</Button>
                <Button size='small'> Learn More</Button>

            </CardActions>
        </Card>

    </Box>
    </>
  )
}

export default CardLayout