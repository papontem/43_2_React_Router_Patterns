// NavBar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/colors">Colors</NavLink>
      
    </nav>
  );
}
// end

export default NavBar;

