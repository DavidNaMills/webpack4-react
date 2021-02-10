import { TYPES_INIT, TYPES_CREATE, TYPES_UPDATE } from "./typeActions";

const defaultTypeState = [];

const typeReducer = (state = defaultTypeState, action) => {
  const { type, payload } = action;

  const tempState = JSON.parse(JSON.stringify(state));

  switch (type) {
    case TYPES_INIT:
      return payload;

    case TYPES_CREATE:
      return tempState.push(payload);

    case TYPES_UPDATE:
      // TODO:
      return state;

    default:
      return state;
  }
};

export default typeReducer;
