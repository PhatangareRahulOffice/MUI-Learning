
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
// import Typograph from './Components/MUI/Component/Typography';
// import MuiButton from './Components/MUI/Component/Button';
// import Header from './Components/header/Header';
// import StackLayout from './Components/MUI/Component/Layouts/StackLayout';
// import GridLayout from './Components/MUI/Component/Layouts/GridLayout';
// import CardLayout from './Components/MUI/Component/Layouts/CardLayout';
// import Accordinas from './Components/MUI/Component/Layouts/Accordinas';
// import ImageLists from './Components/MUI/Component/Layouts/ImageLists';
// import Links from './Components/MUI/Component/Pages/Links';
import Navbar from './Components/MUI/Component/Pages/Navbar';
import Breacrumbs from './Components/MUI/Component/Pages/Breacrumbs';
// import Drawers from './Components/MUI/Component/Pages/Drawers';
// import SpeedDials from './Components/MUI/Component/Pages/SpeedDials';
// import BottomNavigations from './Components/MUI/Component/Pages/BottomNavigations';
// import Avtars from './Components/MUI/Component/Pages/Avtars';
// import Badges from './Components/MUI/Component/Pages/Badges';
// import Lists from './Components/MUI/Component/Pages/Lists';
// import Chips from './Components/MUI/Component/Pages/Chips';
// import Tooltips from './Components/MUI/Component/Pages/Tooltips';
// import Tabels from './Components/MUI/Component/Pages/Tabels';
// import Alerts from './Components/MUI/Component/Pages/Alerts';

import Snackbars from './Components/MUI/Component/Pages/Snackbar';
import Dilogs from './Components/MUI/Component/Pages/Dilogs';
import ProgressMui from './Components/MUI/Component/Pages/ProgressMui';
import Skeletons from './Components/MUI/Component/Pages/Skeletons';
import MuiLoadingButton from './Components/MUI/Component/Pages/MuiLoadingButton';
import DatePickers from './Components/MUI/Component/Pages/DatePickers';
import DateRangepicker from './Components/MUI/Component/Pages/DateRangepicker';
import Tabes from './Components/MUI/Component/Pages/Tabes';
import TimeLines from './Components/MUI/Component/Pages/TimeLines';
import Masonarys from './Components/MUI/Component/Pages/Masonarys';
import MuiResponsiveness from './Components/MUI/Component/Pages/MuiResponsiveness';
// import BoxLayout from './Components/MUI/Component/Layouts/BoxLayout';
// import Ratings from './Components/MUI/Component/Ratings';
// import AutoCompletes from './Components/MUI/Component/AutoCompletes';
// import Textfield from './Components/MUI/Component/Textfield';
// import Selectfield from './Components/MUI/Component/Selectfield';
// import RadioButtons from './Components/MUI/Component/RadioButtons';
// import Checkboxes from './Components/MUI/Component/Checkboxes';
// import Switchs from './Components/MUI/Component/Switchs';
// import {LocalizationProvider} from '@mui/lab/LocalizationProvider';
// import {AdapterDateFns} from '@mui/lab/AdapterDateFns';

import {createTheme ,colors ,ThemeProvider} from '@mui/material';


const theme = createTheme({
  status:{
  danger:'#e53e3e'
  },
  palette:{
    secondary:{
      main:colors.orange[500]
    },
    neutral:{
      main:colors.grey[500],
      darker: colors.grey[700]
    }
  }
})
function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns} >

    <div className="App">
      <ThemeProvider theme={theme}>

      
      <Router>
        {/* <Navbar/> */}
        {/* <Breacrumbs/> */}
        {/* <Masonarys/> */}
        <MuiResponsiveness/>
        {/* <TimeLines/> */}
        {/* <Dilogs/> */}
        {/* <DatePickers/> */}
        {/* <Tabes/> */}
        {/* <DateRangepicker/> */}
        {/* <Snackbars/> */}
        {/* <Skeletons/> */}
        {/* <MuiLoadingButton/> */}
        {/* <ProgressMui/> */}
        {/* <Alerts/> */}
        {/* <Tabels/> */}
        {/* <Tooltips/> */}
        {/* <Badges/> */}
        {/* <Lists/> */}
        {/* <Chips/> */}

        {/* <Avtars/> */}
        {/* <BottomNavigations/> */}
         {/* <SpeedDials/> */}
        {/* <Drawers/> */}
        {/* <Links/> */}
        {/* <ImageLists/> */}
        {/* <Accordinas/> */}
        {/* <CardLayout/> */}
        {/* <GridLayout/> */}
        {/* <StackLayout/> */}
        {/* <BoxLayout/> */}
        {/* <AutoCompletes/> */}
        {/* <Ratings/> */}
        {/* <Switchs/> */}
        {/* <Checkboxes/> */}
        {/* <RadioButtons/> */}
        {/* <Selectfield/> */}
        {/* <Textfield/> */}
       {/* <MuiButton/> */}
       {/* <Typograph/> */}
      {/* <Header/> */}
      </Router>
      </ThemeProvider>
    </div>
    // </LocalizationProvider>

  );
}

export default App;
