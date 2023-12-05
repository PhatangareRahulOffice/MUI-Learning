import {useState} from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function RadioButtons() {
    const [value , setValue] = useState('');
    console.log('value' , value)
    const handleChange = (e)=>{
        const value = e.target.value;
        setValue(value)

    }
  return (
    <>
    <Box>
        <FormControl error>
            <FormLabel id='job-experience-group-label' > Years of experience</FormLabel>
            <RadioGroup name='job-experience-group'aria-label='job-experience-group-label' value={value} onChange={handleChange} row  >
                <FormControlLabel  control={< Radio size='small' color='secondary' />} label='0-2' value='0-2' />
                <FormControlLabel  control={< Radio/>} label='3-5' value='3-5' />
                <FormControlLabel  control={< Radio/>} label='6-10' value='6-10' />

            </RadioGroup>
        </FormControl>
    </Box>
    </>
  )
}

export default RadioButtons