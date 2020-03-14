import React from 'react';
import '../Styling/CSS/ImageGroup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export const Test = () => {
  return (
    <div class="wrapper">
      <img class="image-left" src="https://lastfm.freetls.fastly.net/i/u/ar0/892c0fb6c6a83ea7cda5e59670a73cf5.jpg" />
      <img class="image-bottom" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F09%2Flil-keed-saliva-single-stream-01.jpg?q=75&w=800&cbr=1&fit=max" />
      <img class="image-right" src="https://i1.sndcdn.com/artworks-000530965530-vfpckn-t500x500.jpg" />
      <div class="content"></div>
    </div>
 
  );
}