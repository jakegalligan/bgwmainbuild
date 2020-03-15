import React from 'react';
import '../Styling/CSS/TitleBar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppBar from '@material-ui/core/AppBar';
import Grow from '@material-ui/core/Grow'

export const TitleBar = () => {
  return (
    <Container class="box">
    <Grow in={true} timeout={1000}>
    <Row>
    <Col>
    <h1 class="main">
    <span class="black">black/</span><span class="gray">gray/</span><span class="white">white</span>
    </h1>
    </Col>
    <Col>
    music
    </Col>
    <Col>
    sports
    </Col>
    <Col>
    culture
    </Col>
    </Row>
    </Grow>
    </Container>
  );
}