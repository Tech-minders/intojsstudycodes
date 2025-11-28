/*
  bundle them 1
  ->1.print i am js developer
  ->2.print i am new to this
  ->3.print so far so good
  ->4. print an empty space
*/

/*
  function Bundle:block of code
  Just the way you could put instruction in
  an if has a block of code that is executed if truthy
  A function is the same but it is executed when you call
  it.
*/

/*
 function systanx
 1:function keyword.
 2:name //follow the variable naming rules->
 3:() //round brackets parameters its optional
 4:{} //Block curly rest of your code
 function <name:follow variable rules> (<parameters:option>){
    ///
 }
 
*/
//Declare a function:<Giving birth to function:creating>
//Do it only once
function introduction() {
  //Rest of your code goes here
  console.log("I am a js developer");
  console.log("I am new to this");
  console.log("so far so good");
  console.log("");
}

//Calling a function:Do your work
//You can repeat function as many times as you want

//in order to use a function
//you need to call it:do your work
// if you dont call a function
// then the code block is not executed {}

/*
  call funciton :execute do your work
  1.start name of function
  2.() //if function requires arguments/paramters pass them
*/
// introduction();
/*
Browser you can bind it to a button
 button in html -> in js to execute
*/

/*
 why use a function
 and not just 
*/
/*
 create a function with the following instructions
   ->1.print i am js developer
  ->2.print i am new to this
  ->3.print so far so good
  ->4. print an empty space
 check if the function is executing:should not execute
 -> call your function once And check if its executing
 -> call your function 5 times.
*/

//Takes no parameters.
//takes some parameters
//The area of any circle you need to have radius
/*
  //follow our rules.we are going to console 
  log every instruction
  1.Create a function that calculates the area of a circle
  2.Use type to check if input is valid
  3.Calculate the area of the circle
*/
//radius->parameter , ,c
function areaCircle(radius) {
  console.log(`Parameter radius is = ${radius}`);
  console.log(`Type of radius is = ${typeof radius}`);
  let numberRadius = Number(radius);

  //NaN
  if (numberRadius) {
    console.log(`Radius is a number`);
    const area = 3.142 * numberRadius * numberRadius;
    console.log(`For a circle of radius
       ${radius} Area is ${area}`);
  } else {
    console.log(`Radius is not a number`);
  }
}
//Takes :calling function senario
/*
  1:you forget to give a parameter
  2: give it a number as radius
  3:create a variable and pass it as the paremeter
  4:give a string paremeter to your function
  5:create a variable (string) and give the function the string
*/

//Passing multiple arguments to a functin
//Function has multiple parameters
/*
   //sum is function (a,b){}
   1.Create function
   2.Have the parametes: num1,num2
   3.Checki your parameters are ok.
   4.Check their types
   5.calculate the sum
*/

function sum(num1, num2) {
  console.log(`Num1 is =${num1} its type is ${typeof num1}`);
  console.log(`Num2 is =${num2} its type is ${typeof num2}`);

  let convertedNum1 = Number(num1);
  let convertedNum2 = Number(num2);
  // ! = =
  // 0==0 true ||false =>true
  //||
  if (
    (convertedNum1 === 0 || convertedNum1) &&
    (convertedNum2 === 0 || convertedNum2) &&
    typeof num1 !== "boolean" &&
    typeof num2 !== "boolean"
  ) {
    let sum = convertedNum1 + convertedNum2;
    console.log(`The sum of ${convertedNum1}+${convertedNum2}=${sum}`);
  } else {
    console.log(`Ensure your input are numbers`);
  }
}
//trapezium a,b,h
/*
  call your function giving it.
  1.Forget parameters
  2.put the the first paremeter only seconde empty
  3.put both paremeters as numbers
  4.Test other(bool,string,null) mix and match
*/

sum(100, 0);
/*
--->Edge Cases my function would fail
---> if any of the arguments are boolean ensure parameters are not boolean
---> if the arguments num1 or num2 ==>falsey
*/


//return -->