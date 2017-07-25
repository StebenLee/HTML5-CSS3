/* 5 different data types that can contain value
   String/Number/Boolean/Object/Function
   3 types of objects
   Object/Date/Array
   2 types that cannot containe values
   null/undefined 
   https://www.w3schools.com/js/js_type_conversion.asp  */

   console.log(typeof "John") //String
   console.log(typeof 3.14) //Number
   console.log(typeof NaN) //Number
   console.log(typeof false) //Boolean
   console.log(typeof [1,2,3,4]) //Object
   console.log(typeof {name: 'John', age: 34}) //Object
   console.log(typeof new Date()) //Object
   console.log(typeof function() {}) //Function
   console.log(typeof myCar) //undefined
   console.log(typeof null) //Object

   //Yoy cannot use typeof to determine if a javascript object is an array or a date
   /*The data type of Nan is number
     The data type of an array is object
     The data type of a date is object
     The data type of null is object,too.
     The data type of an undefined variable is undefined ***
     The data type of a variable that has not been assigned value is undefined*** */ 

//Javascript's Automatic Type Conversion
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns 52        because 2 is converted to "2"
"5" - 2     // returns 3*         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
"5" / "2"   // return 2.5* 