const removeFromArray = function(gArr, ...others) {
    let nArr = []
    // gArr = hArr;
    // indexOfVal = hArr.indexOf(vToRem)

    for (let val of others){ 
        for (i = 0; i < gArr.length; i++) {
            if (val === gArr[i]) {
                gArr.splice(i, 1)
                i--
            }
        }
    }

    // console.log(gArr)
    return gArr
};

removeFromArray([1,2,2,4], 2)

// Do not edit below this line
module.exports = removeFromArray;
