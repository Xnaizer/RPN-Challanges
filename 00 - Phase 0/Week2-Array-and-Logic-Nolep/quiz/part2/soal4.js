
function pasanganTerbesar(num) {
  // you can only write your code here!

  let angkas = String(num).split('');
  let maxCouple = -Infinity;

  for (let i = 0; i <= angkas.length - 1; i++) {

    let angka = Number(`${angkas[i]}${angkas[i+1]}`);

    if(maxCouple < angka) {
        maxCouple = angka;
    }

  }
    return Number(maxCouple);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99