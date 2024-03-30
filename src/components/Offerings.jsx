import React from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import roboImg from "../assets/images/roboImg.svg";
import notificationImg from "../assets/images/notificationImg.svg";
import toneImg from "../assets/images/toneImg.svg";
import libraryImg from "../assets/images/libraryImg.svg"

const Offerings = () => {
    const cardsInfo=[
        {
            image : roboImg,
            title : "Chat with AI",
            description : "Consider LearnEase as your study Coordinator. Feel Free to ask any question relaed to study."
        },
        {
            image : toneImg,
            title : "Personalize Tone",
            description : "Get personalize chat tones."
        },
        {
            image : libraryImg,
            title : "Personal Library",
            description : "No need to worry about studies. Manage your own personal library."
        },
        {
            image : notificationImg,
            title : "Get Notified",
            description : "Set study reminder whenever you wants."
        }
    ]
  return (
    
    <Container>
            <Row className="justify-content-center mt-4">
                {cardsInfo.map((card, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="m-4 ">
                        <Card className='text-center shadow-lg pt-2 d-flex flex-column h-100' style={{ borderRadius: '10px', backgroundColor: '#ADD8E6' }}>
                            <Card.Img variant="top" height={150} width={150} src={card.image} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text className='p-4 pt-2'>
                                    {card.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
   
  )
}

export default Offerings
