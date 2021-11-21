let word = ['H', 'e', 'l', 'l', 'o'];
function reverse(string) {
    if (string.length < 2) return string;
    return reverse(string.slice(1, string.length)) + string[0];
}
console.log(`reversed: ${reverse(word)}`);

function reverseString(str) {
    if (str.length <= 1) {
        return str[0];
    }
    let res = str.pop();
    res += reverseString(str);
    return res;
}


console.log(reverseString(word));
