import { Cryptocurrency } from '../entities/Cryptocurrency';

interface IUpdateReturn {
  bitcoin: string;
  dogecoin: string;
  ripple: string;
}

interface ICryptocurrencies {
  getMarketplace(): Cryptocurrency[];
  update(): Promise<IUpdateReturn>;
}

export { IUpdateReturn, ICryptocurrencies };
