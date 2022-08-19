import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <TextForm heading='Enter your text below'/>
    </div>
  );
}

export default App;
