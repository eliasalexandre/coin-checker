import React from 'react';

import { Container } from './styles';

const Actives: React.FC = () => {
  return (
    <Container>
      <nav>
        <h3>Search a currency info</h3>

        <form action="#">
          <input type="search" placeholder="Ex: Bitcoin" />
        </form>
      </nav>
    </Container>
  );
};

export default Actives;
