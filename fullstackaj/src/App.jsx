import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Components/FunctionalComponents/Home';
import Defaultuse from './Components/FunctionalComponents/Defaultuse';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/FunctionalComponents/Navbar';
import UseEffect from './Components/FunctionalComponents/Useeffecteg';
import UseEffects from './Components/FunctionalComponents/Useeffect';
import UseRef from './Components/FunctionalComponents/UseRef';
import UseRefnum from './Components/FunctionalComponents/UseRefnum';
import UseContext from './Components/FunctionalComponents/UseContext';
import './App.css';
function App() {
 return (
 <div>
   <BrowserRouter>
   <Navbar/>

   <Routes>

      <Route path="/" element = {<Home/>} />
      <Route path="/contact"element ={<Contact/>}/>
      <Route path="/gallery" element = {<Gallery/>} />
      <Route path="/about"element ={<About College="Kongu Enginnering College " Course=" AIML"/>}/>
      <Route path="/useeffecteg" element = {<UseEffect/>} />
      <Route path="/useeffect" element = {<UseEffects/>} />
      <Route path="/useref" element = {<UseRef/>} />
      <Route path="/userefnum" element = {<UseRefnum/>} />
      <Route path="/usecontext" element = {<UseContext/>} />

   </Routes>
   </BrowserRouter>
   
    

 </div> 
 );  
}


export default App
