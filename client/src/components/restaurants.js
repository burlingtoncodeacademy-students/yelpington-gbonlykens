// import styling 

function Restaurants(props) {
    // const [info, setInfo] = useState({
    //     id: '',
    //     name: '',
    //     address: '',
    //     phone: '',
    //     website: '',
    //     hours: '' || [],
    //     cocktail: '',
    //     entree: '',
    //     notes: [],
    //     latitude: '',
    //     longitude: '',
    // });

    // // assign restaurant ID to variable
    // let restInfo = props.match.parama.id

    // is throwing errors
    // useEffect(() => {
    //     if (info.id === '' || info.id !== restInfo) {

    //         // fetch rest ID from the data in api
    //         fetch(`/api/restaurant-data${restInfo}`)
    //         .then((res) => res.json())
    //         // 2nd .then is storing it
    //         .then(restaurantDetails => {
    //             setInfo(restaurantDetails)
    //             // below sets the loca for the individual restaurant page on the map
    //             props.setZoom ({
    //                 zoomIn: true,
    //                 zoom: 20,
    //                 center: [restaurantDetails.latitude, restaurantDetails.longitude]
    //             });
    //         });
    //     }
    // });

    return(
        <>
        <div id= "restaurant-info-container">
            <h2 id= "rest-directory">
                Restaurant Information
            </h2>
            <div id= "rest-details">
                <h3 className="rest-specs">{info.name}</h3>
                <h3 className="rest-specs">{info.address}</h3>
                <h3 className="rest-specs">{info.phone}</h3>
                <h3 className="rest-specs">{info.website}</h3>
                <h3 className="rest-specs">{info.hours}</h3>
                <h3 className="rest-specs">{info.cocktail}</h3>
                <h3 className="rest-specs">{info.entree}</h3>
                <br />
                <h4>Additional Notes:</h4>
                <h4 className= "notes">{info.notes}</h4>
            </div>

            {/* form section for the reviews to be added and stored */}
            <div id = "reviews">
                <h2>Add a Review!</h2>
                <div id= "add-review">
                   {/* the restaurant comment / review form */}
                   <form
                   id = "post-review"
                   method = "POST"
                   action = {`/note/${restInfo}`}>

                       <textarea
                       id= "textarea"
                       name = "body"
                       placeholder = "Add your review here...">

                       </textarea>
                       <input
                       id= "submit"
                       type= "submit"
                       name= "comment" />
                   </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Restaurants;

