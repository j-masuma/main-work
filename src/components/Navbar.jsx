

import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton,Nav, Navbar, } from 'react-bootstrap';
import Bot from './Bot';
import { useState } from 'react';
import Logo from "../assets/images/parrot.png";


function Navbars(){
   
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    
    return(
        <Navbar expand="lg" className=" p-2 " fixed="top" style={{backgroundColor:"lightgreen"}}>
      
            <Navbar.Brand href="#home">
                <div className='d-flex'>
                    <img src={Logo} width={30} height={30} alt='Logo'/>
                    <h4>LearnEase</h4>
                    
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto text-center">
                   
                    <Nav.Link href="/">DASHBOARD</Nav.Link>
                    <Nav.Link to="/monitor-progress" href="#link">MONITOR PROGRESS</Nav.Link>
                    <Nav.Link to="/study-plan-page" href="/study-plan-page" >STUDY PLANS</Nav.Link>
                    <Nav.Link href="/library-page">LIBRARY</Nav.Link>
                    <Nav.Link  onClick={handleShowModal}>BOTS</Nav.Link>
                        
                    <Bot showModal={showModal} handleCloseModal={handleCloseModal}/>
        
                </Nav>   
            </Navbar.Collapse>
            <Nav className="me-auto">
                        
                <DropdownButton 
                className=''
                variant="secendary" 
                title={
                    <div className='d-inline-flex align-items-center border rounded-circle overflow-hidden fixed' style={{ width: '35px', height: '35px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                        </svg>

                    </div>}>

                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                </DropdownButton>
            </Nav>
        
        </Navbar>
       
    );
}

export default Navbars;
