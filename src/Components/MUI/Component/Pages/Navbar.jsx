import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
    const [anchorEl ,setAnchorEl] = useState(null);
    const open = anchorEl

    const handleClick =(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
            <IconButton  size='large' edge='start' color='inherit' aria-label='logo' aria-control={open ? 'resources_menu':undefined}  aria-haspopup='true'
            aria-expanded={open ? 'true':undefined}
             > <CatchingPokemonIcon  />  </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}} >PokeMonApp</Typography>
            <Stack direction={'row'} spacing={2} >
                <Button color='inherit'> Features</Button>
                <Button color='inherit'> Pricing</Button>
                <Button color='inherit'> About-Us</Button>
                <Button color='inherit' id='resources_button' onClick={handleClick} 
                aria-haspopup='true'
                aria-controls={open ? 'resources_menu': undefined}
                aria-expanded={open ? 'true': undefined}
                endIcon={<KeyboardArrowDownIcon/>}
                >Resource</Button>
                <Button color='inherit'> Login</Button>
            </Stack>
            <Menu id='resources_menu' anchorEl={anchorEl} open={open}
             MenuListProps={{"aria-labelledby":'resources_button'}}
               onClose={handleClose}
               anchorOrigin={{
                vertical:'bottom',
                horizontal:'right'
               }}
               transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
               }}
               >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar