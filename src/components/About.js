import react from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPeopleGroup,faCar} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <>
    <div class="row" id='about'>
      <div class="col-md-1 col-sm-1 col-xs-1"></div>

      <div class="col-md-10 col-sm-10 col-xs-10 ">

      <div class="row">

      <div class="col-md-12 col-sm-12 col-xs-12">
      <h1 id='abouth1'> About Us</h1>
      <p className='aboutp'>Part of CarTrade Tech, BikeWale's mission is to bring delight in two-wheeler buying, we offer a bouquet of reliable tools and services to help motorcycle and scooter consumers decide on buying the right two-wheeler, at the right price and from the right partner.</p>
      </div>
      </div>

      <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
      <h1 id='abouth1'>Our Group’s Scale</h1>
      </div>
      
      </div>
      <div class="row">
      <div class="col-md-1 col-sm-1 col-xs-1"></div>
     
      <div class="col-md-10 col-sm-10 col-xs-10">
      <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6">

      <div className='abtcrd'>
      <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-5 mt-4 w-20">
      {/* <link  href="%SRC_%COMPONENTS_URL%/users.png" /> */}
        {/* <img src="./users.png" alt="Girl in a jacket" width="2" height="2" /> */}
      {/* <i class="fa-solid fa-people-group"></i> */}
      <FontAwesomeIcon icon={faPeopleGroup} size = '5x'  transform="right-10" />
      </div>
      <div class="col-md-7 col-sm-7 col-xs-7 mt-4">
      <h3>34.2 M</h3>
        <h6>Monthly Unique Visitors</h6>
        
      </div>
      </div>


      <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12 mt-3 ">
      <p class="text-center" id='abtcrdp'>Monthly Average Unique Visitors in Q1 FY24</p>
      </div>
      
      </div>
      </div>
      </div>


      <div class="col-md-6 col-sm-6 col-xs-6">
      <div className='abtcrd'>
      <div class="row">
      <div class="col-md-5 col-sm-5 col-xs-5 mt-4 w-20">
      <FontAwesomeIcon icon={faCar}  size = '5x'  transform="right-15" />
      </div>
      <div class="col-md-7 col-sm-7 col-xs-7 mt-4">
      <h3>10,00,000+</h3>
        <h6>Vehicles Listed</h6>
        
      </div>
      </div>


      <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12 mt-3 ">
      <p class="text-center" id='abtcrdp'>Vehicles listed for auction in Q1 FY24</p>
      </div>
      
      </div>
      </div>
      </div>



      </div>
      </div>

      <div class="col-md-1 col-sm-1 col-xs-1"></div>
      
      </div>
      
      
     
      </div>
      <div class=" col-md-1 col-sm-1 col-xs-1"></div>
    </div>
      </>
  
  );
}

export default About;
