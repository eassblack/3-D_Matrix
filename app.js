var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost:27017/DBmatrix', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/matrix')(app, mongoose);
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