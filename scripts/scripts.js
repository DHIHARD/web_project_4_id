// Mari kita cari formulirnya di DOM
let formElement = // Gunakanlah metode querySelector()

// Selanjutnya adalah *handler* pengiriman formulir, meskipun
// *handler* ini tidak akan mengirimkan ke mana pun untuk saat ini

// Perhatikan bahwa nama fungsi dimulai dengan kata kerja
// dan menjelaskan dengan tepat apa fungsinya
function handleProfileFormSubmit(evt) {
    // Baris ini menghentikan browser untuk
    // mengirimkan formulir secara bawaan.
    evt.preventDefault();
    // Setelah melakukannya, kita dapat menentukan cara kita sendiri untuk mengirimkan formulir.
    // Kami akan menjelaskannya lebih terperinci nanti.

    // Mari kita temukan kolom formulir di DOM
    let nameInput = // Use querySelector()
    let jobInput = // Use querySelector()

    // Dapatkan nilai setiap kolom dari properti nilai yang sesuai

    // Pilih elemen tempat nilai setiap bagian akan dimasukkan

    // Tambahkan nilai baru menggunakan textContent
    // properti dari metode querySelector()
}

// Hubungkan *handler* dengan formulir:
// ini akan mengamati *event* pengiriman
formElement.addEventListener('submit', handleProfileFormSubmit);