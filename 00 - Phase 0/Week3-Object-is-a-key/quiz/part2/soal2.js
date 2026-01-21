
//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
    let arr = str.split('');

  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; i > j; j++) {
        console.log(`${arr[j]}:${arr[j].charCodeAt(0)} < ${arr[i]}:${arr[i].charCodeAt(0)} `);
        if(Number(arr[j].charCodeAt(0)) > Number(arr[i].charCodeAt(0))) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
  }

  return arr.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'

// done