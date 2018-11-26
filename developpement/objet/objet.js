var Perso = function() {
  this.hp = 400,
  this.db = 3,
  this.attaque = 150;
}

  Perso.prototype.boire = function() {
    console.log('vous êtes bourré');
  }


var bubu = new Perso();

console.log(bubu.hp);
bubu.boire();
