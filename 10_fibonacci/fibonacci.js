const fibonacci = function(numOf) {
    if (numOf == 0) {
        return 0
    }

    if (numOf == 1) {
        return 1
    }

    if (numOf < 0) {
        return 'OOPS'
    }

    return fibonacci(parseInt(numOf) - 2) + fibonacci(parseInt(numOf) - 1)
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
