import React from 'react'
import { Container } from 'react-bootstrap'
import libImage from '../assets/images/libraryImg.svg'
const Library = () => {
  return (
    <Container className='mt-5 '>
        
        <h1 className=' pb-4'>Library</h1>
        <div className='d-flex align-items-center'>
            <img src={libImage} width={150} height={150} alt="Library" />
            <button className='d-inline-flex align-items-center border rounded p-3 justify-content-end ml-5 shadow' style={{ backgroundColor: 'lightgreen' }}>
           
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
           
            </button>
        </div>
        
    </Container>
  )
}

export default Library
