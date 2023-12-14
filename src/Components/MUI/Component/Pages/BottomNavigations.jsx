import {useState} from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function BottomNavigations() {

    const [value, setValue] = useState(0)
  return (
    <>
    <BottomNavigation sx={{width:'100%', position:'absolute', bottom:'0'}}  value={value} onChange={(e, newValue)=>{setValue(newValue)}} showLabels >

<BottomNavigationAction label='Restore' icon={<RestoreIcon/>} ></BottomNavigationAction>
<BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>} ></BottomNavigationAction>
<BottomNavigationAction label='Location' icon={<LocationOnIcon/>} ></BottomNavigationAction>

    </BottomNavigation>
    </>
  )
}

export default BottomNavigations