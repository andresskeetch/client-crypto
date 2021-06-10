import CoinListProvider from "../providers/coin-list.provider";

class CoinDetailRepository {
  coinListProvider;
  constructor() {
    this.coinListProvider = CoinListProvider;
  }
  get = async () => await this.coinListProvider.get();
}

export default new CoinDetailRepository();
