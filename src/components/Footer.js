import react from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
// import { faEnvelopeOpenText,faSquareInstagram,faSquareFacebook,faYoutube,faLinkedin,faXTwitter} from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin,faInstagram,faYoutube ,faFacebook} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <div className="Footer" id='Footer'>
    <div className="row">
    <div className="col-md-12 col-sm-12 col-xs-12 h5 text-center p-2">Connect with us</div>
    <div className="row">
    <div className="col-md-5 col-sm-5 col-xs-5 "></div>
    <div className="col-md-7 col-sm-7 col-xs-7 ">
    <div className="row_footer ">
    <div className=" col-md-2 col-sm-2 col-xs-2 "></div>
    <div className="  col-md-8 col-sm-8 col-xs-8 ">
    <Link to="#"><FontAwesomeIcon icon={faEnvelopeOpenText}   transform="right-40" /> </Link>
    <Link to="#"><FontAwesomeIcon icon={faLinkedin}   transform="right-60" /></Link>
    <Link to="#"><FontAwesomeIcon icon={faInstagram}   transform="right-80"/></Link>
    <Link to="#"><FontAwesomeIcon icon={faYoutube}  transform="right-100"/></Link>
    <Link to="#"><FontAwesomeIcon icon={faFacebook}  transform="right-125"/></Link>
    </div>
    <div className=" col-md-2 col-sm-2 col-xs-2 "></div>
    </div>
    
   
    </div>
    </div>
    </div>
    </div>
    
      </>
  
  );
}

export default Footer;
