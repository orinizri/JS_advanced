array = [];
//Stack
// First In Last Out = FILO

array.push(1);
array.push(2);
console.log(`before pop: ${array}`); 
array.pop() // Removes the last element (2)
console.log(`After pop: ${array}`); 
array = [];

// Queue
// First In First Out = FIFO

array.push(1);
array.push(2);
console.log(`before pop: ${array}`); //before pop
array.shift() // Removes the first element (1)
console.log(`After shift: ${array}`); //after pop
array = [];