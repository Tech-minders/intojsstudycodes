/*If
  else
  else if
*/

/*
   if:(syntax)
   if(condition){
   ///block of code
   // reset of your code
   //This code will only get executed
   // if the condition is truthy://true is part of truthy()
   }
*/

/*
   if(<true or truthy>){
      --> This code will be executed
   }

   if(<false or falsey>){
      --> This code will not be executed
   }

*/
/*
 falsey:
   null,
   undefined,
   false,
   0,
   -0,
   "":empty sring
   NaN
*/
/*
  truthy:
    true,
    not an empty:"this is not empty"
    number apart from 0 and -0 is truthy
*/

/*
 else-> you canot use it by itself
 else-> uset it if you already have if or have  else if 
 else ->does not take any conditions
 else{
      // if you dont buy milk
      // buy honey
    }
*/
// let myVar = 23; //falsey value
// // myVar===true

// if (myVar) {
//   console.log("If function is executing");
//   console.log(`My var is truthy= ${myVar} and the type is ${typeof myVar} `);
// } else {
//   //optional
//   console.log("Else my var is falsey");
//   console.log(`My var is falsey= ${myVar} and the type is ${typeof myVar} `);
// }

/*
 where you use multiple if statements
*/
let teenAge = prompt("Enter your age:");
//typeof
console.log(`You entered ${teenAge}, and its type is ${typeof teenAge}`);
// string -> number
// if (multiple)statements ->
// if and else if
//type conversion -> teenAge to a number
let newTeenAge = Number(teenAge); //parseInt()
console.log(
  `new converted teenAge is ${newTeenAge}, and its type is ${typeof newTeenAge}`
);
//If it can be converted a number ->
//if it cant be converted NaN
if (newTeenAge) {
  //Will execute only if  entered teenAge is a number
  console.log("Hurray newTeenAge converted succefully");

  /*
    if and else if 
    Chain: (it will exit after the first execution)
    if(independent)
    // else is not independent if or an else if
    // else if not independent you need an if
  */

  // newTeenAge=11
  // 11<12:true

  // two ways
  //1.Constrint the if statement
  //2.Use else if: it will exit after getting the first truth
  //  <= < =, ==, ===
  // !== ! =
  if (newTeenAge < 12) {
    alert(`${newTeenAge} is  to young`);
  } else if (newTeenAge < 18) {
    alert(`${newTeenAge} you are a teenager`);
  } else if (newTeenAge < 30) {
    alert(`At this age ${newTeenAge} you can 
      drink alcolh and have fun`);
  } else if (newTeenAge < 45) {
    alert(`At this age ${newTeenAge} Clock is ticking
       you need to marry or get married
      `);
  } else if (newTeenAge < 70) {
    alert(`At this age ${newTeenAge} You are an ancestor`);
  }
}
