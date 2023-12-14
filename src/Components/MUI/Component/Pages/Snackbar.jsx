import {useState, forwardRef} from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert";
// import AlertProps from "@mui/mat"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function Snackbars() {
  const [open, setOpen] = useState(false);
  const handleClose =(e,reason)=>{
    if(reason === 'clickaway'){
      return
    }
    setOpen(false)

  }
  return (
    <>
    <Button  onClick={()=> setOpen(true)} >Submit</Button>
    <Snackbar message='Form submmited successfully' autoHideDuration={3000}  open={open}  onClose={handleClose}
    anchorOrigin={{
      vertical:'top',
      horizontal:'right'
    }}
    
    />
    </>
  )
}

export default Snackbars