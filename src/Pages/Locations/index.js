import React, { useState } from "react";
import { useSelector } from "react-redux";

import SelectionBar from "../../Containers/SelectionBar";

import appendSelect from "../../utils/appendSelect";
import selectTransform from "../../utils/selectTransform";
import { Card, Title, Description } from "../../Components/BasicCard";
import CardResultDisplay from "../../Components/CardResultDisplay";

import SingleLocation from "./SingleLocation";

const Locations = () => {
  const { locations } = useSelector((state) => state);
  const [locId, setLocId] = useState("-1");

  const onChangeSelect = (val) => {
    console.log(val);
    setLocId(val.value);
  };

  return (
    <div>
      <h1>This is the Locations page</h1>

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
        // defaultValue={{ value: "-1", label: "All" }}
      />

      {locId === "-1" ? (
        <CardResultDisplay>
          {locations.map((x) => (
            <Card key={x._id}>
              <Title title={x.name} />
              <Description text={x.description} />
            </Card>
          ))}
        </CardResultDisplay>
      ) : (
        <SingleLocation location={locations.find((x) => x._id === locId)} />
      )}
    </div>
  );
};

export default Locations;
