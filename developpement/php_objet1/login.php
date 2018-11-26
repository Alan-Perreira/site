<?php
session_start();

include 'Databass.class.php';
include 'User.class.php';
 if(empty($_POST)== false) {
	$user = new User();

	$user->selectUser($_POST['mail'], $_POST['password']);




}

include 'login.phtml';
 ?>
