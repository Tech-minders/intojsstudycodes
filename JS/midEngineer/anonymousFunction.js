/*
 Named function => function with name
  function <name> (){}
*/
//Named function

/*
 Anonymous function
 --> function without a name
 --> Statement ->
  when you assing a variable to function
*/

//Anonymous sice it doesnt have a name
//If you decide give it a name
// The name is useless.
const AC = function (radius) {
  let area = 3.142 * radius * radius;
  return area;
};

// console.log("AreaCircle(11)", areaCircle(11));
console.log("AC(11)", AC(11));
console.log(AC);

//AC= function itself which is AC
//
/*
  1.Create a NAMED function to calculate
  the area of a circle. Take radius as the 
  parameter
  2.Create variable in my case AC.
   assign this variable to the 
   function name Above.
   -call the original function pass a 
   radius and console.log results
   -call now AC ie your variable
   give it the same radius and see the 
   results
 3.instead of assign AC to the funciton name
  Assing it to the function itself
   -call the origian function pass a 
   radius and console.log results
   -call now AC ie your variable
   give it the same radius and see the 
   results
 4. Remove the name of the functon so 
    that the function is anonymous.
   -call now AC ie your variable
   give it the same radius and see the 
   results *  anonymous function 
    that does not have a name

*/
