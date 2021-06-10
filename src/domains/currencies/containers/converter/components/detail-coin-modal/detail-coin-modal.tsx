import React, { useEffect, useState } from "react";
import { ModalCustom } from "components";
import useGetDetail from "../../../../core/hooks/useGetDetail";
import "./detail-coin-modal.scss";

const DetailCoinModal = ({
  isOpen,
  id,
  onClose,
}: {
  isOpen: boolean;
  id: string;
  onClose: () => void;
}) => {
  const { data } = useGetDetail(id);
  const [value, setValue] = useState({ currency: 1, total: 0 });
  console.log(data);
  useEffect(() => {
    setValue({
      currency: Number(data.quantity),
      total: Number(data.quantity) * Number(data.priceNumber),
    });
  }, [data]);

  return (
    <ModalCustom
      isOpen={isOpen}
      background=""
      shouldCloseOnOverlayClick={false}
    >
      <div className="detail-coin-modal">
        <button
          className="detail-coin-modal-close"
          type="button"
          aria-label="Cerrar"
          data-testid="close-button"
          onClick={onClose}
        />
        <h1>Moneda {data.name}</h1>
        <h2>
          {Number(data.quantity)} {data.name} es igual a {data.priceUSD} Dolares
        </h2>
        <div>
          <div>
            <input
              type="text"
              value={value.currency}
              onChange={(e) =>
                setValue({
                  currency: Number(e.target.value),
                  total: Number(e.target.value) * Number(data.priceNumber),
                })
              }
            />
            <label>{data.name}</label>
          </div>
          <div>
            <input value={value.total} type="text" disabled />
            <label>Dolares</label>
          </div>
        </div>
        <div>
          <label>Percentaje Cambio 24H:{data.percentChange24h} </label>
          <label>Percentaje Cambio 1H:{data.percentChange1h} </label>
          <label>Percentaje Cambio 7D:{data.percentChange7d} </label>
          <label>Market {data.market} </label>
        </div>
      </div>
    </ModalCustom>
  );
};

export default DetailCoinModal;
