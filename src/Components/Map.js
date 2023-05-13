import React from 'react';
import OpenStreetMapComponent from './mapComponent';
import { Container } from 'react-bootstrap';

const MapLocations = () => {
 

  return (
    <Container >
      <h1 className='mt-5 mb-5'>Kart</h1>
      <OpenStreetMapComponent />
    </Container>
  );
}


export default MapLocations;