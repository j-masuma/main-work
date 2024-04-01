import React, { useState } from 'react'
import Navbars from '../components/Navbar'
import StudyPlan from '../components/StudyPlan'
import plan from "../data/plan.json"
import { Button, Col, Container, Row } from 'react-bootstrap'

const StudyPlanPage = () => {
  const [showStudyPlan, setShowStudyPlan] = useState(false);

  const toggleStudyPlan = () => {
    setShowStudyPlan(!showStudyPlan);
  };
  return (
    <div>
      <Navbars/>
      <div className='pt-5 mt-5 pb-3 text-center'>
        <h5>Generate a New Study Plan: </h5>
        <Button onClick={toggleStudyPlan} variant="success">
            {showStudyPlan ? "Create" : "Show Study Plan"}
        </Button>
        {showStudyPlan && <StudyPlan plan={plan} />}
      </div>
      <Container className='pt-2'>
          <div className='shadow p-2' style={{background:"#EEEEEE" }} >
              {
                plan.week_list.map((week, index)=>(
                  <Row className='rounded shadow m-4' style={{background:"#05192d", color:'white' }}>
                    <h4 className='p-3 ' style={{color:'#03ef62'}}>Week {index+1}</h4>
                    <hr />
                    {
                      week.day_list.map((day)=>(
                        <div>
                        <h5 className='pb-2'>{day.day_name}</h5>
                        <h6>Study Hours: {day.study_hours}</h6>
                        <h6>Topics to Cover : </h6>
                        <Row>
                            
                                
                                 {  
                                  day.topics_to_cover.map((topic)=>(
                                    <Col lg={3} md={4} sm={6} >
                                    <ul>
                                      <li><b>{topic.topic_name} : </b></li>
                                      <p>{topic.description}</p>
                                    </ul>
                                    </Col>
                                  ))}
                                
                              
                        </Row>
                            
                            
                      </div>
                      ))
                    }
                  
                  </Row>
                ))
              }
            
          </div>
      </Container>
    </div>
  )
}

export default StudyPlanPage
