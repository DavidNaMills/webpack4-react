import { combineReducers } from "redux";
import userReducer from "./UserStore/userReducer";
import typeReducer from "./TypesStore/typeReducer";
import locationReducer from "./LocationsStore/locationReducer";
import supplierReducer from "./SupplierStore/supplierReducer";

const rootReducer = combineReducers({
  user: userReducer,
  types: typeReducer,
  locations: locationReducer,
  suppliers: supplierReducer,
});

export default rootReducer;
