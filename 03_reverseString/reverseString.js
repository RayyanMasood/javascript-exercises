const reverseString = function(gString) {
    let concatString = '';

    if (gString === '') {
        return ''
    } else if (gString.length === 1) {
        return gString;
    }

    for (i = gString.length - 1; i >= 0; i--) {
        concatString = concatString + gString[i];
    }
    // print(concatString)
    return concatString
};

// Do not edit below this line
module.exports = reverseString;
