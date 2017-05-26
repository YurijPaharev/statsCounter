module.exports = function (arrayOne, param, arrayTwo) { 
	for (var j=0; j<arrayOne.length; j++) {
		if (param == arrayOne[j]) {
			return arrayTwo[j];
		} else if (param < arrayOne[j] && param > arrayOne[j-1]) {
			return (((param-arrayOne[j-1])*(arrayTwo[j]-arrayTwo[j-1]))/(arrayOne[j]-arrayOne[j-1]))-(-arrayTwo[j-1]);
		} else if (param > arrayOne[arrayOne.length-1]){
			return arrayTwo[arrayTwo.length-1];
		} else if (param < arrayOne[0]){
			return arrayTwo[0];
		}
	}
}