

import { Link } from "react-router-dom";
import robot from "../assets/images/robot-img.svg"
import  Button  from 'react-bootstrap/Button';

function HeroSection() {
  return (
    <div className='container pt-4 mt-4'>
      <div className='row pt-4'>
        <div className='col col-lg-6 col-sm-12 p-4 ' >
            
            <h1 className='p-1 fw-bold' style={{fontSize:'80px', color:'#4074D2'}}><span className="text-dark">LEARN</span> EASE</h1>
            <h1 className='p-1 fw-bold' style={{fontSize:'48px'}}>YOUR STUDY COORDINATOR</h1>
            <h3 className='p-2'>AI Tutor for Students</h3>
            <h5 className='p-2 pb-4'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</h5>
            <Button as={Link} to="/signup">Get Started</Button>
        </div>
        <div className='col col-lg-6 col-sm-12' >
        <img
          height={450}
          className="d-block w-100 pt-4"
          src={robot}
          alt="hero"
        />
        </div>
      </div>

    </div>

  );
}

export default HeroSection;