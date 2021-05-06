import puppeteer from 'puppeteer';

/**
 * @return Promise<void>
 * - pegar o valor atual das moedas
 * - atualizar no objeto cryptocurrencies
 */

interface IUpdateReturn {
  bitcoin: string;
  dogecoin: string;
  ripple: string;
}

async function update(): Promise<IUpdateReturn> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://coinmarketcap.com/pt-br/');

  const cryptoList = await page.evaluate(() => {
    const bitcoin = document.querySelector('td div.price___3rj7O a') as Element;

    return {
      bitcoin: bitcoin.innerHTML,
      dogecoin: bitcoin.innerHTML,
      ripple: bitcoin.innerHTML,
    };
  });

  await browser.close();

  return cryptoList;
}

export { update };
