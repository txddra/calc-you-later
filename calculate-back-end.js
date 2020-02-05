/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1, num2, sign){

num1 = Number(num1)

num2 = Number(num2)
if(sign === '+' || sign === 'plus' || sign === 'added'|| sign === 'added to'){
  return num1 + num2
} else if(sign === '-' || sign === 'minus' || sign === 'subtracted' || sign === 'subtracted from') {
return num1 - num2
} else if (sign === 'x' || sign === 'times'|| sign === 'X' || sign === 'multiplied by'){
  return num1 * num2
} else if(sign === '/' || sign === 'divided by'){
return num1 / num2
} else if(sign === '%' || sign === 'modulus' || sign === 'mod' ){
return num1 % num2
}else {
  return 'Sorry, that\'s not a mathematical operation!'
}


// const sum = num1 + num2;

  // return sum
}

calculate('6','14','+')

//calculate(3, 5)

// const x = Number('3') + 5;
// x;  
// function calculate(stringVersionOfNum1,stringVersionOfNum2){
//   const numberVersion1 = Number(stringVersionOfNum1);
//   const numberVersion2 = Number(stringVersionOfNum2);

// const sum = numberVersion1 + numberVersion2;

// return sum;

// }



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;