const express = require("express");
const path = require('path');
// Set up the express app
const app = express();
// get all todos
const user = require("./routes/userController");
const review = require("./routes/reviewController");
const resturant = require("./routes/resturantController");

app.use("/", user);
app.use("/", review);
app.use("/", resturant);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});