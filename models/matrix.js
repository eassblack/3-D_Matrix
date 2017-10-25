var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var matrixSchema = new Schema({
  id: { type: String },
  x:  { type:  Number },
  y:  { type:  Number },
  z:  { type:  Number },
  w:  { type:  Number } 
});

module.exports = mongoose.model('matrix', matrixSchema);

