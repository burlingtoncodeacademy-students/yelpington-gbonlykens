import '../App.css';
import Map from './Map.js';
// importing useState Hook from React
import {useState} from 'react';

//component imports
import Header from './Header';
import Navbar from './Navbar';

// function for home page component
function Home(props) {
    const [center, setCenter] = useState([25.76342, -80.20775]);
    const [zoom, setZoom] = useState(13);
// rendering the Header, Navbar, and Map components into Home Page
    return(
        <div id="main-container">
            <Header />
            <Navbar />
            <Map
            center={center}
            zoom={zoom} />
        </div>

    );
}

export default Home;