let n = 3332;
function countEven (num) {
    num = num.toString().split('')
    .filter(function (num) {
        if (num%2 === 0)  
            return num;
    })
    return num
}
console.log(countEven(n))

function countEvenOnRange (num) {
    let counter = 0;
    for (let i=111 ; i<num ; i=i+2 ) {
            counter++
        }
        return counter
}
console.log(countEvenOnRange(112))
