import React from "react";
import { Thead } from "./thead";
import "./table.scss";
import { Tbody } from "./tbody";
import { COLUMNS } from "./table-coins.constants";

type Props = {
  rows: Array<{ [key: string]: any }>;
  onOpenDetail: (id: string) => void;
};

export const TableCoins = ({ rows, onOpenDetail }: Props) => {
  return (
    <table className="table-coins">
      <Thead columns={COLUMNS} />
      <Tbody rows={rows} onOpenDetail={onOpenDetail} />
    </table>
  );
};
