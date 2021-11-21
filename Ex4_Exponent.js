// With counter
let counter = 1;
function exponent(num, solution) {
    if (num === solution) return counter;
    solution /= num;
    counter++;
    exponent(num, solution)
    return counter;
}
console.log(exponent(4, 16));

// Without counter
function expoRecur(base, result) {
    if (result === 1) return 0;
    if (base === result) return 1;
    return expoRecur(base, result / base) + 1;
}
console.log(expoRecur(4, 16));
