<?php
include 'register.phtml';
include 'Databass.class.php';
include 'User.class.php';

if(empty($_POST) == false) {

	$user = new User();

	$user->saveUser($_POST['firstName'], $_POST['lastName'], $_POST['mail'], $_POST['password']);

	// header('Location: login.php');
  //   exit();
}

 ?>
