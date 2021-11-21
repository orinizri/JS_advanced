let arr = [0,1];
function fibofor(array) {
    while (array.length<10) {
        array.push(array[array.length -1] + array[array.length -2])
    }
    return array;
}
console.log(fibofor(arr));

let fibo (num) {
    if (num < 2) {return num};
    return fibo(num - 1) + fibo(num - 2);
}
fibo(3);