import CoinDetailProvider from "../providers/coin-detail.provider";

class CoinListRepository {
  coinDetailProvider;
  constructor() {
    this.coinDetailProvider = CoinDetailProvider;
  }
  get = async (id: string) => await this.coinDetailProvider.get(id);
}

export default new CoinListRepository();
