const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.send("Hello Your app is up and running.");
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
})