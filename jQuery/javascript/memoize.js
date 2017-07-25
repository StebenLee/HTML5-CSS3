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
