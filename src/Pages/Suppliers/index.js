import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectionBar from "../../Containers/SelectionBar";

import appendSelect from "../../utils/appendSelect";
import selectTransform from "../../utils/selectTransform";
import { Card, Title, Description } from "../../Components/BasicCard";
import CardResultDisplay from "../../Components/CardResultDisplay";
import SingleSupplier from "./SingleSupplier";

const Suppliers = () => {
  const { suppliers } = useSelector((state) => state);
  const [suppId, setSupId] = useState("-1");

  const onChangeSelect = (val) => {
    setSupId(val.value);
  };

  return (
    <div>
      <h1>This is the Suppliers page</h1>

      <SelectionBar
        onChange={onChangeSelect}
        options={appendSelect({
          array: selectTransform({
            array: suppliers,
            value: "_id",
            label: "name",
          }),
          firstLabel: "All",
          firstValue: "-1",
        })}
      />

      {suppId === "-1" ? (
        <CardResultDisplay>
          {suppliers.map((x) => (
            <Card key={x._id}>
              <Title title={x.name} />
              <Description text={x.description} />
            </Card>
          ))}
        </CardResultDisplay>
      ) : (
        <SingleSupplier supplier={suppliers.find((x) => x._id === suppId)} />
      )}
    </div>
  );
};

export default Suppliers;
