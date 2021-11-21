let arr =  [1,2,4,6,8,10,56];
let sliced = 0;

function BinarySearch (arr, num, start, end) {
    middle = Math.floor((start + end)/2);
    if (arr[middle] == num) {
        return;
    } else if (arr[middle] < num) {
        start = middle;
        find(arr, num, start, end);
    } else {
        end = middle;
        find(arr, num, start, end);
    }
    return middle;
}
console.log(BinarySearch(arr, 4,0,7));

//with for loop

function find(arr, num, start, end) {
    middle = Math.floor((start + end)/2);
    if (arr[middle] === num) {
        return middle;
    } else if (num > arr[middle]) {
        start = middle;
        find(arr, num, start, end);
    } else {
        end = middle;
        find(arr, num, start, end);
    }
    return middle;
}
//console.log(find(arr,56,0,7));
