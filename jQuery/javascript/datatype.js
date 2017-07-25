/* 5 different data types that can contain value
   String/Number/Boolean/Object/Function
   3 types of objects
   Object/Date/Array
   2 types that cannot containe values
   null/undefined 
   https://www.w3schools.com/js/js_type_conversion.asp  */

   console.log(typeof "John") //String
   console.log(typeof 3.14) //Number
   console.log(typeof Nan) //Number
   console.log(typeof false) //Boolean
   console.log(typeof [1,2,3,4]) //Object
   console.log(typeof {name: 'John', age: 34}) //Object
   console.log(typeof new Date()) //Object
   console.log(typeof function() {}) //Function
   console.log(typeof myCar) //undefined
   console.log(typeof null) //Object

   //Yoy cannot use typeof to determine if a javascript object is an array or a date