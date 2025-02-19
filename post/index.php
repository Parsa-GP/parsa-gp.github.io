<?php
    include("../db.php");

    if (!isset($_GET["p"])) {
        header("Location: ../");
    }

    $sql = "SELECT id, 'type', category, 'date', title, poster, content FROM posts WHERE id = ". preg_replace('/\D/', '', $_GET["p"]);
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    if ($row) {
        echo "Type: " . $row['type'] . "<br>";
    } else {
        header("Location: ../");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row["title"]; ?> - Parsa's Personal Blog</title>
    <link rel="icon" type="image/x-icon" href="../favicon.png">
    <link href="../stylesheet/style.css" rel="stylesheet">
    <link href="../stylesheet/post.css" rel="stylesheet">
    <link href="../stylesheet/share.css" rel="stylesheet">
    <script src="../scripts/showdown.min.js"></script>
    <script src="../scripts/share.js" defer></script>
    <script src="../scripts/quote.js"></script>
    <script src="../scripts/post.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            var converter = new showdown.Converter()
            document.getElementById("p-text").innerHTML = converter.makeHtml(<?=json_encode($row['content'])?>)
        })
    </script>
</head>
<body>
    <?php include("../include/header.html"); ?>

    <div id="post">
        <div id="p-top">
            <img src="<?php echo $row['poster']; ?>">
            <span id="p-title">
                <?php echo $row["title"]; ?>
            </span>

            <div id="p-tags">
                <span id="p-tag"><?php $row['category'] ?></span>
                <span id="p-time"><?php $row['date'] ?></span>
            </div>
        </div>
        <div class="share-btns">
            <a class="twitter" target="_blank">Twitter</a>
            <a class="facebook" target="_blank">Facebook</a>
            <a class="reddit" target="_blank">Reddit</a>
            <a class="hackernews" target="_blank">Hacker News</a>
            <a class="linkedin" target="_blank">LinkedIn</a>
            <a class="email" target="_blank">Email</a>
        </div>
        <div id="p-text"></div>
    </div>

    <?php include("../include/footer.html"); ?>
</body>
</html>

<?php $conn->close(); ?>
