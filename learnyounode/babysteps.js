//learnyounode verify hellowworld.js
//node helloworld.js



var myList = process.argv;
var total = 0;

myList.forEach(function(x){

	total += !isNaN(x) ? Number(x) : 0;

});

console.log(total);