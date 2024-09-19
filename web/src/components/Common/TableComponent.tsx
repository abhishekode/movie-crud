import React from 'react'

export const TableHeaderCell = ({ label }: { label: string }) => (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
    >
      {label}
    </th>
  );

  export const TableBodyCell = ({ children }: { children: React.ReactNode }) => (
    <td className="px-6 py-4 whitespace-nowrap text-gray-800">{children}</td>
  );