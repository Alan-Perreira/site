<?php

class PayementController
{
  public function httpGetMethod(Http $http, array $queryFields)
  {

    if(array_key_exists('user', $_SESSION) == false) {

      $http->redirectTo('/');

    }



  }

  public function httpPostMethod(Http $http, array $formFields)
  {
    if(empty($_POST) == false) {
      var_dump($_POST);
      $totalOrder = json_decode($_POST['totalOrder']);

      for ($i = 0; $i < count($totalOrder); $i++){
        $mealModel =new MealModel();
        $secure = $mealModel->find($totalOrder[$i]->mealId);

        $totalOrder[$i]->securePrice =$secure['SalePrice'];

      }
      var_dump($totalOrder);

      $orderModel = new OrderModel();
      $orderId = $orderModel->validate( $_SESSION['user']['Id'], $totalOrder );

      $http->redirectTo('/pay?orderId='.$orderId);

    }

  }

}

?>
