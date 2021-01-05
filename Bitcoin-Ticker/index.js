const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD";

app.post("/", function (req, res) {

    request(url, function(error, response, body) {
            var data = JSON.parse(body);
            var price = 
    });
});

app.listen(3000, () => console.log('server is running at 3000'));
