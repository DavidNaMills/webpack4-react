import {
  SUPPLIERS_INIT,
  SUPPLIER_CREATE,
  SUPPLIER_UPDATE,
} from "./supplierActions";

const defaultSupplierState = [];

const supplierReducer = (state = defaultSupplierState, action) => {
  const { type, payload } = action;
  const tempState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case SUPPLIERS_INIT:
      return payload;

    case SUPPLIER_CREATE:
      return tempState.push(payload);

    default:
      return state;
  }
};

export default supplierReducer;
