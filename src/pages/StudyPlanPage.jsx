import React, { useState } from 'react'
import Navbars from '../components/Navbar'
import StudyPlan from '../components/StudyPlan'
import plan from "../data/plan.json"
import { Button,  Container, Row } from 'react-bootstrap'

const StudyPlanPage = () => {
  const [showStudyPlan, setShowStudyPlan] = useState(false);

  const toggleStudyPlan = () => {
    setShowStudyPlan(!showStudyPlan);
  };
  return (
    <div>
      <Navbars/>
      <div className='pt-5 mt-5 pb-3 text-center'>
        {/* <h5>Generate a New Study Plan: </h5> */}
        <Button onClick={toggleStudyPlan} variant="primary" size='lg'> 
            {showStudyPlan ? "Create" : "Create"}
        </Button>
        {showStudyPlan && <StudyPlan plan={plan} />}
      </div>
      <Container className='pt-2'>
          <div className='p-2' style={{ }} >
              {
                plan.week_list.map((week, index)=>(
                  <Row className='rounded m-4' style={{backgroundColor:'#FAF9F6'}} >
                    <h4 className='p-3 text-center' style={{}}>Week {index+1}</h4>
                    <hr />
                    
                      <div className='d-flex justify-content-between'  >
                        {
                        week.day_list.map((day)=>(
                        
                          <div className='border rounded shadow p-2 mb-3 ' style={{backgroundColor:'lightblue'}} >
                                <h5 className='pb-1 text-center'>{day.day_name}</h5>
                                <h6 className=' text-center'>Study Hours: {day.study_hours}</h6>
                                <h6 className=' text-center'>Topics to Cover : </h6>
                                <hr />
                                        {  
                                          day.topics_to_cover.map((topic)=>(
                                            
                                            <ul>
                                              <li><b>{topic.topic_name} </b></li>
                                              <p>{topic.description}</p>
                                            </ul>
                                            
                                          ))}
                               
                          </div>
                            
                      
                      ))
                    }
                  </div>
                  </Row>
                ))
              }
            
          </div>
      </Container>
    </div>
  )
}

export default StudyPlanPage
