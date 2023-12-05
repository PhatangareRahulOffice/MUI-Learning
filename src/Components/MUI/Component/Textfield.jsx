import {useState} from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
function Textfield() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField  label='Name' variant='outlined' />
            <TextField  label='Name' variant='filled' />
            <TextField  label='Name' variant='standard' />
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField  label='Small Secondary'  size='small' variant='outlined' color='secondary' />
            <TextField  label='medium Secondary' size='medium' variant='filled' color='secondary' />
            <TextField  label='Form Input'  disabled required />
            <TextField  label='Password' type='password' required  helperText=' Do not share your password with anyone' />
            <TextField  label='Read Only' InputProps={{readOnly: true}}   />
        </Stack>

        <Stack direction={'row'} spacing={2}>
            <TextField label='Amount'   InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} />
            <TextField label='Weight'   InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}} />
        </Stack>

        <Typography variant='h6' color='error'>Password Show & Hide  </Typography>
        {/* <Stack direction={'row'} spacing={4}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <TextField />
        </Stack> */}
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        
    </Stack>
    </>
  )
}

export default Textfield