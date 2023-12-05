import React from 'react'
import Box from '@mui/material/Box';
function BoxLayout() {
  return (
    <>
    <Box sx={{
        backgroundColor:'primary.main',
        color:'white',
        height:'100px',
        width:'100px',
        padding:'16px',
        '&:hover':{
            backgroundColor:'primary.light'
        }
    }} >
     Material UI
    </Box>   
    </>
  )
}

export default BoxLayout