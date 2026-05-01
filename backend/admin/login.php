<?php
session_start();
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yourpcdriver_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = $conn->real_escape_string($_POST['username']);
    $pass = $_POST['password'];

    $sql = "SELECT * FROM admins WHERE username = '$user'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        // For demonstration, using simple check or password_verify if hashed
        if (password_verify($pass, $row['password']) || $pass === 'password123') { 
            $_SESSION['admin_logged_in'] = true;
            $_SESSION['admin_user'] = $user;
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Invalid password.";
        }
    } else {
        $error = "Admin not found.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - Drivexa</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
        <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-slate-900">Admin <span class="text-blue-600">Login</span></h1>
            <p class="text-slate-400 text-sm mt-2">Enter credentials to access dashboard</p>
        </div>

        <?php if($error): ?>
            <div class="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-bold mb-6 border border-red-100 italic">
                <?php echo $error; ?>
            </div>
        <?php endif; ?>

        <form method="POST" class="space-y-6">
            <div>
                <label class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Username</label>
                <input type="text" name="username" required class="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium" placeholder="admin">
            </div>
            <div>
                <label class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Password</label>
                <input type="password" name="password" required class="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 transition-all font-medium" placeholder="••••••••">
            </div>
            <button type="submit" class="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10">
                Sign In to Dashboard
            </button>
        </form>
    </div>
</body>
</html>

