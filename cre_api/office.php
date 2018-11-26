<?php

include 'class/Database.class.php';



if(array_key_exists('country', $_GET) == false && array_key_exists('id', $_GET) == false) {
  $database = new Database();

  $sql = 'SELECT * FROM offices';

  $offi = $database->selectAllInSql($sql, array());


  if ($offi != false) {

      echo json_encode($offi);
  	exit();

  } else {

  	echo 'Tu me prend pour un con ? retape ton id la !';
  }
} else if (array_key_exists('country', $_GET) == true){

  $database = new Database();

  $sql = 'SELECT * FROM offices WHERE country= ?';

  $value = [$_GET['country']];

  $offi = $database->selectOneInSql($sql,$value);


  if ($offi != false) {

      echo json_encode($offi);
    exit();

  } else {

    echo 'Tu me prend pour un con ? retape ton id la !';
  }
} else if (array_key_exists('id', $_GET) == true) {
  $database = new Database();

  $sql = 'SELECT * FROM offices WHERE officeCode= ?';

  $value = [$_GET['id']];

  $offi = $database->selectOneInSql($sql,$value);


  if ($offi != false) {

      echo json_encode($offi);
    exit();

  } else {

    echo 'Tu me prend pour un con ? retape ton id la !';
  }
}









 ?>
