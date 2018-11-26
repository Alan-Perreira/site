<?php
class LoginController {

  public function httpGetMethod(Http $http, array $queryFields)
  {


  }

  public function httpPostMethod(Http $http, array $formFields)
  {
    $conex = new UserModel();
    $user = $conex->log($_POST['email']);



   $conex->verif($_POST['password'], $user);

    var_dump($_SESSION);

  }

}





 ?>
