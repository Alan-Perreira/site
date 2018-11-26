<?php
// application/bdd_connection.php

$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');





// add_post.php



include 'application/bdd_connection.php';



$query = $pdo->prepare
		(
		    'SELECT
                *
            FROM
                Author'
		);

$query->execute();

$authors = $query->fetchAll(PDO::FETCH_ASSOC);



$query = $pdo->prepare
		(
		    'SELECT
                Id,
                Name
            FROM
                Category'
		);

$query->execute();


$categories = $query->fetchAll(PDO::FETCH_ASSOC);



if(empty($_POST) == false) {
	var_dump($_POST);

   $query = $pdo->prepare
		(
		    ' INSERT INTO
                Post
                (Title, Contents, Author_Id, Category_Id, CreationTimestamp)
            VALUES
                (?, ?, ?, ?, NOW())'
		);

   $query->execute([$_POST['title'], $_POST['contents'], $_POST['author'], $_POST['category']]);

	header('Location: index.php');
    exit();

}




$template ='add_post';

include 'layout.phtml';

?>


<!-- add_post.phtml-->

<h2><i class="fa fa-pencil"></i> Rédiger un nouvel article</h2>

<!-- Formulaire de saisie d'un nouvel article -->
<form class="generic-form" action="add_post.php" method="post">
    <fieldset>
        <legend><i class="fa fa-sticky-note-o"></i> Nouvel article</legend>
        <ul>
            <li>
                <label for="title">Titre :</label>
                <input type="text" id="title" name="title">
            </li>
            <li>
                <label class="textarea" for="contents">Article :</label>
                <textarea id="contents" name="contents" rows="15"></textarea>
            </li>
            <li>
                <label for="author">Auteur :</label>
                <select id="author" name="author">
                	<?php foreach($authors as $author): ?>
                        <option value="<?= intval($author['Id']) ?>">
                        	<?= htmlspecialchars($author['FirstName']) ?> <?= htmlspecialchars($author['LastName']) ?>
                        </option>
                    <?php endforeach ?>
                </select>
            </li>
            <li>
                <label for="category">Catégorie :</label>
                <select id="category" name="category">
                 	<?php foreach($categories as $category): ?>
                        <option value="<?= intval($category['Id']) ?>">
                       	  <?= htmlspecialchars($category['Name']) ?>
                        </option>
                    <?php endforeach ?>
                </select>
            </li>
            <li>
                <button class="button button-primary" type="submit">Enregistrer</button>
                <a class="button button-cancel" href="index.php">Annuler</a>
            </li>
        </ul>
    </fieldset>
</form>
