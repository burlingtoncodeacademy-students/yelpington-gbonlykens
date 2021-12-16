import React from "react";
import { Link } from "react-router-dom";

// import './app.css'

//component for all individual restaurant links
function Navbar() {
  return (
    <>
       <div id="navbar-container">
       

        {/* Individual restaurant links in the navbar */}
        <Link className="link" to="/restaurant/atlantikos">
          <h3>Atlantikos</h3>
        </Link>
        &nbsp;
        <Link className="link" to="/restaurant/bonefish-grill">
          <h3>Bonefish Grill</h3>
        </Link>
        <Link className="link" to="/restaurant/capital-grille">
          <h3>Capital Grille</h3>
        </Link>
        <Link className="link" to="/restaurant/ferraros-kitchen">
          <h3>Ferraro's Kitchen</h3>
        </Link>
        <Link className="link" to="/restaurant/le-zoo">
         <h3> Le Zoo</h3>
        </Link>
        <Link className="link" to="/restaurant/ola-restaurant">
          <h3>OLA Restaurant</h3>
        </Link>
        <Link className="link" to="/restaurant/santorini-by-georgios">
          <h3>Santorini by Georgio's</h3>
        </Link>
        <Link className="link" to="/restaurant/stubborn-seed">
          <h3>Stubborn Seed</h3>
        </Link>
        <Link className="link" to="/restaurant/surf-club">
          <h3>The Surf Club Restaurant</h3>
        </Link>
        <Link className="link" to="/restaurant/yard-house">
          <h3>Yard House</h3>
        </Link>
        <Link className="link" to="/restaurant/yard-bird">
          <h3>Yard Bird </h3>
        </Link>
      </div>
           
    </>
  );
}

export default Navbar;
