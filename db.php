<?php
$conn = mysqli_connect("localhost", "root", "", "inventory");
if (!$conn) {
    die(json_encode(["status" => "error", "message" => "DB connection failed"]));
}
?>