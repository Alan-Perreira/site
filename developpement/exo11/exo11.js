var button = document.getElementById('toggle-rectangle');

var rectangle = document.querySelector(".rectangle");

function affiche(){
  rectangle.classList.toggle("hide");
}
function survol() {
  rectangle.classList.add("important");
}
function oSurvol() {
  rectangle.classList.remove("important");
   rectangle.classList.remove("good");
console.log("coucou");
}

function dClick() {
    rectangle.classList.remove("important");
  rectangle.classList.toggle("good");
}

button.addEventListener('click', affiche);

rectangle.addEventListener('mouseover', survol);


 rectangle.addEventListener('mouseout', oSurvol);



 rectangle.addEventListener('dblclick', dClick);

 rectangle.addEventListener('mouseout', oSurvol);

 var barre = document.querySelector(".color");
var p = document.querySelector(".color p");
 barre.style.width ="10%";

function durer() {
  var temp = barre.style.width = parseFloat(barre.style.width) + 1 + "%";
  parseFloat(p);
  p.textContent = temp;
  parseFloat(temp);
if(temp == 100+"%") {
  window.clearInterval(arret);
  document.write("Votre téléchargment est terminé :)");
}
 }
var arret = window.setInterval(durer, 20);

//
// setInterval (function dure() {
//   console.log('hello');
// }, 2000);
// dure();
