import { USER_LOGIN, USER_LOGOUT } from "./userActions";

const defaultUserStateEmpty = {
  token: null,
  info: null,
};
const defaultUserState = {
  token: "52bvc63zx54vc36f",
  // token: null,
  info: {
    name: "David Mills",
    role: 1,
  },
};

const userReducer = (state = defaultUserState, action) => {
  // const tempState = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN:
      return {
        token: payload.token,
        info: payload.info,
      };

    case USER_LOGOUT:
      return defaultUserState;

    default:
      return state;
  }
};

export default userReducer;
