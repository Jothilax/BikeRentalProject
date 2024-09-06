import react from 'react';
import './bikelisting.css';
import bike1 from './bike1.jpg';
import bike2 from './bike2.jpg';
import bike5 from './bike5.jpg';
import bike4 from './bike4.jpg';

function BikeListing() {
  return (
    <>
    
    <div className="bike "  id="bike">
  <p className="h1  text-center p-5">Trending Bikes of August 2024</p>

   
  <div className="row" id="toys">
    <div className="col-3">
      <div className="card m-1 " >
        <div className="text-center">
          {/* <img src={F:/FullStack/react/routing/my-routing/src/asserts/pic1.jpg}  alt="..." /> */}
          <img src={bike1} className="cardimg" alt="cardimage" />
        </div>
        
        <div className="card-body">
          <h5 className="card-title">honda-cbr-1000rr</h5>
          <p className="card-text">₹ 90,055 Onwards</p>
          <a href="#" class="btn btn-primary">Check-on-road price</a>
        </div>
      </div>
    </div>
    
    <div className="col-3">
      <div className="card m-1" >
        <div className="text-center">
        <img src={bike2} className="cardimg" alt="cardimage" />
         
        </div>
        
        <div className="card-body">
          <h5 className="card-title">Yamaha-FZ-X-Metallic-Blue</h5>
          <p className="card-text">₹ 80,055 Onwards</p>
          <a href="#" class="btn btn-primary">Check-on-road price</a>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card m-1" >
        <div className="text-center">
        <img src={bike5} className="cardimg" alt="cardimage" />
         
        </div>
       
        <div className="card-body">
          <h5 className="card-title">Yamaha_FZ-X_5</h5>
          <p className="card-text">₹ 2,10,055 Onwards</p>
          <a href="#" class="btn btn-primary">Check-on-road price</a>
        </div>
      </div>
    </div>

    <div className="col-3">
      <div className="card m-1" >
        <div className="text-center">
        <img src={bike4} className="cardimg" alt="cardimage" />
         
        </div>
       
        <div className="card-body">
          <h5 className="card-title">harley-davidson-bike</h5>
          <p className="card-text">₹ 1,10,055 Onwards</p>
          <a href="#" class="btn btn-primary">Check-on-road price</a>
        </div>
      </div>
    </div>
  </div>
<br />
<br />
    </div>
  
      </>
  
  );
}

export default BikeListing;
