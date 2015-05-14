var fs = require('fs');

//console.log(process.argv[1]);

process.argv.forEach(function(x){
	if(x.indexOf(".txt") != -1)
		console.log(fs.readFileSync(x,"utf8").toString().split('\n').length - 1);
})