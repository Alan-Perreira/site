<?php
session_start();
var_dump($_SESSION);

if (array_key_exists('user', $_SESSION) == true) {
  include 'aplication.php';

  $query = $pdo->prepare
  (
    'SELECT Post.Id, Title, Content, FirstName, LastName, CreationTimesTamp, Name FROM `Post` INNER JOIN author ON author.Id = Post.Author_id
    INNER JOIN category ON category.Id = Post.Category_id
    '


  );

  $query->execute();

  $adpost = $query->fetchAll(PDO::FETCH_ASSOC);
  $template = 'admin';
  include 'layout.phtml';

} else {
  header('Location: login.php');
  exit();
}
 ?>
