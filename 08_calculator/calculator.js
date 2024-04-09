const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }

  return sum;
};

const multiply = function(arr) {
  let comp  = 1;
  for (let val of arr) {
    comp *= val;
  }

  return comp;
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let compute = 1;
	for (i = 1; i <= num; i++) {
    compute *= i;
  }

  return compute
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
