import React from "react";
import { Table } from "baseui/table-semantic";


  
const COLUMNS = ['Name', 'Detail', 'Price','Quantity', 'Total'];
const DATA = [
  ['Cup', 'fucking cup', 5, 100, 500],
  ['Cup', 'fucking cup', 5, 100, 500],
  ['Cup', 'fucking cup', 5, 100, 500],
  ['Cup', 'fucking cup', 5, 100, 500],
];


export const TablePrice = () => {
  return (
    <Table columns={COLUMNS} data={DATA}/>
  );
}