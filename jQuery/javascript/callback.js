//the reference http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

var friends = ["Mike", "Stacy", "Andy", "Rick"];
​
friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick​
});

//forEach is a callback function it return a function, 
//it call a function with 3 parameters(currentValue, index, array)
//arr.forEach(callback[, thisArg])

//make sure callback is a function before executing it
/*function getInput(options, callback) {
    allUserData.push(options);
​
    // Make sure the callback is a function​
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable​
        callback(options);
    }
}*/

//scope is the thing we need to tack care 
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object​
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object​
      this.fullName = firstName + " " + lastName;
    }
}
​//function getUserInput is a global function,
//it will set fullname on the window
​function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here​
​
    // Now save the names​
    callback (firstName, lastName);
}

getUserInput ("Barack", "Obama", clientData.setUserName);
​
console.log (clientData.fullName);// Not Set​
​
​// The fullName property was initialized on the window object​
console.log (window.fullName); // Barack Obama

//multiple callback function
/*
function successCallback() {

}

function completeCallback() {

}

function errorCallback() {

}

$.ajax({
  url:"http://fiddle.jshell.net/favicon.png",
  success: successCallback,
  complete: completeCallback,
  error: errorCallback

});
*/
//callback hell problem and solution
//it's just for demonstartion (a mongodb driver for nodejs)
/*var p_client = new Db('integration_test_20', new Server("127.0.0.1", 27017, {}), {'pk':CustomPKFactory});
//the hell start
p_client.open(function(err, p_client) {
  p_client.dropDatabase(function(err, p_client) {
    p_client.createCollection('test_custom_key', function(err, collection) {
      collection.insert({'a':1}, function(err, docs) {
        collection.find({'_id':new ObjectID("aaaaaaaaa")},function(err, cursor) {
          cursor.toArray(function(err, items) {
            test.assertEquals(1, items.length);

            p_client.close();
          });
        });
      });
    });
  });
});*/

//name the callback function
function genericPoemMaker(name, gender) {
console.log(name + "is better than fine wine");
console.log("A"+ gender + "of unfortunate tragedies who still manages a perpetual smile");

}

function getUserInput(firstName, lastName, gender, callback) {
  let fullName = firstName +" "+ lastName;

  if(typeof callback === function) {
  	callback(fullName, gender);
  }
}

getUserInput("Michael","Fassbender","Man",genericPoemMaker);

function greetUser(fullName, sex) {
  var salutation = sex && sex === "Man" ? "Mr" : "Ms";
  console.log("Hi" + salutation + " " + fullName);
}

getUserInput("Steven", "Lee", "Man", greetUser);
