const express = require('express');
var bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
})


app.get("/contact", function(req, res) {
    res.send("Contact me at vipul@gmail.com");
})


app.get("/about-me", function(req, res) {
    res.send("Hello, My name is Vipul Chauhan and I'm an Software Engineer at Anubudh EdTech!!");
})



app.listen(port, function () {
    console.log(`Server is running on ${port}`);
});