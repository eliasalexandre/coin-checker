import React from 'react';

import { Container, Element } from './styles';

const Actives: React.FC = () => {
  return (
    <Container>
      <nav>
        <span>SUBTOTAL</span>
        <h2>R$ 279,33</h2>
      </nav>

      <main>
        <div className="header">
          <span>Ativos</span>

          <button type="button">🧠 atualizar</button>
        </div>

        <ul>
          <Element>
            <div id="coin-h">
              😶
              <span>BRL</span>
            </div>
            <div id="coin-b">
              <strong>100,00</strong>
            </div>
          </Element>

          <Element>
            <div id="coin-h">
              😶
              <span>Dogecoin</span>
            </div>
            <div id="coin-b">
              <strong>70,00</strong>
            </div>
          </Element>

          <Element>
            <div id="coin-h">
              😶
              <span>Bitcoin</span>
            </div>
            <div id="coin-b">
              <strong>109,00</strong>
            </div>
          </Element>
        </ul>
      </main>
    </Container>
  );
};

export default Actives;
