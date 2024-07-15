import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Row, Col } from 'react-bootstrap';
import '../App.css';

const About = () => {
  return (
    <Container fluid className='about-section'>
     <h1>About us</h1>
     <p>Explore the services we offer to connect you with local rag pickers.</p>
    </Container>
  );
};

export default About;
