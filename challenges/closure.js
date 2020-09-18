// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// Its like a one way glass. You can see  the outside but not from the outsie 
// inside->out != out -> inside

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param1) {
  if (toString.call(param1) !== "[object Array]")
  return false;
    
          var total =  0;
          for(var i=0;i<input.length;i++)
            {                  
              if(isNaN(input[i])){
              continue;
               }
                total += Number(input[i]);
             }
           return total;
          }

          //isNaN means is not a number