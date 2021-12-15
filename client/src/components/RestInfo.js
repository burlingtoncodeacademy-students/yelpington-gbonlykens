// import styling 

import Atlantikos from "./restaurants/Atlantikos";
// component function that displays each restaurants information
function RestInfo(props) {
    

    return(

        <>
        <div id= "restaurant-info-container">
            <h2 id= "rest-directory">
                Restaurant Information
            </h2>
            <div id= "rest-details">
                <h3 className="rest-specs">Name: {props.restName}</h3>

                <h3 className="rest-specs">Address: {props.infoAddress}</h3>

                <h3 className="rest-specs">Phone: {props.InfoPhone}</h3>

                <h3 className="rest-specs">Website: {props.infoWebsite}</h3>

                <h3 className="rest-specs">Hours: {props.infoHours}</h3>

                <h3 className="rest-specs">House Cocktail: {props.infoCocktail}</h3>

                <h3 className="rest-specs">House Entree: {props.infoEntree}</h3>

                <br />
                <h4>Additional Notes:</h4>
                <h4 className= "notes">Notes: {props.infoNotes}</h4>
            </div>

            {/* form section for the reviews to be added and stored */}
            <div id = "reviews">
                <h2>Add a Review!</h2>
                <div id= "add-review">
                   {/* the restaurant comment / review form */}
                   <form
                   id = "post-review"
                   method = "POST"
                   action = {`/note/${RestInfo}`}>

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

export default RestInfo;

