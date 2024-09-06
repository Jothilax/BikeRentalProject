import react from 'react';
import './home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (

   <div class="container-fluid col-md-12 col-sm-12 col-xs-12" id="bgimg">
  <div class="container-fluid">
    <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
        <h2 class="hero_title">FIND YOUR PERFECT BIKE</h2>
        <p id='homep'>We have thousands of bikes for you to choose...</p>
        <Link to='/signup'>
        <button type="button" class="btn" id='homebtn'>Read More</button>
          </Link>
      
    </div>
    </div>
 </div>
 </div>

  );
}

export default Home;
