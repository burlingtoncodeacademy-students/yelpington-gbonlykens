import { useMap } from "react-leaflet";

// Map zoom function after user clicks
function MapComponent({ center, zoom}) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default MapComponent;