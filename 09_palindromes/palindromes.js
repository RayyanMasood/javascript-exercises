const removePuncs = function(gStr) {
    let mStr = '';
    for (let i = 0; i < gStr.length; i++) {
        if (!gStr[i].match(/[.,:!?\s]/)) {    
            mStr += gStr[i];
        }
    }
    return mStr;
}


const palindromes = function (gString) {

    gString = removePuncs(gString)

    gString = gString.toLowerCase()

    for (i = 0; i < gString.length; i++) {
        if ((gString[i] !== gString[gString.length - i - 1])) {
             return false;
        }
    }

    return true;
};

palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
