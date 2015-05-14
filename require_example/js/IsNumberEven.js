define([],function(){

	var mod = mod || {};

	mod = (function(){
		function isEven(num){
			var flag = (num % 2 == 0) ? true : false;
			return flag;
		}

		return{
			isEven : isEven
		}

	})();
	
	return mod;
});