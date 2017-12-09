// Swapping two values of an array
function switchVal(array) {
    var temp;
    temp = array[0]
    array[0] = array[array.length - 1];
    array[array.length - 1] = temp;
    return array;

}
console.log(switchVal([1, 2, 3, 4, 5]));