'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/**************************************************************************************************/
 function hpAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// function wpHpPlayers() {
//   do {
//       var message = parseFloat(window.prompt("1-Façil 2-Moyen 3-Difficile"));
//   }while(isNaN(message) == true)
//   return message;
// }
// // console.log(wpHpPlayers());
//
//
//
//
// function wpArmor() {
//   do {
//   var message = parseFloat(window.prompt("1-Cuivre 2-Fer 3-Magique"));
// }while(isNaN(message) == true)
// return message;
// }
//
// function wpWeapon() {
//   do {
//   var message = parseFloat(window.prompt("1-Épée de bois 2-Épée de fer 3-Éxcalibur"));
// }while(isNaN(message) == true)
// return message;
// }
//
// console.log(wpHpPlayers());
// console.log(wpArmor());
// console.log(wpWeapon());

function wpHp(message, min, max) {
  var value;
   do {
       var value = parseInt(window.prompt(message));
   }while(value > max || value < min|| isNaN(value) == true)
   return value;
 }
 // console.log(wpHp("Quel niveau de difficulté choissisez-vous ", "façile ", "moyen ", "dificile"));
