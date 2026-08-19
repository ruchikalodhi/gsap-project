import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/hero.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText); //ready to use globally 

import React from 'react';

const App = () => {
  return (
    <main> 
      <Navbar /> 
      <Hero />
    </main>
  );
}   
export default App;
