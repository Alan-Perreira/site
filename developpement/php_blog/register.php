<?php
session_start();

function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        // Voir la documentation de crypt() : http://devdocs.io/php/function.crypt
        return crypt($password, $salt);
    }

function verifyPassword($password, $hashedPassword)
{
        // Si le mot de passe en clair est le même que la version hachée alors renvoie true.
        return crypt($password, $hashedPassword) == $hashedPassword;
}


if(empty($_POST) == false) {
  include 'aplication.php';
$hashedPassword = hashPassword($_POST['password']);
  $query = $pdo->prepare
  (
    'INSERT INTO user (FirstName, LastName, Mail, Password) VALUES (?,?,?,?)'


  );

  $query->execute([$_POST['firstName'], $_POST['lastName'], $_POST['mail'], $hashedPassword]);
  var_dump($_POST);
  var_dump($hashedPassword);
  header('location: login.php');
  exit();
}



$template = 'register';
include 'layout.phtml';
 ?>
