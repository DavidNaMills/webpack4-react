import React from "react";
import FetchResults from "../../../Containers/FetchSearch";
import SearchResults from "../../../Containers/SearchResults";

const SingleType = ({ type }) => {
  return (
    <div>
      <div>
        <h2>{type.name}</h2>
        <p>{type.description}</p>
      </div>
      <FetchResults
        url="products/search/0/0/true"
        searchCriteria={{ search: { type: type._id } }}
        resultsId="list"
      >
        <SearchResults
          cellContent={[
            "name",
            "description",
            "location.name",
            "qtyInStock",
            "supplierId.name",
          ]}
        />
      </FetchResults>
    </div>
  );
};

export default SingleType;
