const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const { static } = require('express');

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function (req, res) {
    let fName = req.body.fName;
    let lName = req.body.lName;
    let email = req.body.email;
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});



// 22037c09ae81f9e92c863fba9841cd20-us7 Api Key