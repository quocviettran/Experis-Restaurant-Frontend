const r = require("express").Router();
const conn = require('./db');

// User
r.get("/user/:id", (req, res) => {
    conn.query(`SELECT * from USERS where user_id=${req.params.id}`, (err, result) => {
        res.json(result);
    });
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
