/*
 the return statement is only used 
 inside a function.
 The return of a function has two use cases.
 1.It exists the function.at any point required
    when you have the return statement inside a funciton
    this is where it will exit
 2.It is also used to return a value(datatype).
*/

//1. The return exits the function
function introduction() {
  //Rest of your code goes here

  console.log("I am a js developer");
  console.log("I am new to this");
  console.log("so far so good");
  console.log("");
}

//Step 1.
// function calling another function
function promptForAge() {
  let teenAge = prompt("Enter your age:");
  console.log(`teen Age ${teenAge}`);
  ageMessage(teenAge);
}
//lego []->something
//Step 2
function ageMessage(age) {
  console.log(`age is ${age} type of age is ${typeof age}`);
  let ageNumber = Number(age);

  // if (){}else{}
  //NaN-> falsey -> !NaN =true
  if (!ageNumber) {
    alert(`Age is not a number its ${ageNumber}`);
    return;
  }

  if (ageNumber < 12) {
    alert(`${ageNumber} is  to young`);
    return;
  }

  if (ageNumber < 17) {
    alert(`${ageNumber} you are teenager`);
    return;
  }

  if (ageNumber < 25) {
    alert(`${ageNumber} you can dring legally`);
    return;
  }

  if (ageNumber < 35) {
    alert(`${ageNumber} Just marry`);
    return;
  }

  if (ageNumber < 55) {
    alert(`${ageNumber} You are an ansetor`);
    return;
  }

  alert(`${ageNumber} You are a fossil`);
}
