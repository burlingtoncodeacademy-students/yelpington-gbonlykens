// React imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
// React-Leaflet imports
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import {Icon} from 'leaflet';
// import {Icon} from 'react-leaflet';

import MapComponent from "./mapComponent";



function Map(props) {
// setting state for location data
const [location, setLocation] = useState([]);
useEffect(() => {
  // condition to trigger the fetching of coords from location data
  if (location.length === 0) {
    fetch("/api/location")
    .then((res) => res.json())
    .then((locationJSON) => {
      setLocation(locationJSON);
    });
  }
});

  return (
    <div>
    <MapContainer
      id = "map-container"
      center={props.center}
      zoom={props.zoom}
      style={{ height: "600px", width: "600px" }}
    >
      <MapComponent 
      center = {props.newCenter}
      zoom = {props.newZoom}
      />
      
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => {
        // Map locations array pins a popup that has link to each restaurant page
        return (
          <Marker
          key={index}
          position={[location.latitude, location.longitude]}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
          >
            <Popup key={index}>
              <Link
              to={`/restaurant/${location.name
                .toLowerCase()
                .replaceAll("'", "")
                .replaceAll(" ", "-")}`}
                >
                  {location.name}
                  </Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
    </div>
  );
}

export default Map;