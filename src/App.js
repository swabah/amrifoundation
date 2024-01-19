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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
