// Fungsi untuk menambahkan angka atau operator ke layar kalkulator
function appendToDisplay(value) {
	document.getElementsByName("display")[0].value += value;
}

// Fungsi untuk menghapus satu karakter dari layar kalkulator
function deleteFromDisplay() {
	let currentValue = document.getElementsByName("display")[0].value;
	document.getElementsByName("display")[0].value = currentValue.slice(0, -1);
}
// fungsi untuk menghapus di tombol AC
function deleteAll() {
	document.querySelector('input[name="display"]').value = "";}
// Fungsi untuk menghitung hasil perhitungan dan menampilkan hasilnya di layar kalkulator
function calculate() {
    try {
        const result = eval(document.querySelector('input[name="display"]').value);
        document.querySelector('input[name="display"]').value = result;
    } catch (error) {
        document.querySelector('input[name="display"]').value = 'Error';
    }
}
