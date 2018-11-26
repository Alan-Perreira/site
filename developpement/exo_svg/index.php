
<?php
include 'Shape.class.php';
include 'Data.class.php';
include 'Carre.class.php';
include 'Program.class.php';
include 'Circle.class.php';
include 'Triangle.class.php';
include 'Ellipse.class.php';
$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');


$carre = new Carre('400', '200', '100', 'deepskyblue', '0.5');
$circle = new Circle('300', '250', '180', '100', 'gold', '0.33');

$triangle = new Triangle('50 15, 100 100, 0 100', 'purple', '0.5');
$ellipse = new Ellipse('600', '250', '40', '80', 'blue', '0.75');

$circle->setColor('red');


$program = new Program($rectangle, $carre, $circle, $triangle,  $ellipse);
$result = $program->drawRectangle();
$results = $program->drawAll();

include 'index.phtml';

?>
