<?php
session_start();
include 'uti.php';

if(empty($_POST) == false ) {


	var_dump($_POST);

    include 'aplication.php';

    $query = $pdo->prepare
		(
		  'SELECT * FROM user WHERE Mail = ?'
		);

	$query->execute([$_POST['mail']]);


	$user = $query->fetch(PDO::FETCH_ASSOC);

    var_dump($user);




    if (verifyPassword($_POST['password'], $user['Password']) && $user != false) {

        $_SESSION['user']['FirstName'] = $user['FirstName'];
		$_SESSION['user']['LastName'] = $user['LastName'];
        $_SESSION['user']['Mail'] = $user['Mail'];

        echo 'Connecté';

        var_dump($_SESSION);
    	header('Location: index.php');
        exit();
    }

}
$template = 'login';
include 'layout.phtml';
 ?>
