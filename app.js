const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
// Set up the express app
const app = express();
app.use(bodyParser.json());

// Get all todos
const user = require("./routes/userController");
const review = require("./routes/reviewController");
const resturant = require("./routes/resturantController");

// Apply routes
app.use("/", user);
app.use("/", review);
app.use("/", resturant);


// Run server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});