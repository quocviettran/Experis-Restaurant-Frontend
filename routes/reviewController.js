const r = require("express").Router();
const now = new Date().toISOString();

// Review
r.get("/review/restaurant/:id", (req, res) => {
    const conn = require("./db");
    conn.query(`SELECT * from review where restaurant_id=${req.params.id}`, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.json(result.rows);
            res.end();
        }
    });
});

// Get 5 latest review
r.get("/review/latest", (req, res) => {
    const conn = require("./db");
    conn.query(`SELECT * from review ORDER BY updated_at DESC LIMIT 5`,
    (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.json(result.rows);
        }
      });
});

// Returns all reviews
r.get("/review", (req, res) => {
    const conn = require("./db");
    conn.query(`SELECT * from review`,
    (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.json(result.rows);
        }
      });
});

/*
* Update review
* Can only update rating and review text
*/
r.post("/review/update", (req, res) => {
    const conn = require("./db");
    conn.query(
    `UPDATE review set 
    rating = ${req.body.rating}, 
    review_text = '${req.body.review_text}',
    updated_at = '${now}',
    active = ${req.body.active} 
    WHERE review_id = ${req.body.review_id}`    
    ,(err,result) =>{
        if(err) {
            console.log(`Review update: ${err}`);
        } else {
            console.table(result);
            res.end();
        }
    });
});


// Create review
r.post("/review/create", (req, res) => {
    const conn = require("./db");
    conn.query(
        `INSERT INTO review (user_id, restaurant_id, rating, review_text, created_at, updated_at) 
        VALUES (
            ${req.body.user_id}, 
            ${req.body.restaurant_id}, 
            ${req.body.rating}, 
            '${req.body.review_text}',
            '${now}', 
            '${now}'
            )`
            , (err,result) => {
              if(err) {
                  res.send(err);
                  res.end();
              } else {
                  res.send(result);
                  res.end();
              }
          });
});

module.exports = r;
