var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var matrixSchema = new Schema({
  id: { type: String },
  x:  { type:  Number },
  y:  { type:  Number },
  z:  { type:  Number },
  w:  { type:  Number } 
});

var infoMatrixSchema =new Schema({
	id: { type: String },
  	w:  { type:  Number }  
});

module.exports = mongoose.model('matrix', matrixSchema);
module.exports = mongoose.model('infoMatrix', matrixSchema);
