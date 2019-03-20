const r = require("express").Router();
const conn = require('./db');


// User
r.get("/user/:id", (req, res) => {
    conn.query(`SELECT * from USERS where user_id=${req.params.id}`, (err, result) => {
        res.json(result);
    });
});

// All Users
r.get("/user/", (req, res) => {
    conn.query(`SELECT * from USERS`, (err, result) => {
        res.json(result);
    });
});


// Create user
r.post("/user/create", (req, res) => {
    conn.query(
      `INSERT INTO USERS (username, password, email,role, created_at,updated_at,active)`
        + `VALUES ('${req.body.username}' , '${req.body.password}','${req.body.email}',${req.body.role},CURRENT_DATE,CURRENT_DATE,${req.body.active});`,
        (err,result)=>{
            res.end('Successfully created');
        });
});

// Update user
r.post("/user/update", (req, res) => {
    conn.query(`UPDATE USERS set username = 'HALLO' WHERE user_id = ${req.body.user_id}`, (err,result) =>{
        res.send("SUCCESS");
    });
});


module.exports = r;
