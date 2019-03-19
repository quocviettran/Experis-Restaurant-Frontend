const r = require("express").Router();


// Review
r.get("/review/resturant/:id", (req, res) => {
    res.send(`Checked reviews for Resturant id: ${req.params.id}`);
});

// Get latest review
r.get("/review/latest", (req, res) => {
    res.send("latest review...");
});

// review update
r.post("/review/update", (req, res) => {
    res.send("Updated...");
});


// Create review
r.post("/review/create", (req, res) => {
    res.send("Created...");
});

module.exports = r;
