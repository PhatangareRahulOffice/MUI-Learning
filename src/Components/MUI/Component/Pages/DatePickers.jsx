import {useState} from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker'
// import {TimePicker} from '@mui/lab/TimePicker/TimePicker'
function DatePickers() {
    const [selectedDate, setSelectedDate] = useState(Date| null);
    const [selectedTime, setSelectedTime] = useState(Date| null);

    console.log({selectedDate})
  return (
    <>

<LocalizationProvider dateAdapter={AdapterDayjs}>
    <Stack spacing={4} direction={'row'}>

    <DatePicker label='Date Picker'  renderInput={(params)=> <TextField {...params}  value={selectedDate} 
      onChange={(newValue)=> {
        setSelectedDate(newValue)
      }}
     /> } ></DatePicker>
     <TimePicker label='Time Picker'  renderInput={(params)=> <TextField {...params}  value={selectedTime} 
      onChange={(newValue)=> {
        setSelectedTime(newValue)
      }}
     /> } ></TimePicker>

    </Stack>
    </LocalizationProvider>
    </>
  )
}

export default DatePickers