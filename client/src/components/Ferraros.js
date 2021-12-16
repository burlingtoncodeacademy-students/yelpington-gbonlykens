// react and react-leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//component imports
import Header from "./Header";
import Navbar from "./Navbar";

function Ferraros(props) {
  const [center, setCenter] = useState([25.85213, -80.17445]);
  const [marker, setMarker] = useState([25.85213, -80.17445]);
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
    fetch("/api/ferraros-kitchen")
      .then((res) => res.json())
      .then((ferrarosData) => {
        // pulls name data
        setName(ferrarosData.name);
        setAddress(ferrarosData.address);
        setPhone(ferrarosData.phone);
        setWebsite(ferrarosData.website);
        setHours(ferrarosData.hours);
        setCocktail(ferrarosData.cocktail);
        setEntree(ferrarosData.entree);
        setNotes(ferrarosData.notes);
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
              <Popup>Ferraro's Kitchen</Popup>
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

export default Ferraros;
