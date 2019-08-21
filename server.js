//npm install body-parser --save

//Create Instance
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.get('/', function (rqe, res) {
    res.sendFile(__dirname + '/index.html');
});
app.post('/data', function (req, res) {
    console.log(req.body.username);
    console.log(req.body.userage);
    res.send('Thank You')
})
app.listen(8080);