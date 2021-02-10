import axios from "axios";

const base = axios.create({
  baseURL: `${process.env.BASEURL}/`,
});

console.log(process.env.BASEURL);

export const setAuthorizationToken = (token) => {
  if (token) {
    base.defaults.headers.common.authorization = `bearer ${token}`;
  } else {
    delete base.defaults.headers.common.authorization;
  }
};

export default base;
