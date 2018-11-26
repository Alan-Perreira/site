var Perso = function(name, hp, attaque, defense, magie){
  this.name = name,
  this.hp = hp,
  this.attaque = attaque,
  this.defense = defense,
  this.magie = magie;
}
var alan = new Perso("Alan", 300, 40, 80, 180);

var ordi = new Perso("Darkness", 300, 40, 80, 180);

var tab = [alan.name, alan.hp, alan.attaque, alan.defense, alan.magie];

var tab2 = [ordi.name, ordi.hp, ordi.attaque, ordi.defense, ordi.magie];
console.log(alan.hp);
console.log(tab);
console.log(tab2);
var attaq = document.getElementById('attaque');
var def = document.getElementById('defense');

var mage = document.getElementById('magie');




attaq.addEventListener('click', function(){
  var e = alan.attaque
  console.log(alan.name+' inflige '+e+' a '+ ordi.name);
  ordi.hp -= e;
  console.log('il reste '+ordi.hp+' point de vie a '+ordi.name);
  random(e);
  console.log(alan.hp);
  console.log(random());
});

 def.addEventListener('click', function() {
   console.log(alan.name+' se concentre pour former une défense inpénètrable !');
   random(e);
   console.log(alan.hp);
   console.log(random());
 });






function random(e){
  var alea = Math.random();
  var action;
  if (alea <= 0.33){
    action = tab2[2];
  } else if (alea > 0.33 && alea <= 0.66) {
    action = 'lance une attaque sauvage à '+alan.name+' est lui inflige '+tab2[3]+' de dommage !! il reste plus que '+alan.hp+' de point de vie';
  }else {
    action = tab2[4];
  }

  if(action == 80) {
    e / 80;
  } else {
    alan.hp -= action;
  }
  return action;
}




// do {
//
// } while (alan.hp <= 0 || ordi.hp <= 0);
