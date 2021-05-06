import {
  ICryptocurrencies,
  IUpdateReturn,
} from '../../repositories/ICryptocurrencies';

class UpdateCryptocurrenciesUseCase {
  constructor(private cryptocurrencies: ICryptocurrencies) {}

  async execute(): Promise<IUpdateReturn> {
    return this.cryptocurrencies.update();
  }
}

export { UpdateCryptocurrenciesUseCase };
