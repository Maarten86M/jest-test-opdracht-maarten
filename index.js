// functie schrijven.

function getSquare(length, width, height) {
    console.log("input", length, width, height);
    const result = length * width * height;
    console.log("result" ,result);
    return result;
}

module.exports = {
    getSquare: getSquare,
}

