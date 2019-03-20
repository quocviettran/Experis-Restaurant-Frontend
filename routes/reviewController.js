const r = require("express").Router();
const conn = require("./db");


// Review
r.get("/review/restaurant/:id", (req, res) => {
    conn.query(`SELECT * from review where review_id=${req.params.id}`, (err, result) => {
        res.json(result);
    });
});

// Get 5 latest review
r.get("/review/latest", (req, res) => {
    conn.query(`SELECT * from review where review_id=${req.params.id} LIMIT 5`,(err, result) => {
        res.json(result.rows);
      });
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
