// react and react-leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//component imports
import Header from "./Header";
import Navbar from "./Navbar";

function LeZoo(props) {
  const [center, setCenter] = useState([25.88839, -80.12461]);
  const [marker, setMarker] = useState([25.88839, -80.12461]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [hours, setHours] = useState("");
  const [cocktail, setCocktail] = useState("");
  const [entree, setEntree] = useState("");
  const [notes, setNotes] = useState("");

  // useEffect hook will pull info from atlantikos json file
  useEffect(() => {
    fetch("/api/le-zoo")
      .then((res) => res.json())
      .then((zooData) => {
        // pulls name data
        setName(zooData.name);
        setAddress(zooData.address);
        setPhone(zooData.phone);
        setWebsite(zooData.website);
        setHours(zooData.hours);
        setCocktail(zooData.cocktail);
        setEntree(zooData.entree);
        setNotes(zooData.notes);
      });
  }, []);

  //renders formatted restaurant specifics to page
  return (
    <div>
      <div id="main-restaurant-container">
        <Header />
        <Navbar />
        <div className="map-container">
          <MapContainer
            center={center}
            zoom={18}
            style={{ height: "400px", width: "500px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker for Atlantikos */}
            <Marker position={marker}>
              <Popup>Le Zoo Restaurant</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div>
          {/* UL for restaurant specifics */}
          <ul>
            <li>Name: {name}</li>
            <li>Address: {address}</li>
            <li>Phone: {phone}</li>
            <li>Website: {website}</li>
            <li>Hours: {hours}</li>
            <li>House Cocktail: {cocktail}</li>
            <li>House Entree: {entree}</li>
            <li>Notes: {notes}</li>
          </ul>
        </div>

        <Link to="/">Return to Home Page</Link>
      </div>
    </div>
  );
}

export default LeZoo;
