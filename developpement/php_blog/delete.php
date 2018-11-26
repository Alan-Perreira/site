<?php
session_start();
var_dump($_SESSION);

if (array_key_exists('user', $_SESSION) == true) {
  if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id']))
  {
    header('Location: index.php');
    exit();
  }


  include 'aplication.php';
  $id = $_GET['id'];
  $query = $pdo->prepare
  (
    'DELETE FROM `Post` WHERE Id =?'

  );

  $query->execute([$id]);
  header('Location: admin.php');
  exit();



} else {
  header('Location: login.php');
  exit();
}




 ?>
