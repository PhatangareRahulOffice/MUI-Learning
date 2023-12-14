import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from '@mui/material/AlertTitle';
import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';


function Alerts() {
  return (
    <>
      <Stack spacing={2}>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
             This is an Error Alert</Alert>
        <Alert severity="warning"> 
        <AlertTitle>Warning</AlertTitle>

         This is an Warning Alert</Alert>
        <Alert severity="info"> 
        <AlertTitle>Info</AlertTitle>

        This is an Info Alert</Alert>
        <Alert severity="success"> 
        <AlertTitle>Success</AlertTitle>

        This is an Success Alert</Alert>

        <Alert variant="outlined" severity="error"> This is an Error Alert</Alert>
        <Alert variant="outlined" severity="warning"> This is an Warning Alert</Alert>
        <Alert variant="outlined" severity="info"> This is an Info Alert</Alert>
        <Alert variant="outlined" severity="success"> This is an Success Alert</Alert>

        <Alert variant="filled" severity="error"  onClose={()=>alert('Close alert')} > This is an Error Alert</Alert>
        <Alert variant="filled" severity="warning"> This is an Warning Alert</Alert>
        <Alert variant="filled" severity="info" action={<Button color="inherit" size="small">Undo </Button>} > This is an Info Alert</Alert>
        <Alert variant="filled" severity="success" icon={<CheckIcon fontSize="inherit" />} > This is an Success Alert</Alert>
      </Stack>
    </>
  );
}

export default Alerts;
