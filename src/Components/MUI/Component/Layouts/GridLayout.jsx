import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
function GridLayout() {
  return (
    <>
   <Paper sx={{padding:'32px'}} elevation={4} >
   <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}  >
            <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6}  >
            <Box bgcolor='primary.light' p={2}> Item 2</Box>
        </Grid>
        <Grid item xs={6}  >
            <Box bgcolor='primary.light'p={2} > Item 3</Box>
        </Grid>
        <Grid item xs={6}  >
            <Box bgcolor='primary.light'p={2} > Item 4</Box>
        </Grid>
    </Grid>
   </Paper>
    </>
  )
}

export default GridLayout