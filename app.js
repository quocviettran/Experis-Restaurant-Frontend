const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// Set up the express app
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Get all todos
const user = require("./routes/userController");
const review = require("./routes/reviewController");
const resturant = require("./routes/resturantController");

// Apply routes
app.use("/", user);
app.use("/", review);
app.use("/", resturant);


// Run server
app.listen(process.env.PORT || 8080);