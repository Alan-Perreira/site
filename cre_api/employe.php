<?php
include 'class/Database.class.php';

if (array_key_exists('emploi', $_GET) == false) {


	echo 'Pas de paramètre';
    exit();

}

  $database = new Database();


  $sql = 'SELECT * FROM `employees` WHERE employeeNumber= ?';

  $execute = [$_GET['emploi']];

  $data = $database->selectOneInSql($sql, $execute);

  if ($data != false) {

      echo json_encode($data);
  	exit();

  } else {

  	echo 'Erreur 404 pas de customer avec ce mot clé';
  }

 ?>
