import logo from './logo.svg';
// import './App.css';
import { Routes,Route } from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import BikeListing from './components/BikeListing.js';
import Contactus from './components/Contactus.js';
import FAQs from './components/FAQs.js';
import Footer from './components/Footer';
import Navigationbar from './components/Navigationbar.js';
import Signup from './components/Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <>
    {/* <Signup/> */}
    <Navigationbar />
    <Routes>
     <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/bikelisting' element={<BikeListing />}/>
      <Route path='/FAQs' element={<FAQs />}/>
      <Route path='/contactus' element={<Contactus />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
