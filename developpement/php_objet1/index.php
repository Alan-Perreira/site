<?php


session_start();





echo '<p>Mon site de ouf</p>';

if( array_key_exists('user', $_SESSION)) {
  var_dump($_SESSION);
	echo '<p>Bonjour '.$_SESSION['user']['FirstName'].' '.$_SESSION['user']['LastName'].'</p>';

}
include 'index.phtml';
 ?>
