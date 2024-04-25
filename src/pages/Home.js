import "../css/Home.css"
import React from 'react';
import Linkbar from "../components/Linkbar";
import Typewriter from "../components/Typewriter";

const Home=()=>{
   const words = ["a Software Engineer",
   "a musician",
   "a mountain biker",
   "a jiu jitsu athlete",
   "born, raised, and living in San Francisco"]
    return(
    <div className="App">
      <h1>Hi there, I'm Tyler!</h1>
      <p className="bio"> I am:
       </p>
       <div>       
        <Typewriter words = {words}></Typewriter>
      </div>
      <div>
        <Linkbar></Linkbar>
      </div>
    </div>
  )
}

export default Home;