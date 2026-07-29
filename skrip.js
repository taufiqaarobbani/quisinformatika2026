// Daftar 10 Soal
const daftarSoal = [
    {
        soal: "Manakah penulisan perintah include yang benar?",
        pilihan: [
            "<#include><nama_file>",
            "#include <nama_file>",
            "include <nama_file>",
            "#include nama_file",
            "Semua benar"
        ],
        benar: 1
    },
    {
        soal: "Apa fungsi utama dari variabel dalam pemrograman?",
        pilihan: [
            "Mempercantik tampilan",
            "Menyimpan data/nilai",
            "Menghapus program",
            "Membuat program lambat",
            "Tidak ada fungsi khusus"
        ],
        benar: 1
    },
    {
        soal: "Simbol apa yang digunakan untuk mengakhiri perintah pada bahasa C?",
        pilihan: [
            ". (titik)",
            ", (koma)",
            "; (titik koma)",
            ": (titik dua)",
            "! (tanda seru)"
        ],
        benar: 2
    },
    {
        soal: "Tag yang digunakan untuk menulis paragraf pada HTML adalah...",
        pilihan: [
            "<head>",
            "<p>",
            "<body>",
            "<h1>",
            "<div>"
        ],
        benar: 1
    },
    {
        soal: "Kepanjangan dari CSS adalah...",
        pilihan: [
            "Computer Style Sheet",
            "Cascading Style Sheet",
            "Create Simple Style",
            "Color Style Sheet",
            "Central Style System"
        ],
        benar: 1
    },
    {
        soal: "Jenis tipe data yang digunakan untuk menyimpan kalimat/kata adalah...",
        pilihan: [
            "Integer",
            "Float",
            "String",
            "Char",
            "Boolean"
        ],
        benar: 2
    },
    {
        soal: "Logika yang bernilai BENAR atau SALAH disebut...",
        pilihan: [
            "Logika Algoritma",
            "Logika Boolean",
            "Logika Matematika",
            "Logika Pemrograman",
            "Logika Data"
        ],
        benar: 1
    },
    {
        soal: "Struktur percabangan yang digunakan untuk memilih kondisi adalah...",
        pilihan: [
            "for",
            "while",
            "if ... else",
            "do ... while",
            "loop"
        ],
        benar: 2
    },
    {
        soal: "Apa fungsi dari tag <title> pada HTML?",
        pilihan: [
            "Membuat judul di halaman",
            "Menentukan judul pada tab browser",
            "Membuat garis judul",
            "Mengubah ukuran tulisan",
            "Menyimpan teks tersembunyi"
        ],
        benar: 1
    },
    {
        soal: "Langkah-langkah sistematis untuk menyelesaikan masalah disebut...",
        pilihan: [
            "Program",
            "Kode",
            "Algoritma",
            "Sintaks",
            "Variabel"
        ],
        benar: 2
    }
];

// Variabel Global
let nomorSekarang = 0;
let poin = 0;
const abjad = ["A", "B", "C", "D", "E"];

// Elemen HTML
const teksSoal = document.getElementById("teksSoal");
const kotakPilihan = document.getElementById("kotakPilihan");
const tampilanNilai = document.getElementById("nilai");
const tampilanNo = document.getElementById("noSoal");
const pesan = document.getElementById("pesan");
const tombolLanjut = document.getElementById("tombolLanjut");

// Tampilkan Soal
function tampilkanSoal() {
    const soalSaatIni = daftarSoal[nomorSekarang];
    teksSoal.textContent = soalSaatIni.soal;
    kotakPilihan.innerHTML = "";
    pesan.textContent = "";
    pesan.style.backgroundColor = "";
    tombolLanjut.style.display = "none";
    tampilanNo.textContent = nomorSekarang + 1;

    soalSaatIni.pilihan.forEach((pilihan, indeks) => {
        const tombol = document.createElement("button");
        tombol.classList.add("tombol");
        tombol.textContent = `${abjad[indeks]}. ${pilihan}`;
        tombol.onclick = () => cekJawaban(indeks, tombol);
        kotakPilihan.appendChild(tombol);
    });
}

// Cek Jawaban
function cekJawaban(indeksPilih, tombolPilih) {
    const semuaTombol = document.querySelectorAll(".tombol");
    semuaTombol.forEach(btn => btn.disabled = true);

    if (indeksPilih === daftarSoal[nomorSekarang].benar) {
        poin++;
        tampilanNilai.textContent = poin;
        pesan.textContent = "✅ BENAR! Poin bertambah 1";
        pesan.style.backgroundColor = "#c8e6c9";
        pesan.style.color = "#2e7d32";
        tombolPilih.style.backgroundColor = "#4caf50";
    } else {
        pesan.textContent = `❌ SALAH. Jawaban benar: ${abjad[daftarSoal[nomorSekarang].benar]}`;
        pesan.style.backgroundColor = "#ffcdd2";
        pesan.style.color = "#c62828";
        tombolPilih.style.backgroundColor = "#f44336";
        semuaTombol[daftarSoal[nomorSekarang].benar].style.backgroundColor = "#4caf50";
    }

    tombolLanjut.style.display = "block";
}

// Tombol Berikutnya
tombolLanjut.addEventListener("click", () => {
    nomorSekarang++;
    if (nomorSekarang < daftarSoal.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
});

// Tampilkan Hasil Akhir
function tampilkanHasil() {
    wadah.innerHTML = `
        <h1>SELESAI!</h1>
        <div id="hasilAkhir">
            <p>Terima kasih telah mengerjakan kuis!</p>
            <p style="font-size:22px; margin-top:10px;">Skor kamu: ${poin} / 10</p>
            <p style="margin-top:10px;">${poin >= 7 ? "🎉 Bagus sekali!" : poin >= 5 ? "👍 Cukup, tingkatkan lagi!" : "💪 Semangat belajar lagi ya!"}</p>
        </div>
    `;
}

// Mulai Permainan
tampilkanSoal();
