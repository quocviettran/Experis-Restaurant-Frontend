const r = require("express").Router();
const conn = require("./db");

// Resturant
r.get("/restaurant/:id", (req, res) => {
    conn.query(
      `SELECT * from restaurant where restaurant_id=${req.params.id}`,
      (err, result) => {
        res.json(result);
      }
    );
});

// Create Restaurant
r.post("/restaurant/create", (req, res) => {
    res.send("Created...");
});

// Update Resturant
r.post("/restaurant/update", (req, res) => {
    res.send("Updated...");
});

module.exports = r;