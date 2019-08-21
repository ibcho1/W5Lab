//npm install body-parser --save


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.get('/', function (rqe, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(8080);