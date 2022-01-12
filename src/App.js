import {React, useState} from 'react';
//import Navigation from './Components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';

//Components
import AddPatient from './AddPatient';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Section8 from './Section8'
import Section9 from './Section9'
import Section10 from './Section10'
import Section11 from './Section11'
import Section12 from './Section12'
import Section13 from './Section13'
import Section14 from './Section14'
import Section15 from './Section15'
import MOCAResults from './MOCAResults';
import WriteCheck from './WriteCheck';
import Review from './Review';
import 'bootstrap/dist/css/bootstrap.min.css';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {makeStyles} from "@material-ui/core";
import { theme } from './theme';
// import BottomNavigation from "@material-ui/core/BottomNavigationAction";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Tab } from 'react-bootstrap';


function App() {

  localStorage.setItem("pattern", "0");
  localStorage.setItem("cube", "0");
  localStorage.setItem("clock1", "0");
  localStorage.setItem("clock2", "0");
  localStorage.setItem("clock3", "0");
  localStorage.setItem("camel", "0");
  localStorage.setItem("lion", "0");
  localStorage.setItem("rhino", "0");
  localStorage.setItem("face1", "0");
  localStorage.setItem("face2", "0");
  localStorage.setItem("red1", "0");
  localStorage.setItem("red2", "0");
  localStorage.setItem("velvet1", "0");
  localStorage.setItem("velvet2", "0");
  localStorage.setItem("church1", "0");
  localStorage.setItem("church2", "0");
  localStorage.setItem("daisy1", "0");
  localStorage.setItem("daisy2", "0");
  localStorage.setItem("front", "0");
  localStorage.setItem("back", "0");
  localStorage.setItem("letters", "0");
  localStorage.setItem("one", "0");
  localStorage.setItem("two", "0");
  localStorage.setItem("three", "0");
  localStorage.setItem("four", "0");
  localStorage.setItem("five", "0");
  localStorage.setItem("rep1", "0");
  localStorage.setItem("rep2", "0");
  localStorage.setItem("sec12", "0");
  localStorage.setItem("count", "0");
  localStorage.setItem("trans", "0");
  localStorage.setItem("meas", "0");
  localStorage.setItem("date", "0");
  localStorage.setItem("day", "0");
  localStorage.setItem("month", "0");
  localStorage.setItem("year", "0");
  localStorage.setItem("place", "0");
  localStorage.setItem("city", "0");
  localStorage.setItem("eduCheck", "0");
  localStorage.setItem("blindCheck", "0");
  localStorage.setItem("writeCheck", "0");
  localStorage.setItem("facex1", "0");
  localStorage.setItem("facex2", "0");
  localStorage.setItem("facex3", "0");
  localStorage.setItem("velvetx1", "0");
  localStorage.setItem("velvetx2", "0");
  localStorage.setItem("velvetx3", "0");
  localStorage.setItem("redx1", "0");
  localStorage.setItem("redx2", "0");
  localStorage.setItem("redx3", "0");
  localStorage.setItem("daisyx1", "0");
  localStorage.setItem("daisyx2", "0");
  localStorage.setItem("daisyx3", "0");
  localStorage.setItem("churchx1", "0");
  localStorage.setItem("churchx2", "0");
  localStorage.setItem("churchx3", "0");
  localStorage.setItem("total", "0");
  localStorage.setItem("mis", "0");
  localStorage.setItem("cubepic", "");
  localStorage.setItem("clockpic", "");
  localStorage.setItem("patternpic", "");
  localStorage.setItem("subtraction", "0");
  //
  localStorage.setItem("orientation", "0");
  localStorage.setItem("delayedrecall", "0");
  localStorage.setItem("abstraction", "0");
  localStorage.setItem("language", "0");
  localStorage.setItem("attention", "0");
  localStorage.setItem("naming", "0"); // max 3
  localStorage.setItem("visuo", "0"); // max 5
  
  localStorage.setItem("total", "0");

  const [value, setValue] = useState("back")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
    <Routes>
    <Route path="/" element={<AddPatient/>} />
        <Route path="/questions" element={<Section1 />} />
        <Route path="/mobility" element={<Section2 />} />
        <Route path="/moca" element={<WriteCheck/>} />
        <Route path="/sec3" element={<Section3/>} />
        <Route path="/sec4" element={<Section4/>} />
        <Route path="/sec5" element={<Section5/>} />
        <Route path="/sec6" element={<Section6/>} />
        <Route path="/sec7" element={<Section7/>} />
        <Route path="/sec8" element={<Section8/>} />
        <Route path="/sec9" element={<Section9/>} />
        <Route path="/sec10" element={<Section10/>} />
        <Route path="/sec11" element={<Section11/>} />
        <Route path="/sec12" element={<Section12/>} />
        <Route path="/sec13" element={<Section13/>} />
        <Route path="/sec14" element={<Section14/>} />
        <Route path="/sec15" element={<Section15/>} />
        <Route path="/results" element={<MOCAResults/>} />
        <Route path="/review" element={<Review/>} />    
    </Routes>
    </Router>
  )
}
export default App;

