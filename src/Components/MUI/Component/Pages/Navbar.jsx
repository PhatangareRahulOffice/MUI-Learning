import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
            <IconButton  size='large' edge='start' color='inherit' aria-label='logo' > <CatchingPokemonIcon  />  </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} >PokeMonApp</Typography>
            <Stack direction={'row'} spacing={2} >
                <Button color='inherit'> Features</Button>
                <Button color='inherit'> Pricing</Button>
                <Button color='inherit'> About-Us</Button>
                <Button color='inherit'> Login</Button>

            </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar