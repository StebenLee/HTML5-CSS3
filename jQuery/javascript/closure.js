function test(a) {
 a +=1;
 function inner() {
   var b=2;
   return a*b;
 }
 return inner();
}

console.log(test(10)); //return 10

function testb(a) {
  return function(b) {
    return b+a;
  }
}

var fn = testb(10);
console.log(fn(20));//return 30

function makeAdder(x) {
  var x = x;
  return function(y) {
  	x += y;
  	return x;
  }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));//retrun 7
console.log(add10(2));//return 12
console.log(add5(4));//return 9
console.log(add5(2).x);//undefined, because the scope is different
//Closure is like object oriented programming. It make property and function have relationship

//this doesn't work
var myObject = function () {
  var value = 0;

  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
      return value;
    }
  };
}();

//quo function

var quo = function (status) {
  return {
    get_status: function () {
      return status;
    }
  };
};
// an instance of quo

var myQuo = quo("amazed");
console.log(myQuo.get_status());

//The DOM practice

var fade = function (node) {
  var level = 1;
  var step = function () {
    var hex = level.toString(16);
    node.style.backgroundColor = '#FFF' + hex + hex;
    if (level < 15) {
      level += 1;
      setTimeout(step, 100);
    }
  };
  setTimeout(step, 100);
};

//fade(document.body);