import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import chat from "../assets/images/chatImg.svg"
import flashcards from "../assets/images/flashcard.svg"
import quizImg from "../assets/images/quizImg.svg";
import ideaImg from "../assets/images/idea.svg";
import pdfImg from "../assets/images/pdfImg.svg"
import { Link } from 'react-router-dom';
const BotFeatures = () => {
    const botInfo=[
        {
            image:chat,
            title:"Tutor Bot",
            link:'/tutor-bot'
        },
        {
            image:pdfImg,
            title:"Chat Pdf",
            link:'/chatwithpdf'
        },
        {
            image:chat,
            title:"Detective",
            link:'detective'
        },
        {
            image:ideaImg,
            title:"Summarize",
            link:'summerize'
        },
        {
            image:quizImg,
            title:"Quizes",
            link:'/quizzes'
        },
        {
            image:flashcards,
            title:"FlashCard",
            link:'/flashcards'
        }
        
    ]
  return (
    <div className='mt-5'>
         <Container className='mt-5 pt-5'>
                <Row className='d-flex justify-content-around'>
                    <h2 className='p-3 text-center'>BOTS</h2>
                    { botInfo.map((bot, index) => (
                        <Col key={index} lg={3} md={5} sm={12} className='m-2 text-center'>
                            <Link to={bot.link} className="text-decoration-none">
                                <Card className='shadow' style={{ width: '16rem',  height:"12rem" }}>
                                    <Card.Img className='pt-3' variant="top" width={80} height={80} src={bot.image} /> 
                                    <Card.Body >
                                        <Card.Title className='p-2'>  
                                            <Button variant="outline-success">{bot.title} </Button>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                                </Link> 
                        </Col>
                    ))}
                </Row>
            </Container>
    </div>
  )
}

export default BotFeatures
