export const SUPPLIERS_INIT = "SUPPLIERS_INIT";
export const supplierInit = ({ data }) => ({
  type: SUPPLIERS_INIT,
  payload: data,
});

export const SUPPLIER_CREATE = "SUPPLIER_CREATE";
export const createSupplier = ({ data }) => ({
  type: SUPPLIER_CREATE,
  payload: data,
});

export const SUPPLIER_UPDATE = "SUPPLIER_UPDATE";
export const supplierUpdate = ({ id, data }) => ({
  type: SUPPLIER_UPDATE,
  payload: {
    id,
    data,
  },
});
