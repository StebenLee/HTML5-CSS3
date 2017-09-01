//the reference http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});

//forEach is a callback function it return a function, 
//it call a function with 3 parameters(currentValue, index, array)
//arr.forEach(callback[, thisArg])
//eachName is the