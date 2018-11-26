<?php
function saveTask(array $taskData) {
  $file = fopen('tasks.csv', 'a');

  fputcsv($file, $taskData);

  fclose($file);
}


function loadTasks()
{

	$file = fopen('tasks.csv', 'a+');

    $tasks = array(); // []

    while(true) {

    	$taskData = fgetcsv($file);

    	if($taskData == false)
		{
        	break;

        }
    	array_push($tasks, $taskData);

    }

	fclose($file);

    return $tasks;
}




?>
