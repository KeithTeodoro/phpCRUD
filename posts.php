<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'components/head.php' ?>  
    <?php 
        $posts = showData();
    ?>  
</head>
<body>
    <?php include 'components/header.php' ?>
    <div class="container">
    <?php foreach($posts as $post): ?>
        <div class="box">
            <div>
                <h1><?php echo $post['name'] ?></h1>
                <p><?php echo $post['body'] ?></p>
            </div>
            <div class="buttons">
                <button class="editBtn" data-postid="<?php echo $post['id'] ?>" data-mode="edit">Edit</button>
                <button class="deleteBtn" data-postid="<?php echo $post['id'] ?>" data-mode="del">Delete</button>
            </div>
        </div>
    <?php endforeach; ?>
    </div>
</body>
</html>