import React from 'react';
import { Container } from 'react-bootstrap';

const Gavelister = () => {
  return (
    <Container>
      <h1>Gavelister</h1>
      <p className="pt-5">
        Gaveliste på{' '}
        <a href="https://www.tilbords.no/bryllup/endre-onskeliste?wishListId=134253">
          Tilbords
        </a>
      </p>
      <p>
        Pengegaver kan sendes til Vipps-nummer
        <span className="font-weight-bold"> 90811303</span> eller til
        kontonummer
        <span className="font-weight-bold"> 1226.94.38558</span>. Merk gjerne
        med "bryllupsgave".
      </p>
    </Container>
  );
};

export default Gavelister;
