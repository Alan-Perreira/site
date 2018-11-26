// lib.js

function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


// js/classes/Perso.class.js


var Perso = function (name, hp, attack, defense, magie) {

    this.name = name;
    this.hp =  hp;
    this.attack = attack;
	this.defense = defense;
	this.magie = magie;

    this.attaquer = function(objPerso) {
    	var degats = this.attack - objPerso.defense;

        if (degats <= 0 ) {
        	degats = 1;
        }

    	console.log(this.name +' , il enlève '+ degats + ' hp a  ' + objPerso.name);
        objPerso.hp -= degats;
        console.log(objPerso.name +' a  '+ objPerso.hp+ ' hp' );

    }

}

Perso.prototype.sort = function(perso) {

	if (this.magie > 0) {
    	var degats = getRandomInteger(1, this.magie);
        console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
        perso.hp -= degats;
		this.magie -=  degats;
    	console.log(perso.name +' a  '+ perso.hp+ ' hp' );
    } else {
    	console.log('Vous n avez plus de point de magie....')
    }

}

Perso.prototype.defendre = function() {
	var ratio =  Math.round(this.defense * Math.random());
	this.defense += ratio;
    console.log(this.name+' augmente sa defense de '+ ratio + ' point ');
    console.log(this.name +'a une defense à : '+ this.defense);

}


// js/classes/Program.class.js

var Program = function(monPerso, computer){

	this.monPerso = monPerso;
	this.computer = computer;

    $('#attaquer').on('click', this.onClickAttack.bind(this));
    $('#sort').on('click', this.onClickSort.bind(this));
    $('#defendre').on('click', this.onClickDefend.bind(this));

    this.affichage();


}

Program.prototype.affichage = function() {
	if(this.monPerso.hp >= 0 && this.computer.hp >= 0) {

		$('#perso1').text(this.monPerso.name+ ' : '+this.monPerso.hp +' HP');
		$('#perso2').text(this.computer.name+ ' : '+this.computer.hp +' HP');

    } else if (this.computer.hp <= 0 ) {

    	$('#perso1').text(this.monPerso.name+ ' : a défoncé '+ this.computer.name);
		$('#perso2').text(this.computer.name+ ' rentre chez sa mère ');

    } else {
    	$('#perso1').text(this.computer.name+ ' : a défoncé '+ this.monPerso.name);
		$('#perso2').text(this.monPerso.name+ ' rentre chez sa mère ');
    }

}

Program.prototype.onClickAttack = function(event) {

    event.preventDefault();
    if (this.monPerso.hp >= 0 && this.computer.hp >= 0) {
        this.monPerso.attaquer(this.computer);
        this.contre();
        this.affichage();
    }
}


Program.prototype.onClickSort = function(event) {
	event.preventDefault();
    if (this.monPerso.hp >= 0 && this.computer.hp >= 0) {
        this.monPerso.sort(this.computer);
        this.contre();
        this.affichage();
    }
}

Program.prototype.onClickDefend = function(event) {
	event.preventDefault();
    if (this.monPerso.hp >= 0 && this.computer.hp >= 0) {
		this.monPerso.defendre();
    	this.contre();
    	this.affichage();
    }

}


Program.prototype.contre = function(event) {

	var random = getRandomInteger(1, 3);

    if (random == 1) {

    	this.computer.attaquer(this.monPerso);

    } else if (random == 2) {

    	this.computer.sort(this.monPerso);

    } else {

    	this.computer.defendre();
    }


}


// js/main.js

var jean = new Perso('Jean', 250, 30, 3, 50);
var alan = new Perso('Alan', 250, 60, 1, 10);
var max = new Perso('Max', 250, 15, 8, 90);

console.log(alan);
console.log(jean);
console.log(max);

var fight = new Program(alan, jean);
console.log(fight);
