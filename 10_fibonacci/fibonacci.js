const fibonacci = function(numOf) {
    if (numOf === 0) {
        return 0
    }

    if (numOf === 1) {
        return 1
    }

    return fibonacci(numOf - 2) + fibonacci(numOf - 1)
};

console.log(fibonacci(6))

// Do not edit below this line
module.exports = fibonacci;
