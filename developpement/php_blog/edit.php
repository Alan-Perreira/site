<?php

session_start();
var_dump($_SESSION);

if (array_key_exists('user', $_SESSION) == true) {
  include 'aplication.php';
  $id = $_GET['id'];
  $query = $pdo->prepare
  (
    'SELECT * FROM Post WHERE Id =?'


  );

  $query->execute([$id]);

  $affiche = $query->fetch(PDO::FETCH_ASSOC);




  if (empty($_POST) == false) {
    $query = $pdo->prepare
    (
      'UPDATE Post SET Title =?, Content=?, CreationTimesTamp =NOW() WHERE Id =?'


    );

    $query->execute([$_POST['title'], $_POST['contents'], $id]);

    $edit = $query->fetchAll(PDO::FETCH_ASSOC);
    var_dump($_POST['title']);
    header('Location: admin.php');
    exit();
  }





  $template = 'edit';
  include 'layout.phtml';



} else {
  header('Location: login.php');
  exit();
}
 ?>
