import React from "react";
import { Link } from "react-router-dom";

//component for all individual restaurant links
function Navbar(props) {
  return (
    <>
       <div id="navbar-container">
        <h1 className="sidebar-header">Downtown Miami Restaurants</h1>

        {/* Individual restaurant links in the navbar */}
        <Link className="link" to="/restaurant/atlantikos">
          Atlantikos
        </Link>
        <Link className="link" to="/restaurant/bonefish-grill">
          Bonefish Grill
        </Link>
        <Link className="link" to="/restaurant/capital-grille">
          Capital Grille
        </Link>
        <Link className="link" to="/restaurant/ferreros-kitchen">
          Ferraro's Kitchen
        </Link>
        <Link className="link" to="/restaurant/le-zoo">
          Le Zoo
        </Link>
        <Link className="link" to="/restaurant/ola-restaurant">
          OLA Restaurant
        </Link>
        <Link className="link" to="/restaurant/santorini-by-georgios">
          Santorini by Georgio's
        </Link>
        <Link className="link" to="/restaurant/stubborn-seed">
          Stubborn Seed
        </Link>
        <Link className="link" to="/restaurant/surf-club">
          The Surf Club Restaurant
        </Link>
        <Link className="link" to="/restaurant/yard-house">
          Yard House
        </Link>
        <Link className="link" to="/restaurant/yard-bird">
          Yard Bird 
        </Link>
      </div>
           
    </>
  );
}

export default Navbar;
