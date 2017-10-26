//File: controllers/3-D_matrix
const mongoose = require('mongoose');
const async = require('async');

const Matrix = mongoose.model('matrix');
const InfoMatrix = mongoose.model('infoMatrix');

exports.operateMatrix = function(req, res) {
	let sum = 0
	var vecI = [], vecJ = [], vecZ = [];
	for (var i = req.body.x1-1; i < req.body.x2 ; i++) {
		vecI.push(i);
	}
	for (var j = req.body.y1-1; j < req.body.y2; j++) {
		vecJ.push(j);
	}
	for (var z = req.body.z1-1; z < req.body.z2; z++) {
		vecZ.push(z);
	}

	async.each(vecI,
	  function(i, callbackI){
	  	async.each(vecJ,
		  function(j, callbackJ){
		  	async.each(vecZ,
			  function(z, callbackZ){
			    Matrix.findOne({id:req.params.id, x: i, y: j, z: z },function(err, value) {
				        if(err){
				        	callbackZ(err);
				    	}
				    	if (value != null){
				    		console.log(value.w)
				    		sum += value.w;
				    		callbackZ();
				    	}else{
				    		callbackZ("error");
				    	}
				    		
		    	});
			  },
			  function(err){
			  	if (err) {
			  		callbackJ(err);
			  	}else{
			  		callbackJ();
			  	}
			  }
			);
		  },
		  function(err){
		  	if (err) {
			  		callbackI(err);
			  	}else{
			  		callbackI();
			  	}
		  }
		);
	  },
	  function(err){
	  	if (err) {
	  		var msj = {'error': "Id " + req.params.id + " not found"};
			res.status(404).json(msj);
	  	}else{
	  		var msj = {'Result': sum};
    		res.status(200).json(msj);
	  	}
	  }
	);
};

exports.updateMatrix = function(req, res) {
	Matrix.findOneAndUpdate({ id: req.params.id, x: req.body.x-1, y: req.body.y-1, z: req.body.z-1 }, { $set: { w: req.body.w } }, function(err, doc) {
		if(err){
        var msj = {'error': "Id " + req.params.id + " not found"};
		res.status(404).json(msj);
    	}
    	if (doc){
    	var msj = {'Result': "Position ("+req.body.x+","+req.body.y+","+req.body.z+") update to "+req.body.w+"."};
    	res.status(200).json(msj);
    	}else{
        var msj = {'error': "Id " + req.params.id + " not found"};
		res.status(404).json(msj);
    	}
	});
};

exports.createMatrix = function(req, res) {
	var id = Math.random().toString(36).substr(2, 5);
	
	var vecI = [], vecJ = [], vecZ = [];
	for (var i = 0; i < req.body.n ; i++) {
		vecI[i] = i
		for (var j = 0; j < req.body.n; j++) {
			vecJ[j] = j
			for (var z = 0; z < req.body.n; z++) {
				vecZ[z] = z
			}
		}
	}
		
	async.each(vecI,
	  function(i, callbackI){
	  	async.each(vecJ,
		  function(j, callbackJ){
		  	async.each(vecZ,
			  function(z, callbackZ){
			  	const matrix = new Matrix({
			      id: id,
			      x: i,
			      y: j,
			      z: z,
			      w: 0,
			    });
			    matrix.save((error, newValue) => {
      				if (error) {
      					callbackZ(error)
      				}
      				callbackZ();
      			});
			  },
			  function(err){
			  	if (err) {
			  		callbackJ(err);
			  	}else{
			  		callbackJ();
			  	}
			  }
			);
		  },
		  function(err){
		  	if (err) {
			  		callbackI(err);
			  	}else{
			  		callbackI();
			  	}
		  }
		);
	  },
	  function(err){
	  	if (err) {
	  		var msj = {'error': "Imposible to create new matrix."};
			res.status(404).json(msj);
	  	}else{
	  		let n = req.body.n
	  		const infoMatrix = new InfoMatrix({
		      id: id,
		      w: n
		    });
		    console.log(infoMatrix)
		    infoMatrix.save((error, newValue) => {
  				if (error) {
			  		var msj = {'error': "Imposible to create new matrix."};
					res.status(404).json(msj);
  				}
		  		var msj = {'Result': {'msj':"Matrix "+req.body.n+"*"+req.body.n+" Created.",
								'id':id}};
	    		res.status(200).json(msj);
  			});
	  	}
	  }
	);

};

exports.getMatrix = function(req, res) {
	InfoMatrix.find({},function(err, value) {
        if(err){
        	var msj = {'error': "Imposible to return matrix info."};
			res.status(404).json(msj);
    	}
    	var msj = {'Result': {'matrixes': value }};
		res.status(200).json(msj);
		    		
    	});
	};