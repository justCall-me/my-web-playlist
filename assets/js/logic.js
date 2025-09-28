const fileInput = document.getElementById('inputFiles');
const chooseBtn = document.getElementById('chooseBtn');
const fileList = document.getElementById('fileList');
const acceptBtn = document.getElementById('acceptBtn');

chooseBtn.addEventListener("click", () => {
  fileInput.click();
});

acceptBtn.addEventListener("click", () => {
    const files = fileInput.files;

    if (files.length === 0) {
        alert("Pilih file dulu!");
        return;
    }

    const formData = new FormData();

    // Tambahkan semua file ke formData dengan key "files[]"
    for (let i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
    }

    fetch("upload.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        alert(result); // hasil dari PHP
    })
    .catch(error => {
        console.error("Error:", error);
    });
});