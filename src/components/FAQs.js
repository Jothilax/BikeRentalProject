import react from 'react';
import './faqs.css';

function FAQs() {
  return (
    <>
        <div className="row" id='FAQs'>
      <div className="col-md-12 col-sm-12 col-xs-12">
        <p className="h1  text-center m-3">FAQs</p>
      
    </div>
    <div className="row" id='qns'>
      <div className="col-md-1 col-sm-1 col-xs-1"></div>
      <div className="containerfaq col-md-10 col-sm-10 col-xs-10" >
      <div className="row m-3 pt-2" >
        <h5>Q: Are there any upcoming bikes?</h5>
        <p>Royal Enfield Classic 350 [2024], TVS Jupiter 110 [2024] and Kawasaki Versys-X 300 are launching soon in India.</p>
      </div>

      <div className="row m-3" >
        <h5>Q: Which are the most popular bikes in India?</h5>
        <p>The 3 most popular bikes are Royal Enfield Hunter 350, TVS Raider 125 and Honda SP 125. If you are looking for an economical bike then Hero HF Deluxe is the most affordable bike available in India at a price of Rs 57,012.</p>
      </div>

      <div className="row m-3" >
        <h5>Q: Which are the most popular scooters in India?</h5>
        <p>The most popular scooters are Honda Activa 6G and TVS Ntorq 125. The most affordable scooter available in India in 2024 is iVOOMi S1, priced at Rs 54,999.</p>
      </div>

      <div className="row m-3" >
        <h5>Q: Which are the latest bikes available?</h5>
        <p>The recently launched bikes in India are Indian Roadmaster Elite, BMW CE 04 and Royal Enfield Guerrilla 450.</p>
      </div>

      </div>
      <div className="col-md-1 col-sm-1 col-xs-1"></div>
    </div>
    </div>
      </>
  
  );
}

export default FAQs;
