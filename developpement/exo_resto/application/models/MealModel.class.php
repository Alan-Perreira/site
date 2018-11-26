<?php
class MealModel {

public function listAll() {
  $meal = new Database();
  $sql = 'SELECT * FROM Meal';

  return $meal->query($sql);

}

public function find($mealId)
{
    $database = new Database();

    $sql = 'SELECT
                *
            FROM Meal
            WHERE Id = ?';

    // Récupération du produit alimentaire spécifié.
    return $database->queryOne($sql, [ $mealId ]);
}




}




 ?>
