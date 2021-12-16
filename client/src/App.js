// React imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import styling
import "./App.css";

// component imports
import Home from "./components/Home.js";
import Map from "./components/Map";

//restaurant specific component imports
import Atlantikos from "./components/Atlantikos";
import Bonefish from "./components/Bonefish.js";
import CapitalGrille from "./components/CapitalGrille.js";
import Ferraros from "./components/Ferraros.js";
import LeZoo from "./components/LeZoo.js";
import Ola from "./components/Ola.js";
import Santorini from "./components/Santorini.js";
import StubbornSeed from "./components/StubbornSeed.js";
import SurfClub from "./components/SurfClub.js";
import YardBird from "./components/YardBird.js";
import YardHouse from "./components/YardHouse.js";



function App(props) {
 return(
   <div>
     <BrowserRouter>
     <Routes>
       {/* Route for Home Page */}
       <Route path="/" element={<Home />} />
       {/* Route to Atlantikos */}
       <Route path="/restaurant/atlantikos" element={<Atlantikos />} />
       {/* Route to Bonefish Grill */}
       <Route path="/restaurant/bonefish-grill" element={<Bonefish />} />
       {/* Route to Capital Grille */}
       <Route path="/restaurant/capital-grille" element={<CapitalGrille />} />
       {/* Route to Ferraros Kitchen */}
       <Route path="/restaurant/ferraros-kitchen" element={<Ferraros />} />
       {/* Route to Le Zoo */}
       <Route path="/restaurant/le-zoo" element={<LeZoo />} />
       {/* Route to OLA Restaurant */}
       <Route path="/restaurant/ola-restaurant" element={<Ola />} />
       {/* Route to Santorini by Georgios */}
       <Route path="/restaurant/santorini-by-georgios" element={<Santorini />} />
       {/* Route to Stubborn Seed */}
       <Route path="/restaurant/stubborn-seed" element={<StubbornSeed />} />
       {/* Route to The Surf Club */}
       <Route path="/restaurant/surf-club" element={<SurfClub />} />
       {/* Route to Yard Bird Table and Bar */}
       <Route path="/restaurant/yard-bird" element={<YardBird />} />
       {/* Route to Yard House Restaurant */}
       <Route path="/restaurant/yard-house" element={<YardHouse />} />



     </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App;
