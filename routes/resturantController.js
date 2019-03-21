const r = require("express").Router();
const conn = require("./db");


// SHOW Resturant with id
r.get("/restaurant/:id", (req, res) => {
    conn.query(
      `SELECT * FROM restaurant WHERE restaurant_id=${req.params.id}`, 
    (err, result) => {
        res.json(result.rows);
      });
});

// SHOW Resturant with userid
r.get("/restaurant/user/:id", (req, res) => {
  conn.query(
    `SELECT * FROM restaurant WHERE user_id=${req.params.id}`, 
  (err, result) => {
      res.json(result.rows);
    });
});

// SHOW ALL Restaurants
r.get("/restaurant/", (req, res) => {
  conn.query(
    `SELECT * FROM restaurant`, 
    (err, result) => {
      res.json(result.rows);
  });
});

// CREATE restaurant
r.post("/restaurant/create", (req, res) => {
  console.log(req.body);
  const now = new Date().toISOString();
  conn.query(
    `INSERT INTO restaurant (user_id, name, address, category, description, created_at, updated_at, active)
    VALUES(
      ${req.body.user_id}, 
      '${req.body.name}', 
      '${req.body.address}', 
      '${req.body.category}', 
      '${req.body.description}', 
      '${now}', 
      '${now}',
      1)`,
      (err,result)=>{
        console.log(result);
        if (err) {
          res.send(err);
        } else {
          res.send('Successfully created restaurant');
        }
      });
});

// UPDATE restaurant
r.post("/restaurant/update", (req, res) => {
  const now = new Date().toISOString();
  conn.query(
    `UPDATE restaurant 
      SET restaurant_id = ${req.body.restaurant_id},
          name = '${req.body.name}', 
          description = '${req.body.description}',
          category = '${req.body.category}',
          updated_at = '${now}'
      WHERE user_id = ${req.body.user_id}`,
  (err,result) =>{
    if (err) { 
      res.send(err);
    } else {
      res.end('Successfully updated restaurant');
    }    
  });
});

// DEACTIVATE restaurant
r.post("/restaurant/deactivate/:id", (req, res) => {
  conn.query(
    `UPDATE restaurant
      SET active = 0 WHERE user_id =${req.body.id}`,
  (err, result) =>{
    res.end('Successfully deactivated restaurant');
  });
});

// ACTIVATE restaurant
r.post("/restaurant/deactivate/:id", (req, res) => {
  conn.query(
    `UPDATE restaurant
      SET active = 1 WHERE user_id =${req.body.id}`,
  (err, result) =>{
    res.end('Successfully reactivated restaurant');
  });
});


module.exports = r;