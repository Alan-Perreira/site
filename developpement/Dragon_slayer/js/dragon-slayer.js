'use strict';   // Mode strict du JavaScript
var lvl = wpHp("Quel niveau de difficulté choissisez-vous 1-Facile 2-Moyen 3-Difficile ",1, 3);

 var stuff = wpHp("Quel est l'équipement que vous voulez 1-Cuivre 2-Fer 3-Magique",1,3);

var cac = wpHp("Quel épés choissisez-vous 1-Épéé en bois 2-Épée en fer 3-Éxcalibur",1,3);

var dragon;
var player;
var armorRatio;
var weaponRatio;
var playerDommage;
var dragonDommage;

var start = function() {
  if (lvl == 1) {
    dragon = hpAleatoire(150, 200);
    player = hpAleatoire(200, 250);
    console.log(dragon);
    console.log(player);
  } else if (lvl == 2) {
    dragon = hpAleatoire(200, 250);
    player = hpAleatoire(200, 250);
    console.log(dragon);
    console.log(player);
  } else if (lvl == 3) {
    dragon = hpAleatoire(200, 250);
    player = hpAleatoire(150, 200);
    console.log(dragon);
    console.log(player);
  }
  if (stuff == 1) {
    armorRatio = 1;
  }
   else if (stuff == 2)
  {
    armorRatio = 1.25;
  }
  else if (stuff == 3)
  {
    armorRatio = 2;
  }
  console.log(armorRatio);


  if (cac == 1) {
    weaponRatio = 0.5;

  } else if (cac == 2) {
    weaponRatio = 1 ;
  }
  else if (cac ==3) {
    weaponRatio = 2;
  }
  console.log(cac);
}







var dmgDragon = function() {
  if (lvl == 1) {
    dragonDommage = hpAleatoire(10, 20) / armorRatio;
  } else if (lvl == 2) {
    dragonDommage = hpAleatoire(30, 40) / armorRatio;
  } else if (lvl == 3) {
    dragonDommage = hpAleatoire(40, 50) / armorRatio;
  }
  return dragonDommage;
}

var dmgPlayer = function() {
  if (lvl == 1) {
    playerDommage = hpAleatoire(25, 30) * weaponRatio;
  } else if (lvl == 2) {
    playerDommage = hpAleatoire(15, 20) * weaponRatio;
  } else if (lvl == 3) {
    playerDommage = hpAleatoire(5, 10) * weaponRatio;
  }
  return playerDommage;
}

var img = document.querySelector('img');



var game = function() {
 do {
   var vitessD = hpAleatoire(10, 20);
   var vitessP = hpAleatoire(10, 20);
   console.log(vitessD);
   console.log(vitessP);
   if (vitessD > vitessP) {
     player = player - dmgDragon();
     console.log('player ',player);
     document.write("<p style='color : red;''>Le dragon déchainée attaque férocement et il reste " + player + " point de vie a ce malheureux chevalier !!!!</p>");
   } else {
     dragon = dragon - dmgPlayer();

     console.log("dragon " ,dragon);
     document.write("<p style='color : blue;'>Le vaillant chevalier ne faiblit pas et attaque avec rage il reste " + dragon +" point de vie au dragon !!</p> " )
   }
 }while(player >= 0 && dragon >= 0)

 if (dragon <= 0) {
   img.src="images/knight.jpg";
   console.log("Players à gagné !!");
 } else if(player <= 0) {
   img.src="images/dragon.jpg";
   console.log("Dragon à gagné !!");
 } else {
   console.log("Ca marche pas");
 }
}


function startGame() {
  start();
  game();
}

startGame();




//
//
// }
/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
