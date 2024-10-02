import React from 'react';
import "../css/Home.css"
import Typewriter from "../components/Typewriter";

const Home=()=>{
   const words = ["software engineer",
   "mushroom forager",
   "mountain biker",
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
      <h2>About me</h2>
      <h3 className="bio">Fintech, Stocks, IoT
      <br></br>
      I like to make cool web apps using the latest web dev technologies. <br></br>
      I'm always testing out new frameworks and tools.<br></br>
      This website was built using React and CSS; deployed on Netlify. 
      </h3>
    </div>
  )
}
export default Home;