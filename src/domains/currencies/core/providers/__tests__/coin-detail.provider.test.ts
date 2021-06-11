import ApiProvider from "../../../../../libs/providers/api.provider";
import CoinDetailProvider from "../coin-detail.provider";
const mock = [
  {
    id: "257",
    symbol: "ADA",
    name: "Cardano",
    nameid: "cardano",
    rank: 5,
    price_usd: "1.55",
    percent_change_24h: "-3.71",
    percent_change_1h: "0.20",
    percent_change_7d: "-16.01",
    market_cap_usd: "40306686607.56",
    volume24: "3346659290.29",
    volume24_native: "2152721515.68",
    csupply: "25927070538.00",
    price_btc: "0.000044",
    tsupply: "31112483745",
    msupply: "45000000000",
  },
];

jest.mock("../../../../../libs/providers/api.provider", () => {
  return jest.fn().mockImplementation(() => {
    return { get: () => ({ data: mock }) };
  });
});

describe("CoinDetailProvider", () => {
  test("should get info", async () => {
    const result = await CoinDetailProvider.get("1");

    expect(result).toStrictEqual({
      id: "257",
      market: "40306686607.56",
      name: "ADA Cardano",
      percentChange1h: "0.20",
      percentChange24h: "-3.71",
      percentChange7d: "-16.01",
      priceNumber: "1.55",
      priceUSD: "$1.55",
      quantity: "0.000044",
      rank: 5,
      symbol: "ADA",
    });
  });
});
