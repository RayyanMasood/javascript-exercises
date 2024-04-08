const sumAll = function(num1, num2) {
    let sum = 0;

    if (isNaN(num1) || isNaN(num2) || typeof num1 === 'string' 
    || num1 instanceof String || typeof num2 === 'string' 
    || num2 instanceof String)
    {
        return 'ERROR'
    }

    if (num1 > num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    for (i = num1; i <= num2; i++) {
        sum = sum + i;
    }
    return sum
};

console.log(sumAll(10, "90"));

// Do not edit below this line
module.exports = sumAll;
