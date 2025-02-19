<?php
$conn = new mysqli("localhost", "root", base64_decode("cGFyc2ExMjM0"), "blog");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
