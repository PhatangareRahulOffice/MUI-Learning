import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Tooltips() {
  return (
    <>
    <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={200}> 
    <IconButton>
        <DeleteIcon/>
    </IconButton>
    </Tooltip>
    </>
  )
}

export default Tooltips