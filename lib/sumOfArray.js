module.exports = function (array1, array2) {
    let sum = 0;
    if (array2 == undefined) {
        sum = array1.reduce((a, b) => a + b);
    } else if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            sum += array1[i] * array2[i];
        }
    }
    return sum;
};