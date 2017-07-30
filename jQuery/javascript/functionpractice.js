var orderCount = 0;
function takeOrder(topping, crustType) {
  orderCount++;
  console.log('Order: '+ crustType +' crust pizza topped with'+ topping);
  console.log(getSubTotal(orderCount));
}

function getSubTotal (itemCount) {
  return itemCount*7.5;
}

function getTax () {
  return getSubTotal(orderCount)*0.06;
}

function getTotal () {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin');

takeOrder('egg', 'meaf');
takeOrder('beef', 'mogo');
takeOrder('slive', 'mushroom');
console.log(getTotal());
//----------Method invocation Pattern
var myObject = {
  value: 0,
  increment: function (inc) {
  	this.value += typeof inc === 'number' ? inc : 1;
  }
}

myObject.increment();
console.log(myObject.value);//1

myObject.increment(2);
console.log(myObject.value);//2

//Arguments

var sum = function() {
  var i, sum = 0;
  for (i = 0; i< arguments.length; i+=1) {
  	sum += arguments[i];
  }
  return sum;
}

console.log("Arguments Sum "+sum(4, 8, 15, 16, 23, 42));

//Exception (throw will interupt function)
//

var add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
  	throw {
  	  name: 'TypeError',
  	  message: 'add needs numbers'
  	};
  }
  return a + b;
}
// if an exception is thrown within a try block, control will go to its catch clause.
var try_it = function() {
  try {
    add("seven");
  } catch(e) {
    console.log(e.name + ' : ' + e.message);
  }
}
try_it();

//recursion
var hanoi = function (disc, src, aux, dst) {
  if (disc > 0) {
  	hanoi(disc - 1, src, dst, aux);
  	console.log('Move disc' + disc + ' from ' + src + ' to ' + dst);
  	hanoi(disc - 1, aux, src, dst);
  }
};

hanoi(3, 'Src', 'Aux', 'Dst');

//Treenode
var walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
  	walk(node, func);
  	node=node.nextSibling;
  }
};

var getElementsByAttribute = function (att, value) {
  var results = [];

  walk_the_DOM(document.body, function (node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });
  return results;
}
