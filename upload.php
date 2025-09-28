<?php
if (isset($_FILES['files'])) {
    $targetDir = "uploaded/"; // folder tujuan

    foreach ($_FILES['files']['name'] as $key => $name) {
        $tmpName = $_FILES['files']['tmp_name'][$key];
        $targetFile = $targetDir . basename($name);

        if (move_uploaded_file($tmpName, $targetFile)) {
            echo "File $name berhasil diupload.\n";
        } else {
            echo "Gagal upload $name.\n";
        }
    }
} else {
    echo "Tidak ada file yang diterima.";
}
?>
