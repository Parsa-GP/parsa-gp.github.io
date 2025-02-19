<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parsa's Personal Blog</title>
    <link rel="icon" type="image/x-icon" href="favicon.png">
    <link href="stylesheet/style.css" rel="stylesheet">
    <link href="stylesheet/home.css" rel="stylesheet">
    <!--<link href="https://mshaugh.github.io/nerdfont-webfonts/build/firacode-nerd-font.css" rel="stylesheet">-->
    <script src="scripts/quote.js"></script>
    <script src="scripts/script.js"></script>
</head>
<body>
    <?php include("./include/header.html"); ?>

    <div id="post-container">
        <?php            
            include("db.php");

            $sql = "SELECT id, 'type', category, 'date', title, poster, summary FROM posts";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                  echo '<div class="post"><div class="p-top"><span class="p-title">'.$row["title"].'</span><div class="p-tags"><span class="p-tag">'.$row["category"].'</span><span class="p-time">'.$row["date"].'</span></div></div><a class="p-text" href="post/?p='.$row["id"].'">'.$row["summary"].'</a></div>';
                }
            } else {
                echo "No posts yet...";
            }
            $conn->close();
        ?>
    </div>

    <?php include("./include/footer.html"); ?>
</body>
</html>

