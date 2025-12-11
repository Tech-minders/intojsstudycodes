/*
 For loop:
 -> loop Strart point:initial condition
 -> condtion to stop
 -> increment :<After each itteration/>
----> cleaner and more organized way
------> For Loop, while Loop(verstile:cleanest)
 for(starting_point;condition_stop;increment)
 {
 //}


*/

/*
   Supposed i tel you
   to print the
   statement
   I am a js enginerr
   10 times-> n

   use a for loop:
   ->create a function for this task
     aboutMe(@param)
     -@param:number on the number times

*/

function aboutMe(n) {
  for (let k = 1; k <= n; k = k + 1) {
    console.log("K is ", k);
    let date = new Date();
    let timeStamp = date.toISOString();
    console.log(`I am js Engineer ${timeStamp}`);
  }
}

aboutMe(10);
