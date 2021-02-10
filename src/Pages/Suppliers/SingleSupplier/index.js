import React from "react";
import FetchResults from "../../../Containers/FetchSearch";
import SearchResults from "../../../Containers/SearchResults";

const SingleSupplier = ({ supplier }) => {
  return (
    <div>
      <div></div>

      <FetchResults
        url="products/search/0/0/true"
        searchCriteria={{ search: { supplierId: supplier._id } }}
        resultsId="list"
      >
        <SearchResults
          cellContent={["name", "code", "qtyInStock", "location.name"]}
        />
      </FetchResults>
    </div>
  );
};

export default SingleSupplier;
