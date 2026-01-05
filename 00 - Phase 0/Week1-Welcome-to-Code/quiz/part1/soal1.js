
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

/**
 * algoritma program proxytia 
 * 
 * aplikasi ini membutuhkan 2 input yang akan diisi oleh user yaitu nama dan peran
 * disini aplikasi nantinya akan memberikan pengkondisian dimana nama dan peran harus diisi
 * jika salah satu diisi nanti akan diberikan peringatan bahwa nama atau peran wajib diisi
 * 
 * jika nama sudah diisi dan peran sama dengan 3 peran yang tersedia makan akan mengeluarkan output sesuai dengan yang diambil
 * 
 * dan jika nama tidak tersedia di peran maka akan mengembalikan output keanya kamu jadi bot aja ya
 */


let nama = "a", peran = "tabib";

if(nama === "") {
    console.log("nama harus diisi");
} else if (peran === "") {
    console.log("peran harus diisi");
} else if (peran.toLowerCase() === "ksatria") {
    console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran.toLowerCase() === "tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran.toLowerCase() === "penyihir") {
    console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
    console.log(`Hey ${nama}, tapi kayaknya kamu jadi bot aja ya, peran ${peran} yang kamu pilih ga ada`)
}
 
//code disini gunakan console.log untuk outputnya

