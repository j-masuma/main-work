import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import faqimg from "../assets/images/faqs-img.svg"
const Faqs = () => {
  return (
    <Container >
        <Row className='p-4'>
            <Col lg={6} md={6} sm={12}>
                <h1>FAQS</h1>
                <div className='d-flex justify-content-between'> 
                    <p>How does LearnEase Works?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                    </svg>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'> 
                    <p>Is LearnEase free?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                    </svg>
                </div>
                <hr/>
                <div className='d-flex justify-content-between'> 
                    <p>How does LearnEase Works?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                         <path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                    </svg>
                </div>
                <hr/>
            </Col>
            <Col lg={6} md={6} sm={12}>
                <img
                    height={350}
                    className="d-block w-100"
                    src={faqimg}
                    alt="hero"
                />
            </Col>
        </Row>
    </Container>
  )
}

export default Faqs;
