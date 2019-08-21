var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static('images'));
app.use(express.static('css'));



app.get('/', function (req, res) {
    let randomId = Math.round(Math.random() * 100);
    res.render('index.html', {
        username: "admin",
        id: randomId
    });
});

app.get('/addTask.html', function (req, res) {
    console.log("addTask");
    res.render('addTask.html');
});

app.get('/listTask.html', function (req, res) {
    console.log("listTask");
    res.render('listTask.html');
});


app.listen(8080);