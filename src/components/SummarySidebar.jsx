import React from 'react'
import { Form } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const SummarySidebar = () => {
  return (
    <div>
        <Container className=' pt-5 mt-5 '  style={{minHeight:'100vh'}}>
            <h3 className='p-3 text-success'>Generate Summary</h3>
            <Form.Floating className="mb-2 wrap">
                <Form.Control
                id="floatingInputCustom"
                type="link"
                placeholder="https://www.youtube.com"
                />
                <label htmlFor="floatingInputCustom">
                    Search
                    
                    </label>
                
            </Form.Floating>

            <div className='p-2 pt-4'>
                <h5 className='font-bold'>Summaries</h5>
                <div className='mt-4' >
                    <p className='p-2 mb-1 border rounded bg-secondary'>Lorem ipsum dolor sit amet . </p>
                    <p className='p-2 mb-1 border rounded bg-secondary'>Lorem ipsum dolor sit amet . </p>
                    <p className='p-2 mb-1 border rounded bg-secondary'>Lorem ipsum dolor sit amet . </p>
                </div>
            </div>
        </Container>
    </div>
  )
}




export default SummarySidebar

