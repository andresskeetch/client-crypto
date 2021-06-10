import { useQuery } from "react-query";
import CoinsDetailRepository from "../repositories/coin-detail.repository";

const useGetDetail = (id: string) => {
  const {
    isLoading,
    error,
    data = {
      name: "",
      priceNumber: 0,
      quantity: 0,
      priceUSD: "",
      percentChange24h: "",
      percentChange1h: "",
      percentChange7d: "",
      market: "",
    },
  } = useQuery(["getDetail", id], ({ queryKey }) => {
    return CoinsDetailRepository.get(queryKey[1]);
  });

  return { isLoading, error, data };
};
export default useGetDetail;
