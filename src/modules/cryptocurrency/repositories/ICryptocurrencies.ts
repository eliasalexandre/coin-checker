interface IUpdateReturn {
  bitcoin: string;
  dogecoin: string;
  ripple: string;
}

interface ICryptocurrencies {
  update(): Promise<IUpdateReturn>;
}

export { IUpdateReturn, ICryptocurrencies };
