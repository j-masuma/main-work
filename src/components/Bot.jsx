import React from 'react'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap'
import chat from "../assets/images/chatImg.svg"
import flashcards from "../assets/images/flashcard.svg"
import quizImg from "../assets/images/quizImg.svg";
import ideaImg from "../assets/images/idea.svg";
import pdfImg from "../assets/images/pdfImg.svg"
function Bot({showModal}) {
    const botInfo=[
        {
            image:chat,
            title:"Tutor Bot"
        },
        {
            image:pdfImg,
            title:"Chat Pdf"
        },
        {
            image:chat,
            title:"Detective"
        },
        {
            image:ideaImg,
            title:"Summerize"
        },
        {
            image:quizImg,
            title:"Quizes"
        },
        {
            image:flashcards,
            title:"FlashCard"
        }
        
    ]
  return (
    <Modal show={showModal} onHide={() => {}}>
        <Modal.Header closeButton>
            <Modal.Title>Bot Features</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
            <Container>
                <Row>
                    {showModal && botInfo.map((bot, index) => (
                        <Col key={index} lg={3} md={6} sm={12} className='m-2 text-center'>
                            <Card className='shadow' style={{ width: '8rem',  height:"10rem"}}>
                                <Card.Img className='pt-2' variant="top" width={80} height={80} src={bot.image} /> 
                                <Card.Body >
                                    <Card.Title className='pb-2'>
                                        {bot.title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Modal.Body>
        
    </Modal>
  )
}

export default Bot
