import React from 'react'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function ProgressMui() {
  return (
    <>
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress  color='success' />
        <LinearProgress  color='error'/>
        <LinearProgress/>

    </Stack>
    </>
  )
}

export default ProgressMui