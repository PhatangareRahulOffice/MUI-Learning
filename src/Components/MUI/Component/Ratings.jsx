import {useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Ratings() {
    // const [value, setValue] = useState(Number | null)
    const [value, setValue] = useState(3 | null)

    console.log({value});

    const handleChange = (e, newValue)=>{
    //  const value = e.target.value;
     setValue(newValue)


    }
  return (
    <>
    <Box>
        <Stack spacing={2}>
            <Rating   value={value} onChange={handleChange} precision={0.5}  size='large' icon={< FavoriteIcon color='error' fontSize='inherit'/> } emptyIcon={<FavoriteBorderIcon fontSize='inherit'  />}  highlightSelectedOnly  />
        </Stack>
    </Box>
    </>
  )
}

export default Ratings
