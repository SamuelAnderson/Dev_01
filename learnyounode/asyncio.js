var fs = require('fs');

//console.log(process.argv[1]);

process.argv.forEach(function(x){
	if(x.indexOf(".txt") != -1){
		var lines = fs.readFile(x,"utf8",function(err,data){
			console.log(data.toString().split('\n').length - 1);			
		});

	}
})