// ----------- setting up server ---------- //

const express = require("express");
const app = express();
const path = require('path');
// individual restaurant json files within api folder
let restaurantPath = __dirname + "/api/restaurant-data/";
const port = process.env.PORT || 5000;

// json restaurant names
app.get("/api", (req, res) => {
    res.sendFile(restaurantPath + "restaurant-id.json");
});

// json restaurant array data
app.get("/api/restaurant-data", (req, res) => {
    res.sendFile(restaurantPath + "restaurant-data.json")
})

// individual restaurant data that matches the restaurant ID
app.get("/api/:id", (req, res) => {
    console.log(req.params.id);
    res.sendFile(__dirname + `/api/${req.params.id}.json`);
});

app.listen(port, () => {
    console.log(`The NSA is listening on PORT ${port}`);
});


// ---------- Adding Restaurant Reviews ---------- //

// app.post('/note/:restaurant',
// // acts as middleware for the server before it takes the form
// express.urlencoded({extended: false}),
// (req, res) => {
//     let newNote = req.body
//     let restaurantID = req.params.restaurant

//     addComment(restaurantID, newNote, res)
// });

// function addComment(restaurantID, newNote, res) {
//     console.log(restaurantID)
//     // var is assigned to the route to pull that restaurant info
//     let restaurantDataFile = "./api/" + restaurantID + ".json"
//     let restaurantComment = JSON.parse(fs.readFileSync(restaurantDataFile))
//     console.log(restaurantComment)
//     // finally add the new comment / review
//     restaurantComment.notes.push(newNote.body)
//     console.log(restaurantComment)

//     // the notes section should update after new resturants review is added & the stringify should convert js objects to json
//     fs.writeFileSync(restaurantDataFile, JSON.stringify(restaurantComment), () => {
//         res.sendFile(path.resolve('./client/public/index.html'));
//     })
// }