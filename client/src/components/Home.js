// react imports
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
    // state set up to store restaurant names
    const [name, setName] = useState([])

    // useEffect hook to list rest names on Home page
    useEffect(() => {
        if (name.length === 0) {
            //info fetched from api
            fetch("/api")
            .then((res) => res.json())
            // store it in a variable
            .then(name => {
                setName(name)
                props.setZoom({zoomIn: false, zoom: 15, center:[25.76232, -80.19582]})
            })
        }
    })

    // restaurant id's to be capitalized
    function capitalizeRest(str) {
        // name strings are split, all the "-"" then joined again
        let strArray = str.split(" ");
        let wordLength = 0;
        while (wordLength < strArray.length) {
            strArray[wordLength] = strArray[wordLength][0].toUpperCase() +
            strArray[wordLength].slice(1).toLowerCase();
            wordLength++;
        }
        return strArray.join(" ");
    }

    return(
        <div>
            <h2 id = "directory">Downtown Miami Restaurants</h2>
            <div id = "navbar">
                <ul>
                    {name.map((rest, index) => {
                        return (<h3 key ={index}>
                            <li>
                                <Link className="restaurant-link" to={`/restaurant/${rest}`}>
                                    {capitalizeRest(rest.replaceAll('-', ''))}
                                </Link>
                                </li>
                                </h3>
                            )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Home;