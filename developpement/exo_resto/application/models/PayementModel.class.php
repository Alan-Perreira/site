<?php
class PayementModel {

  public function pers($id){

    $co = new Database();

    $sql = 'SELECT * FROM User WHERE Id= ?';

    $criteria = [$id];

    $user = $co->queryOne($sql, $criteria);

    return $user;
  }

}



 ?>
