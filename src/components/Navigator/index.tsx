import React from 'react';

import { Container } from './styles';

const Navigator: React.FC = () => {
  return (
    <Container>
      <button className="currentActive" id="home" type="button">
        Home navigator
      </button>

      <div className="circle"></div>

      <button id="actives" type="button">
        Profile navigator
      </button>
    </Container>
  );
};

export default Navigator;
