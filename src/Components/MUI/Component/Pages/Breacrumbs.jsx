import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
function Breacrumbs() {
  return (
    <>
    <Box m={2} >
        <Breadcrumbs area-aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small' />} >
        <Link underline='hover' href='#'> Home</Link>
        <Link underline='hover' href='#'> Catloges </Link>
        <Link underline='hover' href='#'>Access</Link>
        <Typography color='Text.primary'> Shoes</Typography>
        </Breadcrumbs>


    </Box>
    </>
  )
}

export default Breacrumbs