import React from "react";
import { TableCoins } from "components";
import DetailCoinModal from "./components/detail-coin-modal/detail-coin-modal";
import useGetCoins from "../../core/hooks/useGetCoins";
import "./converter.scss";

export const Converter = () => {
  const { data, onFilter, modal, onClickOpen } = useGetCoins();
  return (
    <section className="converter">
      <div>
        <h1>Listado de Mercado Criptografico</h1>
        <input
          placeholder="Moneda"
          type="text"
          onChange={(e) => onFilter(e.target.value)}
        />
        <TableCoins
          rows={data}
          onOpenDetail={(id: string) => onClickOpen(true, id)}
        />
      </div>
      {modal.isOpen && (
        <DetailCoinModal
          isOpen={modal.isOpen}
          id={modal.id}
          onClose={() => onClickOpen(false, "")}
        />
      )}
    </section>
  );
};
