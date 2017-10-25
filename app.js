var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost:2021/3-D_matrix', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
});

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

var matrixController = require('./controllers/3-D_matrix');

// API routes
var matrix = express.Router();

matrix.route('/matrix')
  .post(matrixController.createMatrix);

matrix.route('/matrix/:id')
  .put(matrixController.updateMatrix)
  .post(matrixController.operateMatrix);

app.use(matrix);



app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });