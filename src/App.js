
import './App.css';
import Header from './Components/header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>

      <Header/>
      </Router>
      {/* <h1>
        Hello 
      </h1> */}
    </div>
  );
}

export default App;
