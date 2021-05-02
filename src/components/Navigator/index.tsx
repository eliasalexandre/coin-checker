import React from 'react';

import { Container } from './styles';

const Navigator: React.FC = () => {
  return (
    <Container>
      <button id="home" type="button">
        Home navigator
      </button>
      <button id="actives" type="button">
        Profile navigator
      </button>
    </Container>
  );
};

export default Navigator;
