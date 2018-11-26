<?php
include 'Time.class.php';


$montre = new Time(10, 20, 10);
$montre->display();

$montre->addSecond();

$montre->display();

$montre->addMinute();

$montre->display();

$montre->addHour();

$montre->display();




 ?>
