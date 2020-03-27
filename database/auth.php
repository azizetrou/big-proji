<?php include('connection.php');

$username = htmlspecialchars(strtolower(trim($_POST["username"])));
$password = md5($_POST["password"]);

$sql = 'SELECT * FROM users WHERE username="'.$username.'" AND password="'.$password.'"';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    header("Location: http://localhost/pr/patient.php");
} else {
    echo "Please check your username or password";
}

$conn->close();
?>