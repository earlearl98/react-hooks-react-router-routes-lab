import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div>
      <NavLink
        to="/"
        exact
        
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        
        activeStyle={{
          background: "darkblue",
        }}
      >
        movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        
        activeStyle={{
          background: "darkblue",
        }}
      >
        directors
      </NavLink>

      <NavLink
        to="/actors"
        exact
        
        activeStyle={{
          background: "darkblue",
        }}
      >
        actors
      </NavLink>
    </div>
  );
}

export default NavBar;
