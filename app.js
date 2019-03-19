const express = require("express");
const path = require('path');
// Set up the express app
const app = express();
// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});
const PORT = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});