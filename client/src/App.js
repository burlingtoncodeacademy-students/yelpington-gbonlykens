// React imports
import React from 'react';
import { useState } from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

// import styling
import './App.css';

// component imports
import Home from "./components/Home.js";
import Restaurants from "./components/restaurants.js";
import Map from './components/Map';


function App(props) {
  // setting the state for map
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 15,
    center: [25.76232, -80.19582],
  });

 return (
   <div id = "page-container"> 
    <h1 id = "page-title">
     <a href = "/">
     <span>Yelpington</span>
     </a>
     </h1>
     <div id = "routes">
       <div id = "map-border">
         <Map
         newZoom={zoom.zoomIn ? zoom.zoom : 15}
         newCenter={zoom.zoomIn ? zoom.center : [25.76232, -80.19582]}
         />
       </div>
       <Routes>
         <Route exact path="/">
           <Home setZoom={setZoom} />
         </Route>
         <Route
          path = "/restaurant/:id"
          children = {(props) => {
            return props.match.isExact ? (
              <Restaurants
              match={props.match}
              setZoom={setZoom}
              zoomIn={zoom.zoomIn}
              />
            ) : (
          
              <Navigate to = "/" />
            );
          }}
          />
       </Routes>
     </div>
    </div>
  );
 
}

export default App;
