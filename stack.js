// All {[()]} are valid if has opening and closing 
let S = "{[()()]}";
let S2 = '([)()]';
function solution2(S) {
    let arr = S.split('');
    for (let i=0 ; i < arr.length ; i++) {
        let char = arr[i];
        if (char === '{' || char === '}' ) {
            if (arr[arr.length - 1] === '}' || arr[arr.length - 1] === '{') {
                arr.pop()
                arr.shift()
                i--
                
            }
        } else if (char === '[' || char === ']' ) {
            if (arr[arr.length - 1] === ']' || arr[arr.length - 1] === '[') {
                arr.pop()
                arr.shift()
                i--
            }
        } else if (char === '(' || char === ')') {
            if (arr[arr.length - 1] === ')' || arr[arr.length - 1] === '(') {
                arr.pop()
                arr.shift()
                i--
            }
        }
    }
    return arr === undefined ? 0 : 1;
}
//console.log(solution2(S2));
// All {[()]} but nested in the correct order
function solution(S) {
    let arr = S.split('');
    for (let i=0 ; i < arr.length ; i++) {
        let char = arr[i];
        if (char === '{') {
            if (arr[arr.length - 1] === '}') {
                arr.pop()
                arr.shift()
                i--
                
            }
        } else if (char === '[') {
            if (arr[arr.length - 1] === ']') {
                arr.pop()
                arr.shift()
                i--
            }
        } else if (char === '(') {
            if (arr[arr.length - 1] === ')' || arr[arr.length - 1] === '(') {
                arr.pop()
                arr.shift()
                i--
            }
        }
    }
    return  arr.length === 0? 1 : 0;
}
//console.log(solution(S2))

// Stack with class
class Stack {
    constructor () {
        this.items = [];
        this.count = 0;
    }

// Add element to the top of the stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count += 1
        return this.count - 1
    }
// Remove and return last element
    pop() {
        if (this.count ==0) return undefined
        let deletedItem = this.items[this.count - 1]
        this.count -= 1;
        console.log(`${deletedItem} was removed`)
        return deletedItem
    }
// Check last element
    peek() {
        console.log(`${this.items[this.count -1]} is the last element`)
        return this.items[this.count - 1]
    }
    isEmpty() {
        console.log(this.count === 0 ? 'Stack is empty' : 'Stack is not empty');
        return this.count === 0
    }
    size() {
        console.log(`number of elements in stack: ${this.count}`)
        return this.count
    }
}
const stack = new Stack();

stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()

console.log(stack.size())