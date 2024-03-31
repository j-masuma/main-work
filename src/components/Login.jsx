import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/style.css';

const Login = () => {
  return (
    <div className='col login-container d-flex flex-column justify-content-center 
    align-items-center vh-100' style={{ backgroundColor:"rgb(198, 208, 211)" }}>
      <div >
        <div className='text-center'>
          <h2 className="animated-text" style={{ fontWeight: "bold", fontSize: "50px", color: "green" }}>LearnEase</h2>
          <p style={{ fontWeight: "20px", fontSize: "20px", color: "black" }}>Your Study Coordinator</p>
        </div>
        <form className='login-form-container p-5 rounded' style={{border: '1.5px ridge green',backgroundColor: "rgb(139, 143, 145)", backdropFilter: 'blur(5px)' }}>
          <h3 className='text-center text-white'>Sign In</h3>
          <div className='mb-2 text-white'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' style={{ borderRadius: '20px' }}/>
          </div>

          <div className='mb-2 text-white'>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' style={{ borderRadius: '20px' }}  className='form-control' />
          </div>
          <div className='mb-2'>
            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
            <label htmlFor="check" className="custom-input-label ms-2 text-white">Remember Me</label>
          </div>
          <div className='d-grid'>
            <button className='btn btn-success' style={{ borderRadius: '20px' }}>Sign In</button>
          </div>
          <p className='text-end mt-2 text-white'>
            Forgot <a href="#signup">Password?</a> <Link to="/signup" className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
