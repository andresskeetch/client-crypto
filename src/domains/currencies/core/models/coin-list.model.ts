class CoinListModel {
  deserialize = (list: Array<any>) => {
    return list
      .map((item) => ({
        id: item.id,
        name: `${item.symbol} ${item.name}`,
        quantity: item.price_btc,
        priceUSD: `$${new Intl.NumberFormat().format(item.price_usd)}`,
        rank: item.rank,
        symbol: item.symbol,
        priceNumber: item.price_usd,
        percentChange24h: item.percent_change_24h,
        percentChange1h: item.percent_change_1h,
        percentChange7d: item.percent_change_7d,
        market: item.market_cap_usd,
      }))
      .sort((a, b) => {
        return Number(a.rank) - Number(b.rank);
      });
  };
}

export default new CoinListModel();
