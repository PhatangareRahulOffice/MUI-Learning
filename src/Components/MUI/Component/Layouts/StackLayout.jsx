import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
function StackLayout() {
  return (
    <>
    <Stack sx={{ border:'1px solid'}} direction='row' spacing={2}  divider={<Divider orientation='vertical' flexItem />}  >
        <Box  display='flex' height='100px' width='100px' bgcolor='success.light'  p={2} ></Box>
        <Box  display='flex' height='100px' width='100px' bgcolor='success.dark'  p={2} ></Box>

    </Stack>
    </>
  )
}

export default StackLayout