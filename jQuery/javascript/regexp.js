var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
  console.log(parse_number.test(num));
} 

test('1');
test('number');
test('98.6');
test('132.21.86.100');
test('123.45E-67');
test('123.45D-67');

var parse_A = /^A/;

var testA = function (string) {
	console.log(parse_A.exec(string));
}

testA("an A A");


var re = /\w+/; //equal var re = new RegExp('\\w+');

function make_a_matcher() {
    return /a/gi; 
}


var x = make_a_matcher(); 
var y = make_a_matcher();

x.lastIndex = 10;
console.log(y.lastIndex); //0 cased by scope