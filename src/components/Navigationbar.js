import react from 'react';
import {Link} from 'react-router-dom';
// import {Container,Navbar,Nav} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
 import './navigationbar.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import Signup from './Signup';
export default function Navigationbar(){
return(
      <>
  
    <nav>
   <br/>
    <div class="row">
    <div class="col-md-1 col-sm-1 col-xs-1"></div>
  <div class="col-md-8 col-sm-8 col-xs-8 mt-2 ">
  <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/bikelisting'>BikeListing</Link>
            <Link to='/FAQs'>FAQs</Link>
            <Link to='/contactus'>Contact Us</Link>
   
  </div>
  <div class=" col-md-3 col-sm-3 col-xs-3">
  <form class="d-flex me-4">
          <input className2="form-control" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btnsrc" type="submit">Search</button>
          <Link className='iconlink' to='/signup'>
          <FontAwesomeIcon icon={faCircleUser} size = '2x'  transform="right-5"  />
          </Link>
          {/* <button className="button"  onClick={Signup()}> */}
          {/* <a href='https://jothilakshmi2162000@gmail.com'> */}
                {/* <FontAwesomeIcon icon={faAt} size="1x" transform="left-10" /> </a> */}
          {/* <FontAwesomeIcon icon={faCircleUser} size = '2x'  transform="right-8" onClick={()=>Signup } />
          </a> */}
          {/* </button> */}
          {/* <i class="bi bi-person-circle"></i> */}
          
        </form>
  </div>
    </div>


        
        <div>
        
           
        </div>
            
        </nav>
      
        </>
);
}
