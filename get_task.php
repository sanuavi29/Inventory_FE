<?php
include "auth.php";

mysqli_query($conn, "CREATE TABLE IF NOT EXISTS tasks (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT(11) UNSIGNED NOT NULL,
    task TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");
// return all tasks (inventory items) and include current user info
$result = mysqli_query($conn, "SELECT * FROM tasks ORDER BY created_at DESC");

$tasks = [];
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        $tasks[] = $row;
    }
}

echo json_encode([
    'tasks' => $tasks,
    'user' => [
        'id' => $user['id'],
        'username' => $user['username'],
        'role' => isset($user['role']) ? $user['role'] : null
    ]
]);
?>