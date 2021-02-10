export const TYPES_INIT = "TYPES_INIT";
export const typesInit = ({ data }) => ({
  type: TYPES_INIT,
  payload: data,
});

export const TYPES_CREATE = "TYPES_CREATE";
export const typeCreate = ({ data }) => ({
  type: TYPES_CREATE,
  payload: data,
});

export const TYPES_UPDATE = "TYPES_UPDATE";
export const typeUpdate = ({ id, updatedData }) => ({
  type: TYPES_UPDATE,
  payload: {
    id,
    updatedData,
  },
});
