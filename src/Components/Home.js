import React from 'react';
import {MyButton as Button } from '../Styling/MaterialUI/styledComponents';
import {MyBUtton2 as Butt} from '../Styling/MaterialUI/styledComponents';
import {Test} from "./ImageGroup"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export const Home = () => {
  return (
    <div className="App">
    <h1>
    What UP
    </h1>
    <Button>
    Click like
    </Button>
    <Butt>
    click this mfer
    </Butt>
    <Container>
    <Row>
    <Col>
    <Test />
    </Col>
    <Col>
    <h1>hi</h1>
    </Col>
    </Row>
    </Container>
    </div>
  );
}

