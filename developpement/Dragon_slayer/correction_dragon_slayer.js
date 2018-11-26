<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>JavaScript</title>

    <!-- Fonctions utilitaires -->
</head>
<body>
    <h1>Dragon Slayer !!</h1>

    <!-- Code principal du jeu -->
	<script src="js/utilities.js"></script>
    <script src="js/dragon-slayer.js"></script>
</body>
</html>



<script>

//utilities.js


function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min);

}


function requestInteger(message, min, max)
{
	var integer;

    do {

    	integer = parseInt(window.prompt(message));

    } while ( isNaN(integer)==true ||  integer > max  || integer < min )

    return integer;


}



// dragon-slayer.js


var game = {};



function initializeGame()
{
	game.difficulty = requestInteger( 'Niveau de difficulté ?\n' + '1. Facile - 2. Normal - 3. Difficile',1, 3);

    switch(game.difficulty)
    {
    	case 1:
			game.hpDragon = getRandomInteger(150, 200);
        	game.hpPlayer = getRandomInteger(200, 250);
        break;

        case 2:
        	game.hpDragon = getRandomInteger(200, 250);
       		game.hpPlayer = getRandomInteger(200, 250);
        break;

        case 3:
        	game.hpDragon = getRandomInteger(200, 250);
        	game.hpPlayer = getRandomInteger(150, 200);
        break;
     }

     game.armor = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3);

     if (game.armor == 1) {

     	game.armorRatio = 1;

     } else if (game.armor == 2) {

     	game.armorRatio = 1.25;

     } else {

     	game.armorRatio = 2;

     }

     game.sword = requestInteger('Epée ?\n' +'1. Bois - 2. Acier - 3. Excalibur',1, 3 );

     switch(game.sword){

		case 1:
          game.swordRatio = 0.5;
        break;

        case 2:
       	 game.swordRatio = 1;
        break;

        case 3:
       	 game.swordRatio = 2;
        break;
    }


}

function computeDragonDamagePoint()
{
	var damagePoint;

     if(game.difficulty == 1)
    {
        // Le dragon inflige moins de dégâts si le niveau de difficulté est facile.
        damagePoint = getRandomInteger(10, 20);
    }
    else if (game.difficulty == 2)
    {
        damagePoint = getRandomInteger(30, 40);
    } else {

    	damagePoint = getRandomInteger(40, 50);

    }

	return Math.round(damagePoint / game.armorRatio);

}

function computePlayerDamagePoint()
{
    var damagePoint;

    // Les dégâts infligés par le joueur varient selon la difficulté du jeu.
    switch(game.difficulty)
    {
        case 1:
        damagePoint = getRandomInteger(25, 30);
        break;

        case 2:
        damagePoint = getRandomInteger(15, 20);
        break;

        case 3:
        damagePoint = getRandomInteger(5, 10);
        break;
    }

    // Calcul du résultat final en fonction de l'épée du joueur.
    return Math.round(damagePoint * game.swordRatio);
}

function gameLoop() {
	var damagePoint;
    var dragonSpeed;
    var playerSpeed;

    while (game.hpDragon > 0 && game.hpPlayer > 0) {

    	dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);

        if(dragonSpeed > playerSpeed)
        {
        	damagePoint = computeDragonDamagePoint();
        	game.hpPlayer -= damagePoint; // game.hpPlayer = game.hpPlayer - damagePoint;
            console.log
            (
                'Le dragon est plus rapide et vous brûle, il vous enlève ' +
                damagePoint + ' PV'
            );

        } else {
        	damagePoint = computePlayerDamagePoint();
            game.hpDragon -= damagePoint;

            console.log
            (
                'Vous êtes plus rapide et frappez le dragon, vous lui enlevez ' +
                damagePoint + ' PV'
            );
        }

    	showGameState();
    }


}


function showGameState()
{
    console.log
    (
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}

function showGameWinner()
{
    if(game.hpDragon <= 0)
    {

		document.write('<img src="images/knight.jpg">');
        console.log("Vous avez gagné, vous êtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");
    }
    else // if(game.hpPlayer <= 0)
    {
		document.write('<img src="images/dragon.jpg">');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
    }
}


function start() {
	initializeGame();
	showGameState();
	gameLoop();
	showGameWinner();
}
