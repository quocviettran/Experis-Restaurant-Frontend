const r = require("express").Router();


// User
r.get("/user/:id", (req, res) => {
    res.send(`USER ID: ${req.params.id}`);
});

// Create user
r.post("/user/create", (req, res) => {
    res.send("Created...");
});

// Update user
r.post("/user/update", (req, res) => {
    res.send("Updated...");
});


module.exports = r;
