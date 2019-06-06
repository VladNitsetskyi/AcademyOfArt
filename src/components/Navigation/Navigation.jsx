import { NavLink } from "react-router-dom";
import React from "react";
import "./Navigation.scss";

const Navigation = props => {
  return (
    <div className="nav-wrapper" style={props.style}>
      <div className="nav-left">
        <NavLink to={props.leftPath}>{props.textLeft}</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to={props.rightPath}>{props.textRight}</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
