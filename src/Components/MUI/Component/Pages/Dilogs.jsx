import {useState} from 'react'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
function Dilogs() {
    const [open , setOpen] = useState(false);
  return (
    <>
    <Button  onClick={()=> setOpen(true)} >Open dialog </Button>
    <Dialog   open={open} 
     onClose={()=> setOpen(false)}
    aria-labelledby='dialog-title' aria-describedby='dialog-description' >
        <DialogTitle id= 'dialog-title'> Submit the Test ?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description' >
                Are you sure you want to submit the test? You will not be able to edit after submitting
            </DialogContentText>
        </DialogContent>
        <DialogActions>
           <Button  onClick={()=> setOpen(false)} >Calcel</Button>
           <Button onClick={()=> setOpen(false)}  autoFocus>Submit</Button>

        </DialogActions>
    </Dialog>
    </>
  )
}

export default Dilogs