s = "3[a]2[bc]";

function decoder (str) {
    let result = [];
    let numbers = [];
    let input = [];
    str = str.split('');
    for (let i=0 ; i <= str.length ; i++) {
        isNumber = parseInt(str[i]);
        console.log(str[i]);
        if (isNumber) {
            numbers.push(str[i])
        } 
        if (str[i] === '[') {
            i++
            while (str[i] !== ']') {
                input.push(str[i]);
                i++
            }
            result.push(input.join('').repeat(numbers[numbers.length - 1]))
            numbers = [];
            input = [];
        }
    }
    return result.join('')
}

//console.log(decoder(s));

function takesnumbers(str) {
    str = str.split("\]")
    let numbers = str.map(function (element) {
            return element[0] 
    })
    let filtered = numbers.filter( function (num) {
        if (num != undefined) {return num}
    })
    return filtered
}
function takeinputs (str) {
    str = str.split("\]")
    let input = str.map(function (element) {
        return element.match(/\[([^)]+)/g);
    })
    let filtered = input.filter( function (num) {
        if (num != undefined) {return num}
    })
    return filtered.map( function (element) {
        return element.toString().slice(1)
    })
}

function grabAll (str) {
    let inputs = takeinputs(str);
    let nums = takesnumbers(str);
    console.log(nums, inputs)
    return inputs[0].repeat(nums[0])
}
function graball2 (str) {
    result = grabAll(str)
    if (str !== '') {
        str = str.substr(str.indexOf(']')+1, str.length)
        return result + grabAll(str);
}
}
//console.log(graball2(s));