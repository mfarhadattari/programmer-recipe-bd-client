import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "underline" : "")}
    >
      {children}
    </NavLink>
  );
};

export default NavigationLink;
