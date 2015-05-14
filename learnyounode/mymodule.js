var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
	fs.readdir(dir, function(err,list){
		
		if(err) return callback(err);

		list = list.filter(function(x){
			return path.extname(x) === '.' + ext;
		});

		callback(null, list);
	});
};

