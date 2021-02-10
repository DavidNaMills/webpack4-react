export const USER_LOGIN = "user_login";
export const userLogin = ({ info, token }) => ({
  type: USER_LOGIN,
  payload: {
    token,
    info,
  },
});

export const USER_LOGOUT = "user_logout";
export const userLogout = () => ({
  type: USER_LOGOUT,
});

// update user info
