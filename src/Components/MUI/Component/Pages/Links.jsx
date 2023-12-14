import React from 'react'
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

function Links() {
  return (
    <>
    <Stack spacing={2} direction={'row'} m={4} >
<Link href='#' > Link</Link>
<Typography variant='h6'>
<Link href='#' color='secondary' underline='hover' > Second Link</Link>

</Typography>
    </Stack>
    </>
  )
}

export default Links