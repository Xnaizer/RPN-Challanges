
//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    let xLength = 0;
    let oLength = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'x') xLength += 1;
        if(str[i] === 'o') oLength += 1; 
    }

    return xLength === oLength;
}
  
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
