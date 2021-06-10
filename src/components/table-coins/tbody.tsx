import React from "react";

type Props = {
  rows: Array<{ [key: string]: any }>;
  onOpenDetail: (id: string) => void;
};

export const Tbody = ({ rows, onOpenDetail }: Props) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr
          title="Click para mas detalles"
          onClick={() => onOpenDetail(row.id)}
        >
          <td>{row.rank}</td>
          <td>
            <div>
              <img
                src={`https://cryptoicons.org/api/color/${row.symbol.toLowerCase()}/600`}
              />

              {row.name}
            </div>
          </td>
          <td>{row.priceUSD}</td>
          <td className="quantity">{row.quantity}</td>
        </tr>
      ))}
    </tbody>
  );
};
