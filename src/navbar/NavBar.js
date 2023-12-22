// NavBar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">Dogs</NavLink>
      
      {/* <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/about">About Us</NavLink>
      <NavLink exact to="/contact">Contact</NavLink>
      <NavLink exact to="/blog">Blog</NavLink>
      <NavLink exact to="/blargh">Broken Link</NavLink> */}
    </nav>
  );
}
// end

export default NavBar;


// ROUTED DEMO CODE
// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";

// function NavBar() {
//   return (
//     <nav className="NavBar">
//       <NavLink exact to="/">
//         Home
//       </NavLink>
//       <NavLink exact to="/eat">
//         Eat
//       </NavLink>
//       <NavLink exact to="/drink">
//         Drink
//       </NavLink>
//     </nav>
//   );
// }

// export default NavBar;


// URL PARAMETERS DEMO CODE
// import React from "react";
// import { Link } from "react-router-dom";

// function NavBar({ foods }) {
//   return (
//     <ul>
//       {foods.map(food => (
//         <li key={food}>
//           <Link to={`/food/${food}`}>Show me the {food}!</Link>
//         
//       ))}
//     </ul>
//   );
// }

// Nav.defaultProps = {
//   foods: ["burrito", "salad", "pizza", "pasta"]
// };

// export default NavBar;
