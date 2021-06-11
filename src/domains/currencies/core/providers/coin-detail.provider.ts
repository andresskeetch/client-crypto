import ApiProvider from "libs/providers/api.provider";
import { GET_DETAIL_COIN } from "./uri.provider";
import CoinListModel from "../models/coin-list.model";

class CoinDetailProvider {
  apiProvider;
  constructor() {
    this.apiProvider = new ApiProvider(GET_DETAIL_COIN);
  }
  get = async (id: string) => {
    const { data } = await this.apiProvider.get({
      url: `${GET_DETAIL_COIN}/${id}`,
    });
    return CoinListModel.deserialize([data])[0];
  };
}

export default new CoinDetailProvider();
