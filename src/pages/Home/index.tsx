import React, { useState } from 'react';

import configProfile from '../../config/profile.json';
import { Container, Element } from './styles';

interface ICryptocurrencies {
  coin: string;
  nickname: string;
  price: number;
  has: number;
  updated_at: Date;
}

const Actives: React.FC = () => {
  const [data, setData] = useState<ICryptocurrencies[]>(() => {
    const market = configProfile.marketplace as ICryptocurrencies[];

    return market;
  });

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
          {data.map((crypto) => (
            <Element key={crypto.coin}>
              <div id="coin-h">
                😶
                <span>{crypto.coin}</span>
              </div>
              <div id="coin-b">
                <strong>{crypto.price}</strong>
              </div>
            </Element>
          ))}
        </ul>
      </main>
    </Container>
  );
};

export default Actives;
