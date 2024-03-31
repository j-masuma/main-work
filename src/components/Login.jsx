import React from 'react'
import { Button, Card, Container, FloatingLabel, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className='pt-3 text-center'>
            <h2 className="animated-text" style={{ fontWeight: "bold", fontSize: "50px", color: "green" }}>LearnEase</h2>
            <p style={{ fontWeight: "20px", fontSize: "16px"}}>Your Study Coordinator</p>                
        </div>
        <Container fluid className='d-flex align-items-center justify-content-center text-center '>
                            <Card className=' shadow' style={{}}>
                                <Card.Body className='px-5 '>
                                <h6 className="text-uppercase text-center p-4">Sign In</h6>
                                <Form>
                                
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                        >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                                <Form.Control type="password" placeholder="Password" />
                                            </FloatingLabel>
                                    
                                    
                                    <Button className='m-3 w-100 ' variant='success' size='lg'>Register</Button>
                                    <p className=' ' style={{fontSize:'12px'}}>
                                        Don't have account? 
                                        <Link to="/signup" className='ms-2'>Sign up</Link>
                                    </p>
                                    <p className=' ' style={{fontSize:'12px'}}>   
                                        <Link to="/" className='ms-2'>Forget Password</Link>
                                    </p>
                                </Form>

                                </Card.Body>
                            </Card>
        </Container>
    </div>
  )
}

export default Login
