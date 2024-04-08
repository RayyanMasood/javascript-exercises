const repeatString = function(strGiven, nOfTImes) {
    if (nOfTImes < 0) {
        return 'ERROR'
    }

    if (strGiven === '') {
        return ''
    }
    
    let concatString = '';
    for (i = 0; i<nOfTImes; i++) {
        concatString = concatString + strGiven;
    }
    return concatString;
};

// Do not edit below this line
module.exports = repeatString;
