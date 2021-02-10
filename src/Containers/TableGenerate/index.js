import React from "react";
import { Table, Row, Cell } from "../../Components/Table";

const isSplit = (item, obj) => {
  const x = item.indexOf(".");
  if (x > -1 && obj[item]) {
    const t = item.split(".");
    return obj[t[0]][t[1]] ? obj[t[0]][t[1]] : "";
  }
  return obj[item] ? obj[item] : "";
};

const TableGenerate = ({ list = [], count = null, cellContent = [] }) => {
  return (
    <div>
      {count && <h5>{`Showing ${list.length}/${count}`}</h5>}
      <Table>
        {list.map((x) => (
          <Row key={x._id}>
            {cellContent.map((y, idx) => (
              <Cell key={`${x._id}-${idx}`}>
                <p>{isSplit(y, x)}</p>
              </Cell>
            ))}
          </Row>
        ))}
      </Table>
    </div>
  );
};

export default TableGenerate;
