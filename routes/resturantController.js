const r = require("express").Router();


// Resturant
r.get("/resturant/:id", (req, res) => {
    res.send(`USER ID: ${req.params.id}`);
});

// Create Resturant
r.post("/resturant/create", (req, res) => {
    res.send("Created...");
});

// Update Resturant
r.post("/resturant/update", (req, res) => {
    res.send("Updated...");
});

module.exports = r;