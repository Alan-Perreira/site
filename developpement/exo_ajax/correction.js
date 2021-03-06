<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>JavaScript</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="css/main.css">

    <!-- Librairie jQuery -->
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

    <!-- Fonctions du projet -->
    <script src="js/ajax.js"></script>
    <script src="js/events.js"></script>
</head>
<body>
    <header>
        <h1><i class="fa fa-flask"></i> Exercice AJAX</h1>
    </header>

    <main>
        <section id="target">
            <em>Résultats...</em>
        </section>

        <form>
            <fieldset>
                <legend><i class="fa fa-question-circle"></i> Votre choix</legend>
      <ul>
          <li>
              <input type="radio" name="what" value="1" id="get-html-data" checked>
              <label for="get-html-data">Récupérer un contenu HTML du serveur</label>
          </li>
          <li>
              <input type="radio" name="what" value="2" id="get-json-data">
              <label for="get-json-data">Récupérer un contenu JSON du serveur</label>
          </li>
          <li>
              <input type="radio" name="what" value="3" id="get-html-movies">
              <label for="get-html-movies">Récupérer les films</label>
          </li>
          <li>
              <button type="button" id="run">Exécuter</button>
          </li>
      </ul>
  </fieldset>
        </form>
    </main>

    <!-- Code principal du projet -->
    <script src="js/main.js"></script>
</body>
</html>

<script>
// ajax.js

function ajaxGetHtmlArticle(response)
{
	$('#target').empty();

	$('#target').html(response);

}

function ajaxGetJsoData(response) {

    $('#target').empty();

    var list = $('<ul>');

    for (var index = 0; index < response.length; index++) {
    	var li = $('<li>');

        list.append(li.append( response[index].firstName+' '+ response[index].pĥone ));

    }

    $('#target').html(list);
}

//events.js

function onClickExecute()
{
    var radioChoice;
    radioChoice = $('input[name=what]:checked').val();

    if (radioChoice == 1) {

    	$.get('php/1-get-html-article.php', ajaxGetHtmlArticle);

    } else if (radioChoice == 2) {

    	$.getJSON('php/2-get-json-data.php', ajaxGetJsonData);

    } else {
    	 $.get('php/3-get-html-movies.php', ajaxGetHtmlArticle);

    }


}



// main.js

$(function()
{

  $('#run').on('click', onClickExecute);
});






</script>


<!--1-get-html-article.php -->

<article>
    <h2>En tête secondaire</h2>
    <p>Ce contenu vient du côté du <strong>serveur en PHP</strong>.</p>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget suscipit metus. Nam nec velit ornare, tincidunt nunc sit amet, ullamcorper arcu. Fusce porta fringilla aliquet. Phasellus ac ante quam. Nullam pharetra vitae ipsum vel auctor. Etiam sit amet pretium ipsum. Etiam volutpat risus vitae tortor vulputate, quis dignissim turpis vestibulum. Donec porta hendrerit lorem, nec blandit magna consequat bibendum. Nunc imperdiet nunc nec venenatis mollis. Donec nunc orci, scelerisque id felis id, sagittis vestibulum ipsum. Etiam rhoncus faucibus purus at egestas. Quisque purus odio, sodales quis laoreet ac, ullamcorper sed odio. Etiam posuere posuere dui ut ultrices. Suspendisse fringilla urna sit amet arcu facilisis lacinia. Donec egestas lacinia ipsum, at fringilla metus tristique in. In hac habitasse platea dictumst.</p>
</article>

<!--2-get-json-data.php -->


<?php

$contactList =
[
    [ 'firstName' => 'Tom',       'phone' => '0102030405' ],
    [ 'firstName' => 'Joana',     'phone' => '0102233445' ],
    [ 'firstName' => 'Catherine', 'phone' => '0605455548' ]
];



// Sérialisation JSON de la liste des contacts et envoi dans la réponse HTTP.
echo json_encode($contactList);

?>






<!--3-get-html-movie.php -->


<?php

$movies =
[
    [ 'title' => 'X-Men: Days of Future Past',           'duration' => 124, 'cover' => 'xmen.jpg'              ],
    [ 'title' => 'Grace de Monaco',                      'duration' => 96,  'cover' => 'grace.jpg'             ],
    [ 'title' => 'Captain America 2',                    'duration' => 136, 'cover' => 'captain-america-2.jpg' ],
    [ 'title' => 'Les yeux jaunes des crocodiles',       'duration' => 121, 'cover' => 'yeux-jaunes.jpg'       ],
    [ 'title' => 'Rio 2',                                'duration' => 88,  'cover' => 'rio-2.jpg'             ],
    [ 'title' => 'Spiderman',                            'duration' => 145, 'cover' => 'spiderman.jpg'         ],
    [ 'title' => "Qu'est ce qu'on a fait au bon Dieu ?", 'duration' => 114, 'cover' => 'bon-dieu.jpg'          ],
    [ 'title' => 'Grand Budapest Hotel',                 'duration' => 128, 'cover' => 'budapest-hotel.jpg'    ]
];



// Affichage d'un template contenant la liste des films.
include "3-get-html-movies.phtml";


// 3-get-html-movie.phtml

?>

<ul class="movie-list">
    <?php foreach($movies as $movie): ?>
        <li>
            <img src="images/<?= $movie['cover'] ?>">
            <p>
                <strong><?= $movie['title'] ?></strong> -
                <em><?= $movie['duration'] ?></em>
            </p>
        </li>
    <?php endforeach; ?>
</ul>
