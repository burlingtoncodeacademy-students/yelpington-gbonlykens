// React imports
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import styling
import "./App.css";

// component imports
import Home from "./components/Home.js";
import Restaurants from "./components/RestInfo.js";
import Map from "./components/Map";
import Atlantikos from "./components/restaurants/Atlantikos";

function App(props) {
  // setting the state for map
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 15,
    center: [25.76232, -80.19582],
  });

  return( 
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/restaurants/atlantikos" element={<Atlantikos />} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
