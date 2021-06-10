import ApiProvider from "libs/providers/api.provider";
import { GET_LIST_COINS } from "./uri.provider";
import CoinListModel from "../models/coin-list.model";

class CoinListProvider {
  apiProvider;
  constructor() {
    this.apiProvider = new ApiProvider(GET_LIST_COINS);
  }
  get = async () => {
    const { data } = await this.apiProvider.get({ url: GET_LIST_COINS });
    return CoinListModel.deserialize(data.data);
  };
}

export default new CoinListProvider();
