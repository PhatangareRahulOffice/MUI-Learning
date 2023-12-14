import {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Drawers() {

  const [isDrawerOPen , setIsDrawerOPen] = useState(false);
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={()=> setIsDrawerOPen(true)} >
      <MenuIcon/>
    </IconButton>
   <Drawer  anchor='left' 
   open={isDrawerOPen}
   onClose={()=> setIsDrawerOPen(false)}
   >
    <Box p={2} width='250px' textAlign='center' role='presentation' >
  <Typography variant='h6' component='div'>
    Side Panel
  </Typography>
    </Box>
   </Drawer>
    </>
  )
}

export default Drawers