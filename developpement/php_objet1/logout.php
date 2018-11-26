<?php
session_start();
include 'Databass.class.php';
include 'User.class.php';


$logout = new User();
$logout->logoutSession();

?>
