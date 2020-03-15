import React from 'react';
import '../Styling/CSS/ImageGroup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow'


export const Jumbotron = () => {
  return (
    <Container>
    <Row>
    <Col class="jt">
    <img class="wide" src="https://lastfm.freetls.fastly.net/i/u/ar0/892c0fb6c6a83ea7cda5e59670a73cf5.jpg"/>
    <div class="center">Center</div>
    </Col>
    <Col class="jt">
     <img class="wide" src="https://lastfm.freetls.fastly.net/i/u/ar0/892c0fb6c6a83ea7cda5e59670a73cf5.jpg"/>
    <div class="center">Center</div>
    </Col>
    <Col class="jt">
     <img class="wide" src="https://lastfm.freetls.fastly.net/i/u/ar0/892c0fb6c6a83ea7cda5e59670a73cf5.jpg"/>
    <div class="center">Center</div>
    </Col>
    </Row>
    </Container>
 
  );
}