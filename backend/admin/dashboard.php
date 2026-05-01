<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit;
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "yourpcdriver_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch all submissions
$sql = "SELECT * FROM contact_submissions ORDER BY created_at DESC";
$result = $conn->query($sql);

if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Drivexa</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Poppins', sans-serif; }
    </style>
</head>
<body class="bg-slate-50 min-h-screen">
    <nav class="bg-white border-b border-slate-100 py-4 px-12 sticky top-0 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold text-slate-900 tracking-tight">Drivexa <span class="text-blue-600">Admin</span></h1>
            <div class="flex items-center gap-6">
                <span class="text-slate-400 text-xs font-bold uppercase tracking-widest italic">Logged as: <?php echo $_SESSION['admin_user']; ?></span>
                <a href="?logout=1" class="bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-red-600 transition-all">Sign Out</a>
            </div>
        </div>
    </nav>

    <div class="container mx-auto px-6 lg:px-12 py-12">
        <div class="mb-12">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">Technical Submissions</h2>
            <p class="text-slate-400 font-medium">Review system documentation requests from multiple platforms.</p>
        </div>

        <div class="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.03)] overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left">
                    <thead>
                        <tr class="bg-slate-50 border-b border-slate-100">
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Source Website</th>
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</th>
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Email/Phone</th>
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Category</th>
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Description</th>
                            <th class="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date/Time</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-50">
                        <?php if ($result && $result->num_rows > 0): ?>
                            <?php while($row = $result->fetch_assoc()): ?>
                                <tr class="hover:bg-blue-50/30 transition-colors">
                                    <td class="px-6 py-6">
                                        <div class="flex items-center gap-2">
                                            <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                                            <span class="text-xs font-black text-slate-900 uppercase tracking-tighter"><?php echo $row['site_origin']; ?></span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-6 text-sm font-bold text-slate-900"><?php echo $row['first_name'] . ' ' . $row['last_name']; ?></td>
                                    <td class="px-6 py-6 text-sm font-medium text-blue-600"><?php echo $row['email']; ?></td>
                                    <td class="px-6 py-6">
                                        <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[9px] font-black uppercase tracking-wider border border-slate-200/50">
                                            <?php echo $row['category']; ?>
                                        </span>
                                    </td>
                                    <td class="px-6 py-6 text-xs text-slate-500 font-medium max-w-xs leading-relaxed">
                                        <?php echo nl2br(htmlspecialchars($row['message'])); ?>
                                    </td>
                                    <td class="px-6 py-6 text-xs font-bold text-slate-400 whitespace-nowrap italic">
                                        <?php echo date('M d, Y • H:i', strtotime($row['created_at'])); ?>
                                    </td>
                                </tr>
                            <?php endwhile; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="6" class="px-6 py-20 text-center text-slate-400 italic">No documentation requests found.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>

