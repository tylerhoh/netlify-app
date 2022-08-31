
import React from 'react';
import "./css/App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App(){
  const TITLE = 'Tyler Hoh';
  return (
    
    <Router>
            <title>{TITLE}</title>
    <div className="App">

    <Link className='photo-Link' to="/"><img alt='' id="hero"></img></Link>
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
