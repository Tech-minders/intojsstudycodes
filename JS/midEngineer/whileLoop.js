/*
 LOOPS:
 Enables you to run the same block of code over 
 and over again until an exit condition is met
*/

/*
  Syntax
  while(condition){
   //Block will be executed as long the
   //Over and over
   condition is truthy
  }
   if(condition){
   //Executed once 
   }
*/

/*

   Supposed i tel you
   to print the
   statement
   I am a js enginerr
   10 times-> n

   While loop->

   1.Create a function Name=> aboutMe
     Task 1:print<console.log> I am Js Engineer
     Task 2:get<current Timestamp> JS DATE OBJECT
     Task 3:print<current Timestamp> 

   2.Call the function to check if its working
   3.Using the while loop syntax
     while(condition:true){/execute/}
     put the task1,task2,task3 inside the while loop:
     -for the condition pass true
     -pass false for the condition

    -- FIX THE BUG --- Ensure it executes 
      upto a certain point: 
    4.Make it execute once -> 
      ->! Hint: use the return statement:
      -> ! Hint use the break
      ->Change the condition from true to false after the first exection(Itteration)
     //Difference between break and return
    5.Make it execure N times
    // aboutMe(10) ->  ten times
       --Iterations  k+1=
       --Iteration
*/

/*
  
*/

function aboutMe(n) {
  //Number
  //n==3
  console.log("Before the loop starts"); //
  //let runLoop = true;
  let k = n; //Increment +1
  //k=n k=3 k:3
  while (k !== 0) {
    //1:n==3 k==3 3!==0 true
    //2:n==3 k==2 2!==0 true
    //3:n==3 k==1 1!==0 true
    //3:n==3 k==1 0!==0 false
    k = k - 1; //k=k+1 =0+1= 1
    //k--
    // if (k === n) {
    //   runLoop = false;
    // }
    console.log("K is ", k);
    console.log("I am a js engineer"); //Task 1
    let date = new Date(); //Task 2
    console.log(date.toISOString()); //Task 3
  }
  console.log("After the loop ends");
}

aboutMe(3);
//Edge n-> undefined
// -100 -> if statements
