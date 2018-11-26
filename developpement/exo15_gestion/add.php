<?php
include 'utilities.php';

if(empty($_POST['titre'])==false) {
include 'utilities.php';


$titre = $_POST['titre'];
$tache = $_POST['tache'];
$date = $_POST['date'];
$first = $_POST['first'];
var_dump($date);

function addTask($title, $description, $date, $priority) {
	if(empty($description) == true)
    {
        $description = 'Tâche sans description';
    }


	$taskData =
	[
		$title,
		$description,
		$date,
		$priority
	];

    saveTask($taskData);

}

}
?>
