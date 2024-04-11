const getTheTitles = function(books) {
    let titles = []

    for (let bTitle of books) {
        titles.push(bTitle.title)
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
