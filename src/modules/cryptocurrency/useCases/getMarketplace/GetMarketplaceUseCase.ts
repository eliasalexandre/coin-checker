import { Cryptocurrency } from '../../entities/Cryptocurrency';
import { ICryptocurrencies } from '../../repositories/ICryptocurrencies';

class GetMarketplaceUseCase {
  constructor(private cryptocurrencies: ICryptocurrencies) {}

  execute(): Cryptocurrency[] {
    return this.cryptocurrencies.getMarketplace();
  }
}
export { GetMarketplaceUseCase };
