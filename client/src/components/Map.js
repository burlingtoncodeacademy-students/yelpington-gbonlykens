// React imports
import React from "react";

// React-Leaflet imports
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

// import MapComponent from "./mapComponent";



function Map(props) {
    const downtownMiami = [25.84771, -80.15662];
    const atlantikosLocation = [25.88901, -80.12287];
    const bonefishLocation = [25.95133, -80.14508];
    const capitalGrilleLocation = [25.77016, -80.19032];
    const ferrarosLocation = [25.85213, -80.17445];
    const leZooLocation = [25.88839, -80.12461];
    const olaLocation = [25.80214, -80.12762];
    const santoriniLocation = [25.77027, -80.13228];
    const stubbornSeedLocation = [25.77026, -80.13492];
    const surfClubLocation = [25.87749, -80.12150];
    const yardHouseLocation = [25.79239, -80.13971];
    const yardBirdLocation = [25.78987, -80.14010];

    return(
        // Leaflet map and tilelayer 
        <MapContainer
        id="map-container"
        center={downtownMiami}
        zoom={11}
        style={{height: "600px", width: "600px"}}
        >
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Each individual restaurant and its map marker  */}
            <Marker
            position={downtownMiami}>
            
                <Popup>Downtown Miami Restaurants</Popup>
            </Marker>
            <Marker position={atlantikosLocation}>
                <Popup className="popup">
                    <a href="/restaurants/atlantikos">Atlantikos</a>
                </Popup>
            </Marker>
            <Marker position={bonefishLocation}>
                <Popup className="popup">
                    <a href="/restaurants/bonefish-grill">Bonefish Grill</a>
                </Popup>
            </Marker>
            <Marker position={capitalGrilleLocation}>
                <Popup className="popup">
                    <a href="/restaurants/capitale-grill">Capital Grille</a>
                </Popup>
            </Marker>
            <Marker position={ferrarosLocation}>
                <Popup className="popup">
                    <a href="/restaurants/ferraros-kitchen">Ferraros Kitchen</a>
                </Popup>
                </Marker>
                <Marker position={leZooLocation}>
                <Popup className="popup">
                    <a href="/restaurants/le-zoo">Le-Zoo</a>
                </Popup>
            </Marker>
            <Marker position={olaLocation}>
                <Popup className="popup">
                    <a href="/restaurants/ola-restaurant">Ola Restaurant</a>
                </Popup>
            </Marker>
            <Marker position={santoriniLocation}>
                <Popup className="popup">
                    <a href="/restaurants/santorini">Santorini by Georgios</a>
                </Popup>
            </Marker>
            <Marker position={stubbornSeedLocation}>
                <Popup className="popup">
                    <a href="/restaurants/stubborn-seed">Stubborn Seed</a>
                </Popup>
            </Marker>
            <Marker position={surfClubLocation}>
                <Popup className="popup">
                    <a href="/restaurants/surf-club">Surf Club Restaurant</a>
                </Popup>
            </Marker>
            <Marker position={yardHouseLocation}>
                <Popup className="popup">
                    <a href="/restaurants/yard-house">Yard House Restaurant</a>
                </Popup>
            </Marker>
            <Marker position={yardBirdLocation}>
                <Popup className="popup">
                    <a href="/restaurants/yard-bird">Yard Bird Restaurant</a>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;