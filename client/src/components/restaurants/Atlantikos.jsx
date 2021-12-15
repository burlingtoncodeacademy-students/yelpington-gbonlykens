// react imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
// component imports
import RestInfo from "../RestInfo";
import Navbar from "../navbar";
import Map from "../Map";
//styling import
import "../../App.css";

// useState and restaurant info delcarations
let restInfo;
function Atlantikos(props) {
    const [restName, setRestName] = useState("");
    const [restAddress, setRestAddress] = useState("");
    const [restPhone, setRestPhone] = useState("");
    const [restWebsite, setRestWebsite] = useState("");
    const [restHours, setRestHours] = useState("");
    const [restCocktail, setRestCocktail] = useState("");
    const [restEntree, setRestEntree] = useState("");
    const [restNotes, setRestNotes] = useState("");
    
    // when the page loads, it will fetch the details for the restaurant from server and stores json in "info" variable
    // states are updated with that restaurants info

    useEffect(() => {
        fetch("/api/atlantikos")
        .then((res) => res.json())
        .then((data) => (restInfo = data))
        .then(() => {
            setRestName(restInfo.name);
            setRestAddress(restInfo.address);
            setRestPhone(restInfo.phone);
            setRestWebsite(restInfo.website);
            setRestHours(restInfo.hours);
            setRestCocktail(restInfo.cocktail);
            setRestEntree(restInfo.entree);
            setRestNotes(restInfo.notes);
        });
    }, []);

    //renders formatted restaurant specifics to page
    return(
        <>
        <div id="main-restaurant-container">

            <div id="restaurant-container">
                <Navbar />
                <Map />
                <RestInfo
                restName={restName}
                restAddress={restAddress}
                restPhone={restPhone}
                restWebsite={restWebsite}
                restHours={restHours}
                restCocktail={restCocktail}
                restEntree={restEntree}
                restNotes={restNotes}
                />
                <Link to ="/">Return to Home Page</Link>
            </div>
        </div>
        </>
    );

}

export default Atlantikos;