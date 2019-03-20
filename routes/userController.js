const r = require("express").Router();
const conn = require('./db');
const now = new Date().toISOString();

// User
r.get("/user/:id", (req, res) => {
    conn.query(`SELECT * from USERS where user_id=${req.params.id}`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            res.json(result.rows[0]);
        }
        
    });
});

// All Users
r.get("/user/", (req, res) => {
    conn.query(`SELECT * from USERS`, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.json(result.rows);
        }
    });
});


// Create user
r.post("/user/create", (req, res) => {
    conn.query(
      `INSERT INTO USERS (username, password, email,role, created_at,updated_at,active) VALUES ('${req.body.username}','${req.body.password}','${req.body.email}',${req.body.role},'${now}','${now}',1);`,
        (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send("Successfully created");
            }
        });
});

// Update user
r.post("/user/update", (req, res) => {
    conn.query(`UPDATE USERS set username = '${req.body.username}', password = '${req.body.password}', email = '${req.body.email}' , updated_at = ${now} WHERE user_id = ${req.body.user_id}`, (err,result) =>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Successfully updated");
        }
        
    });
});


module.exports = r;
