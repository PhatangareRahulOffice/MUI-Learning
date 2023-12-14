import {useState} from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import Box from '@mui/material/Box';
function Chips() {
    const [ value, setValue]= useState(['chip1', 'chip2', 'chip3'])
    const handleDelete =(chip)=>{
setValue((val)=> val.filter((val)=> val !== chip))
    }
  return (
    <>
    <Stack direction='row' spacing={4} sx={{marginTop:'50px'}} >
        <Chip label='Chip' color='primary' size='small' />
        <Chip label='Chip' color='error' size='small' icon={<FaceIcon/>} />
        <Chip label='Chip- Outlined' color='secondary' size='small' variant='outlined'  avatar={<Avatar>V</Avatar>} />
        <Chip label='Click' color='success' onClick={()=> alert('clicked')} />
        <Chip  label='Delete' color='error' onClick={()=> alert('Clicked') } onDelete={()=> alert('Delete Handle called')}  />


         {
            value.map((chip)=>(
                <Chip  key={chip} label={chip} onDelete={()=>handleDelete(chip)}  />
            ))
         }
    </Stack>
    </>
  )
}

export default Chips