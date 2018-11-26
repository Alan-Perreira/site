var bouge = document.querySelector(".poke");

function move(e) {
  console.log(e.keyCode);
if (e.keyCode == 37) {
  moins();
} else if (e.keyCode == 39) {
  plus();
} else if (e.keyCode == 40) {
  bot();
} else if (e.keyCode == 38) {
  up();
}
}
var marche = bouge.style.left = "0%";
var monte = bouge.style.top = "0%";
var droit = 0;
var monte = 0;
function moins() {
  if(droit > 0 ) {
    droit = droit - 1;
    marche = droit + "%";
    bouge.style.left = marche;
    console.log(marche);
  }
}

function plus() {

  if(droit < 93) {
    droit = droit + 1;
    marche = droit + "%";
    bouge.style.left = marche;
    console.log(marche);
  }
}

function bot() {
  if(monte < 89) {
    monte = monte + 1;
    marche = monte + "%";
    bouge.style.top = marche;
    console.log(marche);
  }
}

function up() {
  if(monte > 0) {
    monte = monte - 1;
    marche = monte + "%";
    bouge.style.top = marche;
    console.log(marche);
  }
}



var map = [

[1,1,1,1,1],

[1,0,0,0,1],

[0,0,0,2,1],

[1,0,0,0,1],

[1,1,1,1,1]

];

var img = document.querySelector("img");
document.write("<table>");
for (var i = 0; i < map.length; i++) {
  var sousmap = map[i];
  console.log(sousmap);
  document.write("<tr>");

  for (var j = 0; j < sousmap.length; j++) {
    var a = parseFloat(sousmap); var b = parseFloat(sousmap[j]);
    var result = a * b;

    document.write("<td>"+ result +"</td>");


  }
      document.write("</tr>");
}
document.write("</table>");




document.addEventListener('keydown', move);
