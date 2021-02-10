import React, { useState } from "react";
import { useSelector } from "react-redux";

import SelectionBar from "../../Containers/SelectionBar";

import appendSelect from "../../utils/appendSelect";
import selectTransform from "../../utils/selectTransform";
import { Card, Title, Description } from "../../Components/BasicCard";
import CardResultDisplay from "../../Components/CardResultDisplay";

import SingleType from "./SingleType";

const ProductTypes = () => {
  const { types } = useSelector((state) => state);
  const [typeId, setTypeId] = useState("-1");

  const onChangeSelect = (val) => {
    console.log(val);
    setTypeId(val.value);
  };

  return (
    <div>
      <h1>This is ProductTypes page</h1>

      <SelectionBar
        onChange={onChangeSelect}
        options={appendSelect({
          array: selectTransform({
            array: types,
            value: "_id",
            label: "name",
          }),
          firstLabel: "All",
          firstValue: "-1",
        })}
      />

      {typeId === "-1" ? (
        <CardResultDisplay>
          {types.map((x) => (
            <Card key={x._id}>
              <Title title={x.name} />
              <Description text={x.description} />
            </Card>
          ))}
        </CardResultDisplay>
      ) : (
        <SingleType type={types.find((x) => x._id === typeId)} />
      )}
    </div>
  );
};

export default ProductTypes;
