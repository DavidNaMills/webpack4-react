import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectionBar from "../../Containers/SelectionBar";
import appendSelect from "../../utils/appendSelect";
import selectTransform from "../../utils/selectTransform";

const defaultSearchState = { location: "-1" };

const Products = () => {
  const { locations } = useSelector((state) => state);
  const [search, setSearch] = useState(defaultSearchState);

  const onChangeSelect = (val) => {
    console.log(val);
    setSearch({ location: val.value });
  };

  return (
    <div>
      <h1>This is the Products page</h1>
      <div>
        <h2>Search Criteria</h2>
        <SelectionBar
          onChange={onChangeSelect}
          options={appendSelect({
            array: selectTransform({
              array: locations,
              value: "_id",
              label: "name",
            }),
            firstLabel: "All",
            firstValue: "-1",
          })}
        />
      </div>

      <ul>
        <li>select location and show products from that location</li>
        <li>search products from advanced search</li>
        <li>show all products info</li>
        <li>create new products</li>
        <li>update products</li>
      </ul>
    </div>
  );
};

export default Products;
