var Person = function (fname) {
  this.firstname = fname;
};

Person.prototype.sayHello = function () {
  console.log("Hello I\'m " + this.firstname);
};

var a = new Person("alice");
var b = new Person("wang");
a.sayHello();
b.sayHello();
