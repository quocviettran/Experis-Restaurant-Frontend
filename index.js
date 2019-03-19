const express = require("express");
const app = express();

// Routes
const user = require("./routes/userController");
const review = require("./routes/reviewController");
const resturant = require("./routes/resturantController");

app.use("/", user);
app.use("/", review);
app.use("/", resturant);


app.listen(3001);