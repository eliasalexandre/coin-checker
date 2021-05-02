import React from 'react';

import { Container, Element } from './styles';

const Actives: React.FC = () => {
  return (
    <Container>
      <nav>
        <h3>Search a currency info</h3>

        <form action="#">
          <input type="search" placeholder="Ex: Bitcoin" />
        </form>
      </nav>

      <main>
        <div className="header">
          <span>Mercado</span>

          <button type="button">🧠 atualizar</button>
        </div>

        <ul>
          <Element>
            <div>
              😶
              <span>Bitcoin</span>
            </div>
            <div>
              <strong>274,049.090</strong>
            </div>
          </Element>

          <Element>
            <div>
              😶
              <span>Dogecoin</span>
            </div>
            <div>
              <strong>274,049.090</strong>
            </div>
          </Element>

          <Element>
            <div>
              😶
              <span>Etherium</span>
            </div>
            <div>
              <strong>274,049.090</strong>
            </div>
          </Element>
        </ul>
      </main>
    </Container>
  );
};

export default Actives;
