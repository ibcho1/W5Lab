var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static('images'));
app.use(express.static('css'));



app.get('/', function (req, res) {
    let randomId = Math.round(Math.random() * 100);
    res.render('index.html', { username: "admin",id: randomId});
});
app.listen(8080);