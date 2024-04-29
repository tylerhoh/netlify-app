
import React from 'react';
import "./css/App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Linkbar from './components/Linkbar';

function App(){
  const TITLE = 'Tyler Hoh';
  return (
    
    <Router>
            <title>{TITLE}</title>
    <div className="App">
    <Linkbar></Linkbar>
    <Link className='photo-Link' to="/"><img alt='' id="hero"></img></Link>
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
