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
//console.log(countEvenOnRange(112))

// כתוב פונקציה printReverse שמדפיסה את כל המספרים הזוגיים מ0 ועד 100 בסדר יורד.
// בונוס : לכתוב את הפונקציה בלי if :)

function printReverse () {
    for (i=100 ; i>1 ; i=i-2) {
        console.log(i)
    }
}
//console.log(printReverse());