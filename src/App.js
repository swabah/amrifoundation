import React from 'react';
import './App.css';
import Footer from './assets/Footer';
import Header from './assets/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './Pages/Events';
import Teams from './Pages/Teams';
import Contact from './Pages/Contact';
import TeamiCard from './Components/Teams/TeamCard';
import NewEvent from './Hooks/NewEvent';
import CurrentZeroPoverty from './Components/Currentpage/CurrentZeroPoverty';
import CurrentAmriMindtalks from './Components/Currentpage/CurrentAmriMindtalks';
import CurrentEducation from './Components/Currentpage/CurrentEducation';
import CurrentSmile from './Components/Currentpage/CurrentSmile';
import CurrentGlobal from './Components/Currentpage/CurrentGlobal';
import CurrentSavePlanet from './Components/Currentpage/CurrentSavePlanet';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About/>} />
          <Route path="/Teams" element={<Teams/>} >
            <Route path=':id' element={<TeamiCard/>}/>
          </Route>
          <Route path="/Events" element={<Events/>} />
          <Route path="/Contacts" element={<Contact/>} />
          <Route path="/NewEvent" element={<NewEvent/>} />

          {/* Curret pages Routes */}

          <Route path='/Initiatives/Amri_Mindtalks' element={<CurrentAmriMindtalks/>}/>
          <Route path='/Initiatives/Zero_Poverty_by_2030' element={<CurrentZeroPoverty/>}/>
          <Route path='/Initiatives/Education' element={<CurrentEducation/>}/>
          <Route path='/Initiatives/Smile_Project' element={<CurrentSmile/>}/>
          <Route path='/Initiatives/Global_Peace' element={<CurrentGlobal/>}/>
          <Route path='/Initiatives/Save_Planet' element={<CurrentSavePlanet/>}/>

          {/* -------------------- */}

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
