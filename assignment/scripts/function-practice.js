console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log('Test - should say "David"', helloName('David'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log('addNumbers - should return 18:', addNumbers(6,12));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  return num1 * num2 * num3;
}

console.log('multiplyThree - should return 24:', multiplyThree(2,4,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array === undefined || array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}

console.log('getLast - should return undefined:', getLast());
console.log('getLast - should return 6', getLast([2, 3, 6]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let part of array) {
    //console.log(part);
    if (part === value) {
      return true;
    } /* else {
      return false;
    } */
    // above else block would break out of the loop because of the return statement.
  }
  return false;
}

console.log('find - should return false:', find(6, [1,2,3]));
console.log('find - should return true:', find(2, [1,2,3]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(string.substr(0,1) === letter) {
    return true;
  } else {
    return false;
  }
}

//Second solution:
/* function isFirstLetter(letter, string){
  return string.startsWith(letter);
} */

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for(let part of array){
    sum += part;
  }
  return sum;
}

console.log('sumAll - should return 17:',sumAll([4,8,5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveNums(arrayOfNums){
  let newArray = [];
  for (let num of arrayOfNums) {
    if (num > 0){
      newArray.push(num);
    }
  }
  // console.log(arrayOfNums);
  return newArray;
}

console.log('positiveNums - should return 1,4:',positiveNums([1,-3,4,0,-1]));
console.log('positiveNums - should return []:',positiveNums([0,-3,-4,-1]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// From codewars - Task:
// Given an integral number, determine if it's a square number:
function isSquare(num) {
  return Number.isInteger(Math.sqrt(num)) ? true : false;
}

for(i = 0; i <= 10; i++) {
  console.log(isSquare(i),i);
}