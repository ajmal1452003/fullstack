import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/FunctionalComponents/Home';
import Defaultuse from './Components/FunctionalComponents/Defaultuse';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Bodys from './Components/FunctionalComponents/Bodys';
import Footers from './Components/FunctionalComponents/Footers';
import './App.css';
function App() {
 return (
 <div>
   <BrowserRouter>
   <Routes>

      <Route path="/" element = {<Home/>} />
      <Route path="/contact"element ={<Contact/>}/>
      <Route path="/gallery" element = {<Gallery/>} />
      <Route path="/about"element ={<About College="Kongu Enginnering College " Course=" AIML"/>}/>

   </Routes>
   </BrowserRouter>
   
    

 </div> 
 );  
}


export default App
