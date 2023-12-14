import {useState, useEffect} from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

function Skeletons() {
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(false)
    },5000)
  return (
    <>
    <Box sx={{width:'250px'}}>
          {
            loading ? (
                <Skeleton  variant='rectangular' width={256} height={144} animation='wave' />
            ) :(
                <img  src='https://source.unsplash.com/random/256*144' 
                alt='skelton'  width={256} height={144} />
            )
          }
          <Stack direction={'row'}  spacing={1} sx={{ width:'100%', marginTop:'12px'}} >
            {
                loading ? (
                    <Skeleton variant='circular' width={40} height={40} animation='wave' />
                ) : (
                    <Avatar> V</Avatar>
                )
            }
            <Stack sx={{ width:'80%'}} >
                {
                    loading ? (
                        <Typography variant='body1'>
                            <Skeleton variant='text' width='100%' animation='wave' />
                        </Typography>

                    //      <Typography variant='body2'>
                    //      <Skeleton variant='text' width='100%' animation='wave' />
                    //  </Typography>
                    ) : (
                        <Typography variant='body1' > React MUI Tutorial</Typography>
                    )
                }

            </Stack>
          </Stack>
    </Box>
    </>
  )
}

export default Skeletons