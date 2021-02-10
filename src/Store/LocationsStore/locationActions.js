export const LOCATION_INIT = "LOCATION_INIT";
export const locationInit = ({ data }) => ({
  type: LOCATION_INIT,
  payload: data,
});

export const LOCATION_CREATE = "LOCATION_CREATE";
export const locationCreate = ({ data }) => ({
  type: LOCATION_CREATE,
  payload: data,
});

export const LOCATION_UPDATE = "LOCATION_UPDATE";
export const locationUpdate = ({ id, updatedData }) => ({
  type: LOCATION_UPDATE,
  payload: {
    id,
    updatedData,
  },
});
