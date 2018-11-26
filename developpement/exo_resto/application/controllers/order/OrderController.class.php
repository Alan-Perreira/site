<?php
class OrderController {

      public function httpGetMethod(Http $http, array $queryFields)
      {
        $orderMeal = new OrderModel();
        $order = $orderMeal->order();


         $d = [ 'orders' => $order ];

        json_encode($d);
        return $d;

      }

      public function httpPostMethod(Http $http, array $formFields)
      {

        // $ordre = new OrderModel();
        // var_dump($ordre);
        // $meal= $ordre->selectId($_POST['meal']);





        }

      }


 ?>
