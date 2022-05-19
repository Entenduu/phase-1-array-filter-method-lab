// Code your solution here
const findMatching = (arr, string) => {
    return arr.filter(x => x.toLowerCase() === string.toLowerCase());
};

const fuzzyMatch = (arr, string) => {
    return arr.filter(x => x.substring(0, 1) === string.substring(0, 1));
};

function matchName(arr, string) {
    return arr.filter(x => x.name === string);
};