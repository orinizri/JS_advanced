let arr = [0,1];
function fibofor(array) {
    while (array.length<10) {
        array.push(array[array.length -1] + array[array.length -2])
    }
    return array;
}
console.log(fibofor(arr));