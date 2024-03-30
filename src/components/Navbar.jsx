
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, DropdownButton, Modal,Nav } from 'react-bootstrap';
import Bot from './Bot';
import { useState } from 'react';
import Logo from "../assets/images/parotimg.svg";

function Navbars(){
   
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    
    return(
        
       
      
            <Nav className="me-auto justify-content-between bg-white p-4" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                <div className='d-flex'>
                    <img src={Logo} width={30} height={30} alt='Logo'/>
                    <h4>LearnEase</h4>
                    
                </div>
                <div>
                    <Nav className="me-auto" >
                        <Nav.Link className='text-black pr-4' as={Link} to="/dashboard"  href="study-plans" >DASHBOARD</Nav.Link>
                        <Nav.Link className='text-black' as={Link} to="/" href="#home">MONITOR PROGRESS</Nav.Link>
                        <Nav.Link className='text-black' as={Link} to="/study-plans" href="study-plans" >STUDY PLAN</Nav.Link> 
                        <Nav.Link className='text-black' as={Link} to="/library"  href="library" >LIBRARY</Nav.Link>
                        <Nav.Link className='text-black' onClick={handleShowModal}>BOT</Nav.Link>

                        <Modal show={showModal} onHide={handleCloseModal}>
                            
                            
                            <Bot showModal={showModal}/>
                        
               
                    </Modal>

                    </Nav>
                </div>
                <div className='' >
                    <Nav className="me-auto">
                        
                        <DropdownButton 
                        variant="secendary" 
                        title={
                            <div className='d-inline-flex align-items-center border rounded-circle overflow-hidden' style={{ width: '40px', height: '40px' }}>
                                <img src={Logo} alt="JM" />

                            </div>}>
                            <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                        </DropdownButton>
                                            
                    </Nav>
                </div>

            </Nav>
           
    );
}

export default Navbars;
