import React from "react";

type Props = {
  columns: Array<{ id: string; label: string }>;
};

export const Thead = ({ columns }: Props) => {
  return (
    <thead>
      <tr>
        {columns.map(({ id, label }) => (
          <th key={id}>{label}</th>
        ))}
      </tr>
    </thead>
  );
};
