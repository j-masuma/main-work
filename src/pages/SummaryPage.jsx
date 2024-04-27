import React from 'react'
import Navbars from '../components/Navbar'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap/esm'
import SummarySidebar from '../components/SummarySidebar'
import {Summarize} from '../components/Summarize'


const SummaryPage = () => {
  return (
    <div>
      <Navbars/>
      <Row>
        <Col lg={3} md={4} >
            <SummarySidebar/>
        </Col>
        <Col lg={8} md={7}> 
            <Summarize/>
            {/* <SummaryResult/>
            <SummaryLoading/> */}
        </Col>
      </Row>
    </div>
  )
}

export default SummaryPage
