import React from "react";
import FetchResults from "../../../Containers/FetchSearch";
import SearchResults from "../../../Containers/SearchResults";

const SingleLocation = ({ location }) => {
  return (
    <div>
      <div>
        <h2>{location.name}</h2>
        <p>{location.description}</p>
      </div>
      <FetchResults
        url="products/search/0/0/true"
        searchCriteria={{ search: { location: location._id } }}
        resultsId="list"
      >
        <SearchResults cellContent={["name", "description"]} />
      </FetchResults>
    </div>
  );
};

export default SingleLocation;
