
// Problem buatlah bintang seperti berikut
let input = 8
//hasilnya
//*
//**
//***
//****
//*****

// for(let i = 1; i <= input; i++) {
//     console.log("*".repeat(i));
// }

// for(let i = 1; i <= input; i++) { 
//     let bintang = "*";

//     for (let j = 1; j < i; j++) {
//         bintang += "*"
//     }

//     console.log(bintang)
// }

// for(let i = 1; i <= input; i++) { 
//     let bintang = "*";

//     for (let j = input; j > i; j--) {
//         bintang += "*"
//     }

//     console.log(bintang)
// }

// console.log("")

for(let i = 6; i > 0; i--) {

    let bintang ="";
    
    for(let z = 6; z > i; z--) {
        bintang += " "
    }
    for(let j = 1; j < 2 * i - 1; j++) {
        bintang += "*"
    }
    
    bintang += "*"
    
    console.log(bintang);
}

console.log("test")
