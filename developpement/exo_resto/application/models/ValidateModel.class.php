<?php
class ValidateModel {

  public function livraison($a, $b, $c, $d, $e) {
    $liv = new Database;

    $sql = 'INSERT INTO Order (User_Id, TotalAmount, TaxRate, TaxAmount, CreationTimestamp, Statut) VALUES (?,?,?,?,NOW(),?)';

    $value = [$a, $b, $c, $d, $e];

    $liv->executeSql($sql, $value);
  }



}

?>
