import {useState} from 'react'
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Switchs() {

    const [checked, setChecked] = useState(false);
    console.log(checked)

    const handleChange = (e)=>{
        const value = e.target.checked;
        setChecked(value)

    }
  return (
    <>
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch  color='success' checked={checked} onChange={handleChange} />} />
    </Box>
    </>
  )
}

export default Switchs