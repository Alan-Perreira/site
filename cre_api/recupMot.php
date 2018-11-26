<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');

include 'class/Database.class.php';

if (array_key_exists('keyword', $_GET) == false &&array_key_exists('api_key', $_GET) == false && $_GET['api_key'] != 'xyz' ) {


	echo 'Pas de paramètre';
    exit();

}

  $database = new Database();


  $sql = 'SELECT * FROM customers WHERE customerName LIKE "%"?"%"';

  $execute = [$_GET['search']];

  $data = $database->selectAllInSql($sql, $execute);

  if ($data != false) {

      echo json_encode($data);
  	exit();

  } else {

  	echo 'Erreur 404 pas de customer avec ce mot clé';
  }


/*
  echo json_encode($mot);
  exit();

*/






 ?>
