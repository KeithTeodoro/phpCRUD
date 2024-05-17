<?php include "config/database.php" ?>
<?php  


function showData(){
    global $conn;
    $sql = 'SELECT * FROM posts';
    $result = mysqli_query($conn, $sql);
    $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
    
    return $posts;
}

function addOrEditData($name, $body){
    global $conn;
}

function deleteData($id){
    global $conn;
    $sql = "DELETE FROM posts WHERE id=$id";
    mysqli_query($conn, $sql);
}


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    global $conn;
    $data = json_decode(file_get_contents('php://input'), true);
    $method = $data['method'];
    $name = $data['name'];
    $body = $data['body'];
    $postId = $data['postId'];

    if($method === 'addNew'){
        $sql = "Insert into posts (name, body) values ('$name', '$body')";
        mysqli_query($conn, $sql);
    }
    else if ($method === 'edit'){
        $sql = "UPDATE posts SET name = '$name', body = '$body' WHERE id = $postId;";
        mysqli_query($conn, $sql);
    }
    else if ($method === 'delete'){
        echo "test";
        deleteData($postId);
    }
}
?>