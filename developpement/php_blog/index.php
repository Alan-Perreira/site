<?php

session_start();
var_dump($_SESSION);

include 'aplication.php';


$query = $pdo->prepare
(
  'SELECT Post.Id, Title, Content, FirstName, LastName, CreationTimesTamp FROM `Post` INNER JOIN author ON author.Id = Post.Author_id

'


);

$query->execute();

$poste = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'index';
include 'layout.phtml';

?>
