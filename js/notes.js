let myVariable; /* create variable */
myVariable = 'Maggie'; /* define variable value */

let myVariable2 = 'Peter'; /* create and define variable */

/* This is a comment */

// This is a comment


/* VARIABLES =============================================================== */
let myVariable = 'bob'; /* string */
let myNumber = 3; /* numbers */
let myBoolean = true; /* boolean */
let myArray = [1, 'bob', true]; /* arrays */
  /* arrays can hold many different types of values */
let myObject = document.querySelector('p'); /* objects */
  /* everything in javaScript is an object (all values above are objects) */


/* OPERATORS =============================================================== */
6 + 9; /* addition */
'Hello' + ' ' + 'World' /* string addition --> "Hello World" */
/* subtraction --> -
   multiplication --> *
   subtraction --> /

   assignment --> =
*/

/* equality */
myNumber === 4; /* this will return as false */
  /* it is a question: does this variable equal this value? */
/* does not equal */
!(myNumber === 3);
  /* inside the parenthesis questions if its true, but ! does the opposite */
myVariable !== 3;
  /* does the same thing as above --> would return as FALSE */


/* OPERATORS =============================================================== */
let iceCream = 'chocolate';

if(iceCream === 'chocolate') { /* if value in parenthesis is TRUE then do this */
  alert('Yay, I love chocolate ice cream!');
}
  else { /* if value in parenthesis is FALSE then do this */
  alert('Awww, but chocolate is my favorite...');
  }


/* EVENT LISTENERS ========================================================== */
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
}); /* when the user clicks anywehre on the screen, the alert pops up */
/* allows you to respond to user activity */
