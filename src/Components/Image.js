import React from 'react';
import '../Styling/CSS/ImageGroup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from '@material-ui/core/Zoom';
import Grow from '@material-ui/core/Grow'


export const Image = () => {
  return (
    <div class="wrapper">
      <img src="https://lastfm.freetls.fastly.net/i/u/ar0/892c0fb6c6a83ea7cda5e59670a73cf5.jpg" />
    </div>
 
  );
}