import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
function SpeedDials() {
  return (
    <>
<SpeedDial ariaLabel='Navigation spped dial'
 sx={{position:'absolute', bottom:16 ,right:16}}
 icon={<SpeedDialIcon openIcon={<EditIcon/>} />}
>
    <SpeedDialAction icon={<SaveIcon/>} tooltipTitle='Save' />
    <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print' />
    <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share' />
    <SpeedDialAction icon={<FileCopyIcon/>} tooltipTitle='Copy' />


</SpeedDial>
    </>
  )
}

export default SpeedDials