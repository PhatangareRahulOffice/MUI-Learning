import React from 'react'
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';

function ImageLists() {
  return (
    <>
    <Stack spacing={4}>
        <ImageList  sx={{width:500, height:450}} 
        cols={3}
        rowHeight={164}>
            {
                itemData.map(item =>(<ImageListItem key={item.img}>
                    {/* <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'  /> */}
                    <img src={item.img} alt={item.title}  />
                </ImageListItem>))
            }
        </ImageList>

    </Stack>
    </>
  )
}

export default ImageLists


const itemData = [
    {
        img: 'https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg',
        title:'dish1'
    },
    {
        img:'../../../../Statics/Images/breakfast.jpg',
        title:'dish2'
    },
    {
        img:'../../../../Statics/Images/burgers.jpg',
        title:'dish3'
    },
    {
        img:'../../../../Statics/Images/camera.jpg',
        title:'dish4'
    },
    {
        img:'../../../../Statics/Images/hats.jpg',
        title:'dish5'
    },
    {
        img:'../../../../Statics/Images/honey.jpg',
        title:'dish6'
    },

    {
        img:'../../../../Statics/Images/morning.jpg',
        title:'dish7'
    },
    {
        img:'../../../../Statics/Images/mushroom.jpg',
        title:'dish8'
    },
    {
        img:'../../../../Statics/Images/olive.jpg',
        title:'dish9'
    },
    {
        img:'../../../../Statics/Images/plant.jpg',
        title:'dish10'
    },
    {
        img:'../../../../Statics/Images/star.jpg',
        title:'dish11'
    },
    {
        img:'../../../../Statics/Images/vegetables.jpg',
        title:'dish12'
    },

]