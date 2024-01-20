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
    </Container>
  );
};

export default Gavelister;
