import React from 'react';

interface Props {
  children: (JSX.Element | JSX.Element[]) | (number | string | string[]);
}

export const Table: React.FC<Props> = ({ children }) => (
  <table className="min-w-full divide-y divide-gray-500">{children}</table>
);

export const THead: React.FC<Props> = ({ children }) => (
  <thead className="bg-gray-900">{children}</thead>
);

export const TBody: React.FC<Props> = ({ children }) => (
  <tbody className="bg-gray-700 divide-y divide-gray-500">{children}</tbody>
);

export const Th: React.FC<Props> = ({ children }) => (
  <th
    scope="col"
    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
  >
    {children}
  </th>
);

export const Td: React.FC<Props> = ({ children }) => (
  <td className="px-6 py-2 whitespace-nowrap">{children}</td>
);
