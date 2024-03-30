

import robot from "../assets/images/robot-img.svg"
import  Button  from 'react-bootstrap/Button';

function HeroSection() {
  return (
    <div className='container pt-4'>
      <div className='row'>
        <div className='col col-lg-6 col-sm-12 p-4' >
            
            <h1 className='p-2'>LEARN EASE</h1>
            <h1 className='p-2'>YOUR STUDY COORDINATOR</h1>
            <h3 className='p-2'>AI Tutor for Students</h3>
            <h5 className='p-2 pb-4'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</h5>
            <Button type="submit">Get Started</Button>
        </div>
        <div className='col col-lg-6 col-sm-12' >
        <img
          height={450}
          className="d-block w-100"
          src={robot}
          alt="hero"
        />
        </div>
      </div>

    </div>

  );
}

export default HeroSection;