import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
function MuiButton() {
    const [formats, setFormats] = useState([]);
    const handleFormatChange = (e, newFormats) =>{
     setFormats(newFormats);
        console.log(formats)
    }
  return (
    <div>
       <Stack spacing={4} >
       <Stack spacing={8} direction={'row'}>
        <Button variant='text' href='#youtube.com'> Text</Button>
        <Button variant='contained' > Contained</Button>
        <Button variant='outlined' > Outlined</Button>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button  variant='text' color='primary'> Primary</Button>
            <Button  variant='text' color='secondary'> Secondary</Button>
            <Button  variant='text' color='error'> Error </Button>
            <Button  variant='text' color='warning'> Warning</Button>
            <Button  variant='text' color='info'> Info</Button>
            <Button  variant='text' color='success'>Success </Button>
       </Stack>
        <Stack spacing={2} direction={'row'}>
            <Button  variant='contained' color='primary'> Primary</Button>
            <Button  variant='contained' color='secondary'> Secondary</Button>
            <Button  variant='contained' color='error'> Error </Button>
            <Button  variant='contained' color='warning'> Warning</Button>
            <Button  variant='contained' color='info'> Info</Button>
            <Button  variant='contained' color='success'>Success </Button>
        </Stack> 
       <Stack spacing={2} direction={'row'}>
            <Button  variant='outlined' color='primary'> Primary</Button>
            <Button  variant='outlined' color='secondary'> Secondary</Button>
            <Button  variant='outlined' color='error'> Error </Button>
            <Button  variant='outlined' color='warning'> Warning</Button>
            <Button  variant='outlined' color='info'> Info</Button>
            <Button  variant='outlined' color='success'>Success </Button>
            </Stack>

            <Stack display='block' spacing={2} direction={'row'}>
            <Button  variant='contained' color='success' size='small' >Small </Button>
            <Button  variant='contained' color='success' size='medium' >Medium </Button>
            <Button  variant='contained' color='success' size='large'  >Large </Button>
            </Stack>

            <Stack spacing={2} direction={'row'} >
                <Button variant='contained' startIcon={<SendIcon/>}  disableRipple  onClick={()=> alert('Clicked')} > Send</Button>
                <Button variant='contained' endIcon={<SendIcon/> } disableElevation > Send</Button>
                <IconButton color='error' size='small'>
                    <SendIcon/>
                </IconButton>
            </Stack>
            <Stack direction='row' >
           <ButtonGroup variant='outlined' orientation='vertical'  size='small' color='secondary' aria-label='alignment button group' >
           <Button >Left </Button>
            <Button >Center </Button>
            <Button >Right </Button>
           </ButtonGroup>
            </Stack>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label='text formatting' value={formats}  onChange={handleFormatChange} size='small' color='info' orientation='vertical' exclusive >
                    <ToggleButton value='bold' aria-label='bold' > <FormatBoldIcon/> </ToggleButton>
                    <ToggleButton value='italic' aria-label='italic' > <FormatItalicIcon/> </ToggleButton>
                    <ToggleButton  value='underlined'  aria-label='underlined' > <FormatUnderlinedIcon/> </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
       </Stack>

    </div>
  )
}

export default MuiButton