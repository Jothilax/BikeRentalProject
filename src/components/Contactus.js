import react from 'react';
import './contactus.css';

function Contactus() {
  return (
    <>
    <div className="contactus" id='contactus'>
    <div className="row">
    <div className=" col-md-12 col-sm-12 col-xs-12 h1 text-center p-5 ">Contact us</div>
    </div>
    <div className="row">
    <div className="content1 col-md-3 col-sm-3 col-xs-3"></div>
    <div className="content2 col-md-6 col-sm-6 col-xs-6">
      <p>Let’s bring joy and delight to the process of bike buying together.</p>
      <p> <b>Customer Support:</b>contact@bikewale.com</p>
    <p><b>New Bike Dealer:</b>contact@bikewale.com</p>
    <p><b>Enterprise Sales Inquiries:</b>esteam@bikewale.com</p>
    <p><b>Address:</b>12th Floor, Vishwaroop IT Park, S Pranavanandji Marg, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400705</p>
      </div>
    
    <div className="content3 col-md-3 col-sm-3 col-xs-3"></div>
    </div>
    </div>
    
      </>
  
  );
}

export default Contactus;
