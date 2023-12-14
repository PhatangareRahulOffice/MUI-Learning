import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
function Badges() {
  return (
    <>
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>

        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={100} color='error' max={999}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <MailIcon/>
        </Badge>
    </Stack>
    </>
  )
}

export default Badges