
import React from 'react';
import "./css/App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Reading from "./pages/Reading";
import Thoughts from "./pages/Thoughts";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App(){
  return (
    <Router>
    <div className="App">
    <Link className='photo-Link' to="/"><img alt='' id="hero"></img></Link>
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route path="/resume" element={<Resume/>}>
          </Route>
          <Route path="/thoughts" element={<Thoughts/>}>
          </Route>
          <Route path="/reading" element={<Reading/>}>
          </Route>
          <Route path="/photography" element={<Projects/>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
