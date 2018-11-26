function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}




var Perso = function(name, hp, attack, defense, magie) {

	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.defense = defense;
	this.magie = magie;


}

Perso.prototype.attaquer = function(perso) {

	var degats = this.attack - perso.defense
	console.log(this.name +' Attaque, il enlève '+ degats + ' hp a '+ perso.name )
	perso.hp -= degats
	console.log(perso.name +' a  '+ perso.hp+ ' hp' );

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
	console.log(this.name+' augmente sa defense de '+ ratio + ' point ');
	this.defense += ratio;
	console.log(this.name +'a une defense à :'+ this.defense);
}
var Program = function(){
	this.gege = new Perso('Gégé', 200, 10, 7, 60);
	this.nanard = new Perso('Nanard', 180, 6, 4, 80);

	this.affichage();
  $('#attaquer').on('click', this.onClickAttaque.bind(this));
$('#defendre').on('click', this.onClickDefense.bind(this));
$('#sort').on('click', this.onClickSort.bind(this));
}

Program.prototype.affichage = function() {

	$('#perso1').text(this.gege.name+ ' : '+this.gege.hp+' HP');
	$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP');
}

Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();
	this.gege.attaquer(this.nanard);
	this.contre();
	this.affichage();
}

Program.prototype.onClickSort = function(event) {
	event.preventDefault();
	this.gege.sort(this.nanard);
	this.contre();
	this.affichage();
}


Program.prototype.onClickDefense = function(event) {
	event.preventDefault();
	this.gege.defendre();
	this.contre();
	this.affichage();
}


Program.prototype.contre = function(event) {
	var random = getRandomInteger(1, 3);

    if (random == 1) {
		this.nanard.attaquer(this.gege);
	} else if (random == 2) {
		this.nanard.sort(this.gege);
	} else {
		this.nanard.defendre();
	}

}




//main.js
var prog = new Program();
console.log(prog);
