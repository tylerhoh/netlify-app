import React from 'react';
import "../css/Home.css"
import Linkbar from "../components/Linkbar";
import Typewriter from "../components/Typewriter";

const Home=()=>{
   const words = ["software engineer",
   "singer/songwriter",
   "mushroom forager",
   "mountain biker",
   "jiu jitsu athlete"]
    return(
    <div>
    <div>
      </div>
      <h1 className="bio">Hi there, I'm <span>Tyler</span></h1>
      <h3 className = "bio"> I am a:
       </h3>
       <div className="bio">       
        <Typewriter words = {words}></Typewriter>
      </div>
    </div>
  )
}
export default Home;