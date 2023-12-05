import React from 'react'
import Typography from '@mui/material/Typography';

function Typograph() {
  return (
    <div>
        <Typography variant='h1' > h1 heading</Typography>
        <Typography variant='h2' > h2 heading</Typography>
        <Typography variant='h3' > h3 heading</Typography>
        <Typography variant='h4' > h4 heading</Typography>
        <Typography variant='h5' component='h1' gutterBottom > h5 heading</Typography>
        <Typography variant='h6' > h6 heading</Typography>

        <Typography variant='subtitle1' > sub title 1</Typography>
        <Typography variant='subtitle2' > sub title 2</Typography>

        <Typography variant='body1'>body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.</Typography>

        <Typography variant='body2'>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        </Typography>




    </div>
  )
}

export default Typograph