import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './Components/Navbar.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText); //ready to use globally 

import React from 'react';

const App = () => {
  return (
    <main> <Navbar /> </main>
  );
}   
export default App;
