
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
// import Typograph from './Components/MUI/Component/Typography';
// import MuiButton from './Components/MUI/Component/Button';
// import Header from './Components/header/Header';
// import StackLayout from './Components/MUI/Component/Layouts/StackLayout';
// import GridLayout from './Components/MUI/Component/Layouts/GridLayout';
// import CardLayout from './Components/MUI/Component/Layouts/CardLayout';
// import Accordinas from './Components/MUI/Component/Layouts/Accordinas';
import ImageLists from './Components/MUI/Component/Layouts/ImageLists';
import Navbar from './Components/MUI/Component/Pages/Navbar';
// import BoxLayout from './Components/MUI/Component/Layouts/BoxLayout';
// import Ratings from './Components/MUI/Component/Ratings';
// import AutoCompletes from './Components/MUI/Component/AutoCompletes';
// import Textfield from './Components/MUI/Component/Textfield';
// import Selectfield from './Components/MUI/Component/Selectfield';
// import RadioButtons from './Components/MUI/Component/RadioButtons';
// import Checkboxes from './Components/MUI/Component/Checkboxes';
// import Switchs from './Components/MUI/Component/Switchs';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
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
      
    </div>
  );
}

export default App;
