import { useDispatch } from "react-redux";
// import axios from "../../Axios/axiosInstance";
// import axios from "axios";

import { locationInit } from "../../Store/LocationsStore";
import { supplierInit } from "../../Store/SupplierStore";
import { typesInit } from "../../Store/TypesStore";

const useInitialiseAll = ({ axios }) => {
  const dispatch = useDispatch();

  const fetchAll = () => {
    const types = axios.get("product-type");
    const locations = axios.get("locations");
    const suppliers = axios.get("supplier");

    Promise.all([types, locations, suppliers]).then((res) => {
      // FIXME: how to handle errors here?
      dispatch(typesInit({ data: res[0].data.records }));
      dispatch(locationInit({ data: res[1].data.records }));
      dispatch(supplierInit({ data: res[2].data.records }));
    });
  };

  return { fetchAll };
};

export default useInitialiseAll;
