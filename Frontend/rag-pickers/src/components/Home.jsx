import React from 'react';
import Container from 'react-bootstrap/Container'
import {Row,Col} from 'react-bootstrap'
import ragpickersimg from '../assets/ragpickers.jpg'
import { Typewriter } from 'react-simple-typewriter';
import '../App.css'
const Home = () => {
  return (
    <Container fluid className='home-section'>
      <h1 className='m-5 fs-1 p-2 text-center' style={{color:"white",fontFamily: "sans-serif",fontWeight:"700"}}>
          <Typewriter
              words={['Welcome to our platform local rag pickers.']}
              loop={false}
              cursor
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1000}
            />
         </h1>
      <Row>
        <Col sm={12} lg={6} md={6}>
         <p className='fs-5 fw-4 p-2 m-3 text-light' style={{fontFamily:"sans-serif"}}>We connect you with local rag pickers who help in recycling and managing waste responsibly.
         Our mission is to create a cleaner, greener, and more sustainable environment by providinga reliable 
         platform that bridges the gap between waste generators and rag pickers.</p>
         <p className='fs-5 fw-4 p-2 m-3 text-white' style={{fontFamily:"sans-serif"}}>Our mission At RagPickers, we are committed to bridging the gap between waste generators and rag pickers. Our platform provides a reliable and efficient way for individuals and businesses to schedule waste pickups, track the status in real-time, and contribute to environmental conservation efforts. We believe in empowering rag pickers by providing them with opportunities, training, and recognition for their invaluable work.</p>
        </Col>
        <Col sm={12} lg={6} md={6} className='hero_section'>
          <img  className='rounded hero_image'
             src={ragpickersimg} 
             style={{maxHeight:"100vh",maxWidth:"100%"}}
             alt='Ragpickers image'/>
        </Col>
      </Row>
      <p className='m-4 p-3 text-center text-white'>© 2024 RagPickers. All rights reserved.</p>
    </Container>
  );
};

export default Home;
