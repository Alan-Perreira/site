<?php

$num = $_GET['orderNumber'];



$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT productName,priceEach, quantityOrdered, (priceEach * quantityOrdered) AS totalPrice FROM orderdetails INNER JOIN products ON products.productCode = orderdetails.productCode
 	WHERE orderNumber =?'

);

$query->execute( [$num] );

$commande = $query->fetchAll(PDO::FETCH_ASSOC);
//var_dump($commande);

$query = $pdo->prepare
(
	'SELECT customerName, contactFirstName, contactLastName, addressLine1, city FROM customers INNER JOIN orders ON customers.customerNumber = orders.customerNumber WHERE orderNumber =?'

);

$query->execute( [$num] );

$client = $query->fetch(PDO::FETCH_ASSOC);

var_dump($client);





include 'detail.phtml';
 ?>
