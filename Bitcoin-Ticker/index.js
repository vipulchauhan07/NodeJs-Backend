const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    
    const crypto = req.body.crypto;
    const fiat = req.body.fiat;

    var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + fiat;

    request(url, function(error, response, body) {
            var data = JSON.parse(body);
            var price = data.last;
            res.write(new Date());
            res.write('<h1>' +'The current price of' + crypto + "is" + price + '</h1>' + fiat);
            res.send();
    });
});

app.listen(3000, () => console.log('server is running at 3000'));
