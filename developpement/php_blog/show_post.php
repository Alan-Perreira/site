<?php
session_start();
var_dump($_SESSION);

if (array_key_exists('user', $_SESSION) == true) {
  
  include 'aplication.php';
  $id = $_GET['id'];
  var_dump($id);

  $query = $pdo->prepare
  (
    'SELECT Post.Id, Title, Content, FirstName, LastName, CreationTimesTamp FROM `Post` INNER JOIN author ON author.Id = Post.Author_id WHERE Post.Id =?'
  );

  $query->execute([$id]);

  $poster = $query->fetch(PDO::FETCH_ASSOC);

  $query = $pdo->prepare
  (
    'SELECT Id FROM Post'
  );

  $query->execute();

  $postId = $query->fetch(PDO::FETCH_ASSOC);


  if (empty($_POST) == false) {

    $query = $pdo->prepare
    (
      'INSERT INTO Comment (NickName, Contents, CreationTimesTamp, Post_Id)
      VALUES (?,?,NOW(),?)'
    );

    $query->execute([$_POST['nickName'], $_POST['contents'],$id]);

    // header('Location: index.php');
    // exit();
  }



  $query = $pdo->prepare
  (
    'SELECT * FROM Comment WHERE Post_Id =?'
  );

  $query->execute([$id]);

  $com = $query->fetchAll(PDO::FETCH_ASSOC);

  $template = 'show_post';
  include 'layout.phtml';



} else {
  header('Location: login.php');
  exit();
}
 ?>
