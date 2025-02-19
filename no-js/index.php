<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index!!</title>
    <style>
        body {
            min-width: 678px;
            background-color: #222;
            color: white;
            font-size: large;
        }
        h1 {
            text-decoration: underline;
        }
        a:link {
            color: lightblue;
        }
        a:visited {
            color: darkviolet;
        }
        .center {
            text-align:center;
        }
        #header-text {
            font-size: 1.3cm;
        }
        #notice {
            border: 1px solid white;
            padding: 4px 6px;
        }
        #index {
            min-width: 678px;
            width: fit-content;
            border: 1px solid white;
            padding-right: 30px;
        }
    </style>
</head>
<body>
    <div id="notice">
    the purpose of this site is having a
    version of it for lynx enjoyers, NoScript
    gigachads, for shitty 20's pc, article   
    readers and users who have trouble with  
    reading stuff (accessibility) FYI.
    </div>
    <h1 id="header-text" class="center">~ Parsa's Personal Site ~</h1>
    <h2 class="center">
        This is the Front page of my website.
    </h2>
    <p class="center">
        Here you can find about me, my hobbies,<br>
        and pictures and talks that i want to share.<br>
        and how you can contact me!
    </p>
        
    <hr>

    <div id="index">
        <ul>
            <li>Posts (5 most newest)
                <ol>
                    <?php
                    include("../db.php");
                
                    $sql = "SELECT id, type, title FROM posts ORDER BY id DESC LIMIT 5";
                    $result = $conn->query($sql);
                    $row = $result->fetch_assoc();
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                            if ($row["type"] == "post") {
                                echo '<li><a href="./?p='.$row["id"].'">'.$row["title"].' [PICTURES]</a></li>';
                            } else {
                                echo '<li><a href="./?p='.$row["id"].'">'.$row["title"].'</a></li>';
                            }
                        }
                    } else {
                        echo "No posts yet...";
                    }
                    if (!isset($_GET["p"])) {
                        $conn->close();
                    }
                    ?>
                </ol>
            </li>
            <li><a href="about.html">About me</a></li>
            <li><a href="about.html">Contact me</a></li>
            <li><a href="about.html">PGP Key</a></li>
            <hr>
            <a href="https://mastodon.social/@ParsaGP" target="_blank" >Mastodon</a>
            |
            <a href="https://github.com/Parsa-GP" target="_blank">Github</a>
            |
            <a href="https://matrix.to/#/@parsagp:matrix.org" target="_blank">Matrix</a>
            |
            <a href="mailto:par3a@cock.li" target="_blank">E-Mail</a>
        </ul>
    </div>
    <?php
    if (isset($_GET["p"]) && !$_GET["p"]=='') {
        $sql = "SELECT id, type, category, date, title, poster, content FROM posts WHERE id = ". preg_replace('/\D/', '', $_GET["p"]);
        $result = $conn->query($sql);
        $row = $result->fetch_assoc();
    
        if (!$row || $row['type'] == "post") {
            header("Location: ../");
        }
    } else {
        header("Location: ../");
    }
    ?>
    <h1><?=$row['title']?></h1>
    <h2><?=$row['category']?> @ <?=$row['date'];?></h2>
    <?=$row['content']?>
</body>
</html>
