/*explanations of bind, apply and call function
  1. call and apply are similar 
    call a function with a given value, and return the return value of that function
    differneces are call allows you to pass in arguments one by one, apply allows you to pass in arguments as an array
    
  2. bind  
    bind return a new function allowing you to pass in a this array and any number of arguments.
    It's usually used when you want to pass a function to an event handler or other async callback
the refernce: https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
        https://stackoverflow.com/questions/15677738/whats-the-difference-between-call-apply-and-bind
*/

//1. call attaches this into function and executes the function immediately.
var person = {
    name: "James Smith",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}

person.hello("world");
person.hello.call({ name: "Jim Smith" }, "world");

//2. apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time.
function personContainer() {
    var person = {
        name: "James Smith",
        hello: function(thing) {
            console.log(this.name + " says hello " + arguments[1]);
        }
    }
    person.hello.apply(person, arguments);
}

personContainer("world", "mars");

//3.bind attaches this into function and it needs to be invoked separately like this
var person = {
    name: "James Smith",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}
person.hello("world");
var helloFunc = person.hello.bind({ name: "Jim Smith" });
helloFunc("world");

//the other way to implemnet bind()

var helloFunc2 = person.hello.bind({ name: "d Rushall" }, "world");
helloFunc2();

Function.method('bind', function(that) {
    // Return a function that will call this function as 
    // though it is a method of that object.
    var method = this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
        
    return function() { 
      return method.apply(that,
       args.concat(slice.apply(arguments, [0]))); 
    };
});

var x = function() { return this.value; }.bind({ value: 666 });
alert(x()); // 666