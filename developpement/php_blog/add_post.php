<?php
session_start();
var_dump($_SESSION);

if (array_key_exists('user', $_SESSION) == true) {

  include 'aplication.php';

  $query = $pdo->prepare
  (
    'SELECT * FROM author'


  );

  $query->execute();

  $auteur = $query->fetchAll(PDO::FETCH_ASSOC);


  $query = $pdo->prepare
  (
    'SELECT * FROM category'
  );

  $query->execute();

  $categorie = $query->fetchAll(PDO::FETCH_ASSOC);



  if (empty($_POST) == false) {


    $query = $pdo->prepare
    (
      'INSERT INTO Post (Title, Content, CreationTimesTamp, Author_id, Category_id)
      VALUES (?,?,NOW(),?,?)'
    );

    $query->execute([$_POST['title'], $_POST['contents'], $_POST['author'], $_POST['category']]);

    header('Location: index.php');
    exit();

  }

  $template = 'add_post';

  include 'layout.phtml';
} else {
  header('Location: login.php');
  exit();
}
 ?>
