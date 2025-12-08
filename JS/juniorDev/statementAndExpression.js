/*
 Any code you write in JS
 is composed of statements and expression:

*/

/*
 Expression: Any valid unit of code that produces
 a value: 
 * expression are evaluated to yield a result

*/

/*
1. Comparison operation 2
    -console.log() any comparison 
      operation and see the results
    -create a variable and assign 
      it the comparison operation 
      and console the variable see the result
         
  2. Console.log any operation and see the 
  results.
   - create a variable assing it any oparation 
   and console.log to see the result
*/

console.log(23 > 45); //23>45
console.log(23 === "hello"); //

let compare = 23 > 43 && 34 > 34;
console.log("compare is=", compare); //23 > 43 && 34 > 34

console.log(23 + 21 * 23 * 45);
let operation = 23 + 21 * 23 * 45;
console.log("Operation is ", operation);

/*
  Excerise of expression
  3.create a function <any name you like>
  console.log the function call and see what you 
  get. 
     - make the function not return anything:
     - make the function return a number
     - make the function return a string
  Assign the function call to a variable and
  console the variable.
     - make the function not return anything:
     - make the function return a number
     - make the function return a string
*/
let k = 34 + 20; //console 54
function myFunc() {
  let a = 24;
  let b = 34;
  let sum = a + b;
  console.log("mu function");
  return "cool string";
}
// previous ho
console.log(myFunc());

let myVar1 = myFunc();
console.log("my var1 is=", myVar1);

let myString = `${34 + 20} and say
 ${myFunc()} ${myFunc() + " anything"}
  ${23 * 34 + 23 + 234 + myFunc()}
 `;
console.log(myString);

//if you create a template
// in code ${expression}
/*
  in a template string use expression inside the
  ${}
*/

/*
  Statement do not return a value:
  they define an action to be carried out. 
  at times statements are a block of code

  *console.log a statement does not work well.
*/

/*
 Staments exercise
  1. declare a variable /statement
    - console the variable declaration:error
  2.create an if condition
     -console the if condition
  3.create a function :statement
    -console.log the function name
  4. create a variable and assign it the function name
     -console.log the variable
*/

let myvar3 = 23; //variable declaration

if (true) {
}
function thisFunc() {
  let a = 23;
  let b = 34;
  let sum = a + b;
}

console.log(thisFunc);
let myVar34 = thisFunc;

console.log(myVar34); //stament
