define(["IsNumberEven","exports"], function(IsNumberEven, exports){

	exports.IsAboveFifty = function(){

		var argArray = Array.prototype.slice.call(arguments);

		argArray[0].forEach(function (num){

		var text = (IsNumberEven.isEven(num) == true) ? 
		(num > 50 ) ? "Number is Even and ABOVE 50" : "Number is Even and BELOW 50" : 
		(num < 50 ) ? "Number is Odd and BELOW 50" : "Number is Odd and ABOVE 50";

		console.log(num + " - " + text);

		});
	};

});