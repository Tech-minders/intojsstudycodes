/*
 Special type of function.
 1.It takes a function as parameter 
   
 
*/

/*
  JS Callback Inbuilt . Time manupulation library

*/

/*
  setTimeout(function,long)-> 
  @param 1=> function
  @param number => miliseconds 
*/

/*
  Create a function that alerts
  us Hello Welcome to my website
*/

/*Named,arrow*/

/*
 Instead of greating this person
 immediealty .
 I want to do it after 3 seconds
 seconds to miliseconds ->
*/

/*
  Task making a welcome message 
   to your website. Not run immediatly
   1. Undestand the setTimout function.
      setTimeout(@param1,@param2)
      @param=> function which will be called
      @param=> Number which is in milliseconds delay
   2.Create your welcome function 
      <arrrow or named function> with 
      an alert with a welcome message.
      -> call your function to ensure it works
   3.create a timeout variable to store 
     the number of milliseconds ie
     5 seconds => 5*1000
   4.call the setTimeout function
    pass the required parameters
     setTimeout(function,time)
*/

/*
  Make things intersting
   1. Cut the function whole function and paste 
    it where you hade the welcomeMessage function name
    - see if it still works
    - call the original function and see the result.Error
  2. Make the function anonymous
     - see if it still works
  3. Make the function an arrow function
     without assigning it to variable
      remove the function keyword and 
      add an arrow after ()
*/

let timeout = 2 * 1000; // 5 seconds
setTimeout(() => {
  let name = prompt("Enter your name");
  alert(`Welcome ${name} to our website`);
}, timeout);
//convert to an anoynomous

/*
 Research setInterval(functon,2000) every 2 seconds
*/
