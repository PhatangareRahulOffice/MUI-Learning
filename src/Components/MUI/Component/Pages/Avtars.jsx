import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';

function Avtars() {
  return (
    <>
    <Stack spacing={4}>
        <Stack spacing={1} direction='row' >
            <Avatar  sx={{bgcolor:'primary.light'}} >Rp</Avatar>
            <Avatar  sx={{bgcolor:'success.light'}} >Ss</Avatar>
        </Stack> 

        <Stack spacing={1} direction='row' >
        <AvatarGroup max={2}>
            <Avatar  sx={{bgcolor:'primary.light'}} >Rp</Avatar>
            <Avatar  sx={{bgcolor:'success.light'}} >Ss</Avatar>
            <Avatar  src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Dog' />
            <Avatar  src='https://randomuser.me/api/portraits/men/79.jpg' alt='Jane Dog' />

        </AvatarGroup>  
        </Stack> 
        <Stack spacing={1} direction='row' >
            <Avatar variant='square'  sx={{bgcolor:'primary.light', width:48, height:48}} >Rp</Avatar>
            <Avatar  variant='rounded' sx={{bgcolor:'success.light',  width:48, height:48}} >Ss</Avatar>
        </Stack> 
     </Stack>
    </>
  )
}

export default Avtars