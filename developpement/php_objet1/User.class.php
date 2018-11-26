<?php
class User extends Database {

  public function saveUser($firstname, $lastname, $email, $password) {

    	$sql = ' INSERT INTO
                user
                (FirstName, LastName, Mail, Password)
            VALUES
                (?, ?, ?, ?)';

        $execute = [$firstname, $lastname, $email, $password];

        $this->executeInSql($sql, $execute);

    }

    public function selectUser($email, $password) {

        	$sql = 'SELECT * FROM user WHERE Mail = ?';

            $execute = [$email];

          $user =  $this->selectOneInSql($sql, $execute);

            var_dump($user);
            if($user['Password'] == $password && $user != false ) {
              $_SESSION['user']['FirstName'] = $user['FirstName'];
              $_SESSION['user']['LastName'] = $user['LastName'];
              $_SESSION['user']['Mail'] = $user['Mail'];
              // header('Location: index.php');
              // exit();
              var_dump($_SESSION);
            } else {
              echo 'login ou mot de passe incorrect';
            }

      }

      public function logoutSession() {
       	session_destroy();

   		header('Location: index.php');
   		exit();

       }



}

 ?>
