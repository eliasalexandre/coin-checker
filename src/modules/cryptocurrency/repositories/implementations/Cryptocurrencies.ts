import puppeteer from 'puppeteer';

import { Cryptocurrency } from '../../entities/Cryptocurrency';
import { ICryptocurrencies, IUpdateReturn } from '../ICryptocurrencies';

class Cryptocurrencies implements ICryptocurrencies {
  private marketplace: Cryptocurrency[];

  constructor() {
    this.marketplace = [
      {
        coin: 'Bitcoin',
        nickname: 'BTC',
        price: '00,00',
        has: '123.34',
        updated_at: new Date(),
      },
      {
        coin: 'Doge coin',
        nickname: 'DOGE',
        price: '00,00',
        has: '30.79',
        updated_at: new Date(),
      },
      {
        coin: 'Ripple',
        nickname: 'XRP',
        price: '00,00',
        has: '100.00',
        updated_at: new Date(),
      },
    ];
  }

  async update(): Promise<IUpdateReturn> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://coinmarketcap.com/pt-br/');

    const cryptoList = await page.evaluate(() => {
      const bitcoin = document.querySelector(
        'td div.price___3rj7O a'
      ) as Element;

      return {
        bitcoin: bitcoin.innerHTML,
        dogecoin: bitcoin.innerHTML,
        ripple: bitcoin.innerHTML,
      };
    });
    await browser.close();

    this.marketplace.map((crypto) => {
      switch (crypto.nickname) {
        case 'BTC':
          Object.assign(crypto, {
            price: cryptoList.bitcoin,
          });
          break;

        case 'DOGE':
          Object.assign(crypto, {
            price: cryptoList.dogecoin,
          });
          break;

        case 'XRP':
          Object.assign(crypto, {
            price: cryptoList.ripple,
          });
          break;

        default:
          break;
      }

      return crypto;
    });

    this.marketplace.push();

    return cryptoList;
  }
}

export { Cryptocurrencies };
