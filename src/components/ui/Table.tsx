import { ReactNode } from 'react';

interface TableProps {
  children: ReactNode | (number | string | string[]);
}

export const Table: React.FC<TableProps> = ({ children }) => (
  <table className="min-w-full divide-y divide-gray-500">{children}</table>
);

export const THead: React.FC<TableProps> = ({ children }) => (
  <thead className="bg-gray-900">{children}</thead>
);

export const TBody: React.FC<TableProps> = ({ children }) => (
  <tbody className="bg-gray-700 divide-y divide-gray-500">{children}</tbody>
);

export const Th: React.FC<TableProps> = ({ children }) => (
  <th
    scope="col"
    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-200 uppercase"
  >
    {children}
  </th>
);

export const Td: React.FC<TableProps> = ({ children }) => (
  <td className="py-2 px-6 whitespace-nowrap">{children}</td>
);
