import React from "react";
import { Table } from "baseui/table-semantic";
import {TableStyle} from './style'
import {COLUMNS} from '../../utils/data';

  
export const TablePrice = (props) => {

  return (
    <TableStyle>
      <Table columns={COLUMNS} data={props.data}/>
    </TableStyle>
  );
}