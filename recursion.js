function recu (number) {
    for (let i=number; i>0 ; i--) {
        console.log(i);
    }
};
//console.log(recu(5));

function recu2 (num) {
    if (num === 0) return;
    console.log(num);
    recu2(num-1);
}
console.log(recu2(5));

function recu3 (num) {
    // tnai kiyum (implicit)
    if (num > 0) {
        console.log(num);
        recu3(num-1);
    }
}
//console.log(recu3(5));