import { useDispatch } from "react-redux";
import {
  locationCreate,
  locationInit,
  locationUpdate,
} from "../LocationsStore";
import { supplierInit, createSupplier, supplierUpdate } from "../SupplierStore";
import { typesInit, typeCreate, typeUpdate } from "../TypesStore";

const useDispatchHook = () => {
  const dispatch = useDispatch();

  const initAllLocations = (data) => dispatch(locationInit({ data }));
  const createNewlocation = (data) => dispatch(locationCreate({ data }));

  const initAllSuppliers = (data) => dispatch(supplierInit({ data }));
  const createNewSupplier = (data) => dispatch(createSupplier({ data }));

  const initAllTypes = (data) => dispatch(typesInit({ data }));
  const createNewType = (data) => dispatch(typeCreate({ data }));

  return {
    initAllLocations,
    createNewlocation,
    initAllSuppliers,
    createNewSupplier,
    initAllTypes,
    createNewType,
  };
};

export default useDispatchHook;
