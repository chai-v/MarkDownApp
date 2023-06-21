var express = require('express');
var app = express();

app.set('view engine','ejs');

app.use(express.static(__dirname+'/public'))

app.get("/",(req,res)=>{
    res.render('pad');
});

app.get("/:id",(req,res)=>{
    res.render('pad');
});

var sharejs = require('share');
require('redis');
sharejs.server.attach(app, options);

var options = {
    db:{type: 'redis'},
};


console.log("started")
var PORT = process.env.PORT || 6379
app.listen(PORT)
