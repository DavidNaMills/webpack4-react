import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products">Products</NavLink>
      <NavLink to="/ProductTypes">Types</NavLink>
      <NavLink to="/Locations">Locations</NavLink>
      <NavLink to="/Suppliers">Suppliers</NavLink>
    </div>
  );
};

export default NavBar;
