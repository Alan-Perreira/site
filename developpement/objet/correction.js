var Perso =  function(name, hp, db, attaque, biere){
  this.name = name,
	this.hp = hp,
	this.db = db,
	this.attaque= attaque,
  this.biere = biere;


}

Perso.prototype.boire = function() {

	console.log(this.name + ' êtes ivre');
    this.hp -= 1;
    this.biere -= this.db;
}
Perso.prototype.tomber = function() {
	console.log(this.name+' est tombé mais n\'a rien senti');
	this.hp -= 2;

}

Perso.prototype.fou = function(a) {
  var alea = Math.random();
  if(alea<=0.5) {
    console.log(this.name+' est tomber comme une grosse merde');
  } else {
   console.log(this.name+' attaque '+ a.name +' est lui enlève');
   console.log(a.hp -= this.attaque);
   console.log(a.hp);
  }
}


// main.js


var gege = new Perso('Gégé', 5, 120, 2, 1800);

// console.log(gege.hp);
//
// console.log(gege.biere);

gege.boire();

gege.tomber();

// console.log(gege.hp);
//
// console.log(gege.biere);

var bernard = new Perso('Bernard',20, 95, 1, 2000);
gege.fou(bernard);
bernard.boire();
