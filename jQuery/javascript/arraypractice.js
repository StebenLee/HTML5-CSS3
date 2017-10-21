
function c(a) {
	return function () {
		return 0;
	}
}

function abc() {
	//console.log(1)
const selector = function(c) {
	console.log(6);
	return function () {
		return 25;
	}
}
return selector;
}

abc.apply(null,[1,2])