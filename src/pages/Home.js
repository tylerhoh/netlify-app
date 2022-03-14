import "../css/Home.css"
import React from 'react';
import Linkbar from "../components/Linkbar";


const Home=()=>{
    return(
    <div className="App">
      <p className="bio">Hi there, I'm Tyler! I am a Software Engineer, musician, and trail biker. Born, raised, and living in San Francisco</p>
      <Linkbar></Linkbar>
    </div>
  )
}

export default Home;