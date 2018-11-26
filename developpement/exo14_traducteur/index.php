<?php
$trad = null;


if(array_key_exists("mot", $_POST) == true) {
  var_dump($_POST);
  $mot = $_POST["mot"];

  $dictionary =
   [
       'cat'    => 'chat',
       'dog'    => 'chien',
       'monkey' => 'singe',
       'sea'    => 'mer',
       'sun'    => 'soleil'
   ];

//$direction = $_POST["direction"];
  function translate($dico) {
    if($_POST['langue'] == 'toEn') {
      $bien = array_search($_POST['mot'], $dico);
      var_dump($bien);
      return $bien;
      }
    else if (array_key_exists('mot', $_POST)) {
      $bien = $dico[$_POST['mot']];
      var_dump($bien);
      return $bien;
  }
}
$trad = translate($dictionary);

 }
include 'index.phtml';
?>

            CORRECTION

if (array_key_exists('word', $_POST) == true) {

    var_dump($_POST);
    $word = strtolower($_POST['word']);
	$direction = $_POST['direction'];
    $result = translate($word, $direction, $dictionary);

}

function translate($word, $direction, $dico) {
	if ($direction == "toFrench") {

    	if(array_key_exists($word, $dico)) {
            return $dico[$word];

        } else {
            return 'je ne connais pas ce mot';
        }

    } else {
    	if(in_array($word, $dico)) {
        	return array_search($word, $dico);
        }
        else {
            return 'je ne connais pas ce mot';
        }
    }
}
