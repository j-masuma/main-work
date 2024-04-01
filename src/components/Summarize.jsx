import React from 'react'
import Navbars from './Navbar'
import { Button, Col, Container, Form } from 'react-bootstrap'

const Summarize = () => {
  return (
    <div>
        <Navbars/>
        <Container className='pt-5 mt-5'>
            <div className='text-center'>
               
               <Form.Floating className="mb-3 wrap">
                    <Form.Control
                    id="floatingInputCustom"
                    type="link"
                    placeholder="https://www.youtube.com"
                    />
                    <label htmlFor="floatingInputCustom">Add Link</label>
                </Form.Floating>
                <Button variant="success" size="lg">
                    Summarize
                </Button>
               
            </div>
            <div className='shadow p-4 mt-3 pb-5 mb-4'>
                <h4>Summary : </h4>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et doloremque tempora, dolore laudantium excepturi perspiciatis quos libero neque amet, repellendus rem consequatur quae accusantium at provident non, dolores pariatur.</p>
            </div>
        </Container>
    </div>
  )
}

export default Summarize
