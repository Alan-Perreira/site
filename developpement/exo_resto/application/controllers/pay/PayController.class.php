<?php
class PayController
{
  public function httpGetMethod(Http $http, array $queryFields)
  {
    if(array_key_exists('user', $_SESSION) == false || array_key_exists('orderId', $_GET) == false) {

      $http->redirectTo('/');

    }

    $orderModel = new OrderModel();

    $order = $orderModel->find($_GET['orderId']);

    if($order['Statut'] == 'payed') {
      $http->redirectTo('/order');
    }


  }

  public function httpPostMethod(Http $http, array $formFields)
  {

    if(empty($_POST) == false) {

      $orderModel = new OrderModel();

      $order = $orderModel->find($_GET['orderId']);

      $totalTTC = $order['TotalAmount'] + $order['TaxAmount'];

      $stripeAmount = $totalTTC * 100;

      var_dump($stripeAmount);

      if($order['Statut'] == 'not payed') {

        \Stripe\Stripe::setApiKey('sk_test_nXTA272uw9HVoQztGTqQxs4I');

        //$_POST['first_name'];

        $POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);

        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];

        $token = $_POST['stripeToken'];

        // create customer

        $customer = \Stripe\Customer::create(array(
          "email" => $_SESSION['user']['Email'],
          "source" => $token
        ));

        $charge = \Stripe\Charge::create(array(
          "amount" => $stripeAmount,
          "currency" => "eur",
          "description"=>"commande ok",
          "customer" => $customer->id
        ));

        $orderModel->payed($_GET['orderId']);

        $http->redirectTo('/order/validate?tid='.$charge->id.'&orderId='.$_GET['orderId']);

      } else {

        $http->redirectTo('/order');

      }

    }


  }
}





?>
