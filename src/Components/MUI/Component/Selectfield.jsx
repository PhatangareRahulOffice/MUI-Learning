import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';


function Selectfield() {
    const [country , setCountry] = useState('');
    const [ countries, setCountries] = useState([]);

    console.log({country})

    const  handleChange1 = (e)=> {
        const value = e.target.value
        setCountry(value)
        }

  const  handleChange2 = (e)=> {
    const value = e.target.value
    setCountries(typeof value === 'string' ? value.split(','): value)
    }


  return (
    <>
<Box width='500px'>
   <Stack spacing={4} direction={'row'}>
   <TextField label= "Select Country" select value={country} onChange={handleChange1} fullWidth 
    size='small' color='secondary'
    >
        <MenuItem  value='IN' > India</MenuItem>
        <MenuItem  value='US' > USA</MenuItem>
        <MenuItem  value='AU' > Austraia</MenuItem>
    </TextField>

    <TextField label= "Select Country" select value={countries} onChange={handleChange2} fullWidth SelectProps={{multiple:true}}
    size='small' color='secondary' helperText='Please select your Country' error
    >
        <MenuItem  value='IN' > India</MenuItem>
        <MenuItem  value='US' > USA</MenuItem>
        <MenuItem  value='AU' > Austraia</MenuItem>
    </TextField>
   </Stack>
</Box>
    </>
  )
}

export default Selectfield