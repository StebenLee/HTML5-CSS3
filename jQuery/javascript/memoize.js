Function.prototype.memoize = function() {
  let self = this, cache = {};
  return function(arg) {
  	if(arg in cache) {
  	  console.log("Cache hit for " + arg);
  	  return cache[arg];
  	} else {
  	  console.log("Cache miss for " + arg);
  	  return cache[arg] = self( arg );
  	}
  }
}

function fooBar (a) {

}

var memoFooBar = fooBar.memoize();
memoFooBar(1);
memoFooBar(1);
memoFooBar(2);
memoFooBar(2);

//fib
var memoizer = function (memo, fundamental) {
  var shell = function (n) {
    var result = memo[n];
    if (typeof result !== 'number') {
      result = fundamental(shell, n);
      memo[n] = result;
    }
    return result;
  };
  return shell;
};

var fibonacci = memoizer([0, 1], function (shell, n) {
  return shell(n - 1) + shell(n - 2);
});

var factorial = memoizer([1, 1], function (shell, n) {
  return n * shell(n - 1);
});

console.log(fibonacci(10));
