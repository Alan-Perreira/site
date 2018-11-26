var outil = document.getElementById("toolbar-toggle");

var nav = document.querySelector('.toolbar');

var hidding = function() {
nav.classList.toggle('hide');
}

 outil.addEventListener('click', hidding);

//Partie execution du Slider

var play = document.getElementById('slider-toggle');
var pause = document.getElementById('slider-pause');

var befor = document.getElementById('slider-previous');

var next = document.getElementById('slider-next');

var random = document.getElementById('slider-random')

var img = document.querySelector('.slider');

var figureImg = document.getElementById('slider');
var titre = document.querySelector("#slider h1");

var index = 0;
var tab =[
    { image: '1.jpg', legend: 'Street Art'          },
    { image: '2.jpg', legend: 'Fast Lane'           },
    { image: '3.jpg', legend: 'Colorful Building'   },
    { image: '4.jpg', legend: 'Skyscrapers'         },
    { image: '5.jpg', legend: 'City by night'       },
    { image: '6.jpg', legend: 'Tour Eiffel la nuit' }
];


var proch = function() {
 index++;

 console.log(titre);
 if (index == 5) {
   index = 0;
 }
console.log(tab[index].legend);
 img.src = tab[index].image;
 titre.textContent = tab[index].legend;
}

next.addEventListener('click', proch);


var anc = function() {
  index--;
  if (index == -1) {
    index = 5;
  }
  img.src = tab[index].image;
 titre.textContent = tab[index].legend;
  console.log(titre);
}

befor.addEventListener('click', anc);

var timer;

var next = function() {
  timer = window.setInterval(proch, 1000);
  play.classList.add("hide");
  pause.classList.remove("hide");



}

var mort = function() {
  window.clearInterval(timer);
  play.classList.remove("hide");
  pause.classList.add("hide");
}

pause.addEventListener('click', mort);

var alea = function() {
  index = Math.floor(Math.random() * 5 + 1);
    img.src = tab[index].image;
     titre.textContent = tab[index].legend;
  console.log(index);
}



function my(e) {
  console.log(e.keyCode);
  var touche = e.keyCode;
  if (e.keyCode == 39) {
    proch();
  } else if (e.keyCode == 37) {
    anc();
  } else if (e.keyCode == 32) {
    next();
  } else if (e.keyCode == 8) {
    mort();
  }
}

document.addEventListener('keyup', my);



random.addEventListener('click', alea);

play.addEventListener('click', next);


  // window.clearInterval(proch);
