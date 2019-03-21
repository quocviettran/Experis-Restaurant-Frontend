const r = require("express").Router();
const conn = require('./db');

/*
// User
r.post("/login", (req, res) => {
    conn.query(`SELECT * from USERS where username='hello'`, (err, result) => {
        if(err){
            res.send(err);
        }else{
            const dbUser = result.rows;
            console.log(dbUser);
            if(dbUser.password == req.body.password) {
                res.cookie({
                    user_id: dbUser.user_id,
                    username: dbUser.username,
                    email: dbUser.email,
                    role: dbUser.role           
                }).send('Login success! Cookie created');
            }
        }
        
    });
});
*/

r.post("/login", (req, res) => {
    conn.query(`SELECT * from USERS where username='${req.body.username}'`, (err, result) => {

        if(err) {
            res.send(err);
        } else {
            const dbUser = result.rows[0];
            if(dbUser.password == req.body.password) {
                res.cookie({
                    user_id: dbUser.user_id,
                    username: dbUser.username,
                    email: dbUser.email,
                    role: dbUser.role           
                }).send('Login success! Cookie created');
            }
        }
    });
});


module.exports = r;
