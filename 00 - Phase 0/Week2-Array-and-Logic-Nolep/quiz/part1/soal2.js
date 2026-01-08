let input = [
    "0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"
];

function dataHandling(input) {

    input[1] = "Roman Alamsyah Elsharawy"
    input.splice(2,1,"Provinsi Bandar Lampung")
    input.push("Pria","SMA Internasional Metro")
    input.splice(4,1)
    
    console.log(input)
    
    input.splice(4,1)
    
    let bulan = input[3].split('/')[1];
    

    switch(Number(bulan)) {
        case 1: bulan = "Januari"; break;
        case 2: bulan = "februari"; break;
        case 3: bulan = "maret"; break;
        case 4: bulan = "april"; break;
        case 5: bulan = "Mei"; break;
    }    

    console.log(bulan);

    // let tanggal = input[3].split('/');
    // tanggal = [tanggal[2], tanggal[0], tanggal[1]]

    let [day, month, year] = input[3].split('/');
    let tanggal = [year, day, month]


    console.log(
        tanggal
    )


    console.log(
        input[3].split('/').join('-')
    )
    
    console.log(input[1].slice(0,15))
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * 
 * Mei
 * 
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */

