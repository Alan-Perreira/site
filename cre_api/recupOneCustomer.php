

<?php


include 'class/Database.class.php';

if (array_key_exists('id', $_GET) == false) {

	echo 'Pas de paramètre';
    exit();

}

$database = new Database();

$sql = 'SELECT * FROM customers WHERE customerNumber =?';

$execute = [$_GET['id']];

$customer = $database->selectOneInSql($sql, $execute);

if ($customer != false) {

    echo json_encode($customer);
	exit();

} else {

	echo 'Tu me prend pour un con ? retape ton id la !';
}





?>
