
// 100 to -4 div by 5
// for (let i=100 ; i >= 0 ; i = i - 5) { 
//     console.log(i);
// }
// Zero not -4 in the second arg because it will not reach it anyway
// i = i - 5 in the third arg will show all the divisions of 5

// x = 123
// 3 x%10 - get last digit.
// 2 Math.floor(x/10%10) - remove first and last digit.
// 1 Math.floor(x/100) - remove two last digits.
// using %10 will get the last digit, %100 two last and so on. 
// using /10 will get the first digit /100 two first and so on. (use Math.floor afterwards)

// print 3 digits that are same
// for (let i=100; i < 999 ; i++) {
//     let right = i%10;
//     let mid = Math.floor(i/10%10);
//     let left = Math.floor(i/100);
//     if (right === mid && mid === left) {
//         console.log(i)
//     }
// }
//gets the same answer with fewer loops
// for (let i=111 ; i < 1000 ; i=i+111) {
//     console.log(i)
// }