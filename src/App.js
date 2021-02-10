import React from "react";
import { useSelector } from "react-redux";

import Login from "./Pages/Login";
import LoggedIn from "./Navigation/LoggedIn";

const App = () => {
  const token = useSelector((state) => state.user.token);
  return token ? <LoggedIn /> : <Login />;
};

export default App;
