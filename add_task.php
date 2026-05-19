<?php
include "auth.php";

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS tasks (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) UNSIGNED NOT NULL,
    task TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$data = json_decode(file_get_contents("php://input"), true);

$task = mysqli_real_escape_string($conn, $data['task']);
// only admin users can add items
if (!isset($user['role']) || $user['role'] !== 'admin') {
    echo json_encode(["status" => "forbidden"]);
    exit;
}

$query = "INSERT INTO tasks (user_id, task) VALUES (".$user['id'].", '$task')";
if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "task added"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>