import React, { useState, useEffect } from 'react';
import parrot from "../assets/images/parrot.png";
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../assets/style/style.css';

const Signup = () => {
  const [text] = useTypewriter({
    words: ['with my Maths Assignment?', 'understand this complex passage?', 'explore more about python?'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 30,
  });

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [ageResult, setAgeResult] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  useEffect(() => {
    calculateAge();
  }, [selectedYear]); // Watch for changes in selectedYear

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - selectedYear;

    if (age >= 12) {
      setAgeResult("");
    } else {
      setAgeResult("You're not allowed to access the app.(10+)");
    }
  };

  return (
    <>
      <div className='row' style={{ backgroundColor:"rgb(198, 208, 211)"}}>
        <div className='col'>
          <div className='row' style={{ marginBottom: '-20px' }}>
            <h2 className="col animated-text" style={{ paddingLeft: '238px', paddingTop: '15px', fontWeight: "bold", fontSize: "50px", color: "green"}}>LearnEase</h2>
            <p style={{ paddingLeft: '248px', fontWeight: "normal", fontSize: "20px " ,color: "black"}}>Your Study Coordinator</p>
            <img className="col" src={parrot} alt="parrot" style={{ height: '300px', width: '-10px' }} />
          </div>
          <div className='row'>
            <h1 style={{ margin: '45px' , color: "black"}}> Hi, Can you help me {" "}
              <span style={{ fontWeight: "normal", color: "green" , fontSize: "30px"}}>
                {text}
              </span>
              <span style={{color:"darkgreen"}}> <Cursor /> </span>
            </h1>
          </div>
        </div>
        <div className='Signup col template d-flex justify-content-center align-items-center  vh-100 ms-auto' style={{ flexGrow: 1 }}>
          <div className='form_container p-3 rounded' >
            <form className='login-form-container p-5 rounded' style={{border: '1.5px ridge green',backgroundColor: 'rgba(0, 1, 2, 0.3)', backdropFilter: 'blur(5px)' }}>
              <h3 className='text-center text-white'>Sign Up</h3>
              <div className='mb-2 text-white'>
                <label htmlFor="fname">First Name</label>
                <input type="text" placeholder='Enter First Name' className='form-control'style={{ borderRadius: '20px' }} />
              </div>
              <div className='mb-2 text-white'>
                <label htmlFor="lname">Last Name</label>
                <input type="text" placeholder='Enter Last Name' className='form-control'style={{ borderRadius: '20px' }} />
              </div>
              <div className='mb-2 text-white'>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter Email' className='form-control' style={{ borderRadius: '20px' }}/>
              </div>
              <div className='mb-2 text-white'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' className='form-control' style={{ borderRadius: '20px' }}/>
              </div>
              <div className='mb-2 text-white '>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" placeholder='Enter Password Again' className='form-control' style={{ borderRadius: '20px' }}/>
              </div>
              <div className='mb-2 text-white'>
                <label htmlFor="dob">Select Birth Year:</label>
                <select id="dob" value={selectedYear} onChange={handleYearChange}>
                  {[...Array(new Date().getFullYear() - 1900 + 1)].map((_, index) => (
                    <option key={index} value={new Date().getFullYear() - index}>
                      {new Date().getFullYear() - index}
                    </option>
                  ))}
                </select>
              </div>
              <div id="ageResult" className="mb-2 text-white">
                {ageResult && <div>{ageResult}</div>}
              </div>
              <div className='d-grid mt-2 text-white'>
                <button type="submit" className='btn btn-success'style={{ borderRadius: '20px' }}>Sign Up</button>
              </div>
              <p className='text-end mt-2 text-white'>
                Already Registered? <Link to="/" className='ms-2'>Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
