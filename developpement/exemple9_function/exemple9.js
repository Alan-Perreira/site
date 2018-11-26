function sayHello() {

	document.write('<p>Bonjour à toutes et à tous !</p>');
    document.write('<p>Je suis dev</p>');
    document.write('<p>Vous devez me payer très cher</p>');

}

sayHello();
sayHello();
function sayHello2(firstName, lastName) {

    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');


}

sayHello2('Marie', 'MAYERS');

sayHello2('Ailton', 'CHRISTIAN');



function sayHello2(firstName, lastName) {

    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');


}

sayHello2('Marie', 'MAYERS');

sayHello2('Ailton', 'CHRISTIAN');



function addition(num1, num2) {

	var result = num1 + num2;

    console.log(result);

}

addition(2, 5);
addition(1, 8);

function sayHelloReturn() {

	return 'Bonjour à toutes et à tous !';

}


var hello = sayHelloReturn();

console.log(hello);

function additionReturn(num1, num2) {

	var result = num1 + num2;
	return result;
}

var result = additionReturn(1, 5);
console.log(result);
/*///////////////////////////////////////////////////////////////**/


/*
Exo 1 (niveau : facile) : Milieu d'un segment
Ecrire une fonction qui prend en parametre un segment representé par 2 points sous la forme x,y

et qui retourne les coordonnées du milieu du segment.

La fonction devra retourner un objet contenant deux propriétés x et y

ex : middle( 10,10,20,20 )


retourne { x:15,y:15 }








Exo 2 (niveau : moyen) : Écrire une fonction qui retourne la factorielle d'un nombre passé en paramètre
exemple :

function fact( n )

{

// demerdez vous


}

fact ( 5 ); // retourne 120



fact ( 10 ) ; // retourne 3628800







Exo 3 (niveau : Clairement hardcore : Algorithme de compression LRE ( run-length-encoding )
Explication

L'algorithme sert à compresser des images en noir et blanc. Une image est une suite de pixel ayant une couleur.

Pour representer une image en noir et blanc, on peut utiliser une string composé de W (white) pour representer les pixels blancs et B(black) pour le noir.

exemple : WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW


On peut reduire la taille de cette string en utilisant l'algorithme LRE.

Il consiste à indiquer pour chaque suite de pixels d'une même couleur le nombre de pixels de cette séquence suivi de la couleur en question.

On obtient, par exemple, pour la ligne précédente :

12W1B14W3B23W1B11W


Ecrire une fonction LRE qui implemente l'algorithme du meme nom.

Votre fonction devra prendre en parametre une string composé de W et B et retourner la string compressée

Exemple : LRE ( "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW”)







retourne la string "12W1B14W3B23W1B11W"

protip : Utilisez la fonction de la classe string charAt(nb) pour parcourir une string caractere par caractere

https://fr.wikipedia.org/wiki/Run-length_encoding */
