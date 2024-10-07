import React from 'react';
import "../css/Home.css"
import Typewriter from "../components/Typewriter";

const Home=()=>{
   const words = ["software engineer",
   "mushroom forager",
   "mountain biker",
   "language learner",
   "jiu jitsu athlete"]
    return(
    <div>
    <div>
      </div>
      <h1 className="bio">Tyler James Hoh</h1>
      <h2 className = "bio"> I am a:
       </h2>
       <div className="bio">       
        <Typewriter words = {words}><br></br></Typewriter>
      </div>
      <h3 className="bio">
      <br></br>
       <br></br>
      </h3>
    </div>
  )
}
export default Home;