import React from "react";
import { Table } from "baseui/table-semantic";
import {TableStyle} from './style'

  
const COLUMNS = ['Name', 'Detail', 'Reference', 'Price','Quantity', 'Total'];
const DATA = [
  ['Cup', 'fucking cup', 'cd4fu', 5, 100, 500],
  ['Cup', 'fucking cup', 'cd4fu', 5, 100, 500],
  ['Cup', 'fucking cup', 'cd4fu', 5, 100, 500],
  ['Cup', 'fucking cup', 'cd4fu', 5, 100, 500],
];


export const TablePrice = () => {
  return (
    <TableStyle>
      <Table columns={COLUMNS} data={DATA}/>
    </TableStyle>
  );
}