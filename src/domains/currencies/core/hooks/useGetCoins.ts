import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import CoinsListRepository from "../repositories/coin-list.repository";

const useGetCoins = () => {
  const {
    isLoading,
    error,
    data = [],
  } = useQuery("getCoins", CoinsListRepository.get);

  const [coins, setCoins] = useState(data);
  const [modal, setOpen] = useState({ isOpen: false, id: "" });

  useEffect(() => {
    setCoins(data);
  }, [data]);

  const onFilter = (filter: string) => {
    const dataFiltered = data.filter((item) =>
      item.name.toUpperCase().includes(filter.toUpperCase())
    );
    setCoins(dataFiltered);
  };

  const onClickOpen = (open: boolean, id: string) => {
    setOpen({ isOpen: open, id });
  };

  return { isLoading, error, data: coins, onFilter, modal, onClickOpen };
};
export default useGetCoins;
