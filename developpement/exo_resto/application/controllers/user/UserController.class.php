<?php
class UserController {

  public function httpGetMethod(Http $http, array $queryFields) {




  }
  public function httpPostMethod(Http $http, array $formFields)
  {
        if(empty($_POST) == false) {

          var_dump($_POST);

          $users = new UserModel();
          $users->saveUser($_POST['firstName'], $_POST['lastName'], $_POST['email'], $_POST['password'], $_POST['birthYear'].'-'.$_POST['birthMonth'].'-'.$_POST['birthDay'],
          $_POST['addresse'], $_POST['city'], $_POST['zipCode'], $_POST['phone']);


        }
  }
}









 ?>
