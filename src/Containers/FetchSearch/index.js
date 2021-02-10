import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import axios from "../../Axios/axiosInstance";

import { Card, Title, Description } from "../../Components/BasicCard";

const FetchSelect = ({
  url = null,
  searchCriteria = {},
  children,
  resultsId = "results",
}) => {
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(null);
  const { makeCall } = useAxios({ axios });

  useEffect(() => {
    if (url) {
      makeCall({
        method: "POST",
        url,
        data: searchCriteria,
        successCb: (data) => {
          if (data.records.productCount) setCount(data.records.productCount);
          setResults(data.records.results);
        },
      });
    }
  }, [url, searchCriteria]);

  return React.cloneElement(children, { count, [resultsId]: results });

  // <div>
  //   <h5>{`Products count: ${count}`}</h5>
  //   {results.map((x) => (
  //     <Card key={x._id}>
  //       <Title title={x.name} />
  //       <Description text={x.description} />
  //     </Card>
  //   ))}
  // </div>
};

export default FetchSelect;
