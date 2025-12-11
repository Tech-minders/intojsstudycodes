/*
 We to create a computer program
 That -> creates a file 
      --> Add some text into the file
      --> Pay 3k to stop the hack :
      while loop 
      --> Endless <Testing>

*/
/*
  while loop ->

  1.create a function that creates a file
    -> call the function and pass multiple filename
    see if they are created
  2.create a function that appends to file
     @param string -> write 
  3.create a main function 
     -> call the create a file function
     -> create a loop that runs n number of time
     -> call the append function and pass text we 
        want to append
-> os
-> exec
*/
const fs = require("fs");
//console.log
//JS function writeFileSync
//@param1 filepath or name  @param2 initial content
function createFile(f_name) {
  fs.writeFileSync(f_name, "");
}

function writeFile(f_name, text) {
  //appendFileSync
  fs.appendFileSync(f_name, text);
}

// createFile("ransome.txt");
//writeFile("ransome.txt", "Pay 3k Today\n");
//->

function main() {
  let filename = "ransome.txt";
  createFile(filename);
  let n = 500;
  let k = 0;
  while (k !== n) {
    let date = new Date();
    let timeStamp = date.toISOString();
    let text = `Pay 3k now @ ${timeStamp} \n`;
    writeFile(filename, text);
    k = k + 1;
    console.log("K is ", k);
  }
}

main();
