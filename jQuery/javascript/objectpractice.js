var Mammal = function(name) { this.name = name; };
Mammal.prototype.get_name = function() { return this.name; };
Mammal.prototype.says = function() { return this.saying || ''; };

var Cat = function(name) {
    this.name = name;
    this.saying = 'meow';
};
// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();
// Augment the new prototype with // purr and get_name methods.
Cat.prototype.purr = function(n) { var i, s = ''; for (i = 0; i < n; i += 1) { if (s) { s += '-'; } s += 'r'; } return s; };
Cat.prototype.get_name = function() { return this.says() + ' ' + this.name + ' ' + this.says(); };
var myCat = new Cat('Henrietta');
//var says = myCat.says(); 


// 'meow' var purr = myCat.purr(5); 

// 'r-r-r-r-r' var name = myCat.get_name(); 
var name = myCat.get_name();
console.log(name);
//            'meow Henrietta meow'

var mammal = function(spec) {
    var that = {};
    that.get_name = function() { return spec.name; };
    that.says = function() { return spec.saying || ''; };
    return that;
};
var myMammal = mammal({ name: 'Herb' });
console.log(myMammal.get_name());
