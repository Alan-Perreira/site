<?php
class UserModel {

  public function hashPassword($password) {
    $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

    return crypt($password, $salt);
  }


  public function saveUser($a, $b, $c, $d, $e, $f, $g, $h, $i) {
    $user = new Database();
    $dash = $this->hashPassword($d);

    $sql = 'INSERT INTO User (FirstName, LastName, Email, Password, BirthDate, Address, City, ZipCode, Phone, CreationTimestamp) VALUES (?,?,?,?,?,?,?,?,?,NOW())';

    $value = [$a, $b, $c, $dash, $e, $f, $g, $h, $i];

    $user->executeSql($sql, $value);
  }

  public function verifyPassword($password, $hashedPassword) {
    return crypt($password, $hashedPassword) == $hashedPassword;
  }

  public function log($mail){
    $co = new Database();

    $sql = 'SELECT * FROM User WHERE Email= ?';

    $criteria = [$mail];

    $user = $co->queryOne($sql, $criteria);

    return $user;
  }


  public function verif($postpass, $user){

      if($this->verifyPassword($postpass, $user['Password']) && $user != null) {
        $_SESSION['user']['Id']= $user['Id'];

        $_SESSION['user']['FirstName'] = $user['FirstName'];

        $_SESSION['user']['LastName'] = $user['LastName'];

        $_SESSION['user']['Email'] = $user['Email'];

        $_SESSION['user']['Address'] = $user['Address'];

        $_SESSION['user']['City'] = $user['City'];

        $http= new Http();
           $http->redirectTo('/');


      } else {

        echo 'mdp incorrect';
      }

    }


}
 ?>
