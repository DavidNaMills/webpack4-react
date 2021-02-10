import React, { useState } from "react";
import TableGenerate from "../TableGenerate";

// can change the results view between cards and table
//

const SearchResults = ({
  cellContent = [],
  list = [],
  count,
  displayType = 0, //0=both 1=only cards, 2=only table
}) => {
  const [display, setDisplay] = useState(2);

  console.log(list);
  if (list.length < 1) {
    return <div>No Results</div>;
  }
  return (
    <div>
      {displayType === 0 && <p>This is a button to change display</p>}
      <div>
        {display === 1 && <p>displaying all cards</p>}
        {display === 2 && (
          <TableGenerate cellContent={cellContent} list={list} count={count} />
        )}
      </div>
    </div>
  );
};

export default SearchResults;
