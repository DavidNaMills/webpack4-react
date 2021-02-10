import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import NavBar from "../NavBar";
import Dashboard from "../../Pages/Dashboard";
import Products from "../../Pages/Products";
import Locations from "../../Pages/Locations";
import ProductTypes from "../../Pages/ProductTypes";
import Suppliers from "../../Pages/Suppliers";

import Popup from "../../Components/Popup";

const LoggedIn = () => {
  const user = useSelector((state) => state.user);
  const [test, setTest] = useState(false);

  return (
    <div>
      <h4>{`${user.info.name} is logged in`}</h4>
      <NavBar />
      <Switch>
        <Route path="/Products" exact component={Products} />
        <Route path="/Locations" exact component={Locations} />
        <Route path="/ProductTypes" exact component={ProductTypes} />
        <Route path="/Suppliers" exact component={Suppliers} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <button
        type="button"
        onClick={() => {
          setTest((val) => !!val);
        }}
      >
        {test ? "Close" : "Open"}
      </button>
      {test && (
        <Popup>
          <p>test content</p>
        </Popup>
      )}
    </div>
  );
};

export default LoggedIn;
