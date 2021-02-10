import {
  LOCATION_INIT,
  LOCATION_CREATE,
  LOCATION_UPDATE,
} from "./locationActions";

const defaultLocationState = [];

const locationReducer = (state = defaultLocationState, action) => {
  const { type, payload } = action;
  const tempState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case LOCATION_INIT:
      return payload;

    case LOCATION_CREATE:
      return tempState.push(payload);

    case LOCATION_UPDATE: // TODO:
      return state;

    default:
      return state;
  }
};

export default locationReducer;
