var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');

// context.beginPath();
// context.strokeStyle='red';
// context.lineWidth = 5;
//
// context.moveTo(20,100);
// context.lineTo(200,10);
// context.lineTo(600,150);
//
// context.stroke();
// var Trait = function() {
//
// };
//
//
//
// Trait.prototype.cercle = function(e) {
//
//   context.beginPath();
//   context.lineWidth=2;
//   context.strokeStyle='green';
//   context.arc(e.clientX-9, e.clientY -60, 5, 0, 2 * Math.PI);
//   context.fillStyle = 'yellow';
//   context.fill();
//   context.stroke();
// }
// context = new Trait();
// context.cercle();


























var black = document.querySelector('.black');
var red = document.querySelector('.red');
var yellow = document.querySelector('.yellow');
var green = document.querySelector('.green');
var blue = document.querySelector('.blue');
var maroon = document.querySelector('.maroon');
var seagreen = document.querySelector('.seagreen');
var fin = document.querySelector(".fin");
var normal = document.querySelector(".normal");
var epais = document.querySelector(".epais");
var efface = document.getElementById('tool-clear-canvas');


efface.addEventListener('click', function() {
  console.log('tu veux effacer ?');
   location.reload()

});


var Pen = function()
{

};


Pen.prototype.configure = function(context)
{

 black.addEventListener('click', function() {
   console.log("coucou tu appuis sur black");
   context.strokeStyle = 'black';
 })

   red.addEventListener('click', function() {
     console.log("coucou tu appuis sur red");
     context.strokeStyle = 'red';

   })


   yellow.addEventListener('click', function() {
     console.log("coucou tu appuis sur jaune");
     context.strokeStyle = 'yellow';

   })

   green.addEventListener('click', function() {
     console.log("coucou tu appuis sur vert");
     context.strokeStyle = 'green';

   })

   blue.addEventListener('click', function() {
     console.log("coucou tu appuis sur blue");
     context.strokeStyle = 'blue';

   })

   maroon.addEventListener('click', function() {
     console.log("coucou tu appuis sur maroon");
     context.strokeStyle = 'maroon';


   })

   seagreen.addEventListener('click', function() {
     console.log("coucou tu appuis sur seagreen");
     context.strokeStyle = 'seagreen';

   })

   fin.addEventListener('click', function(){
     console.log("tu veux du fin ok :)");
       context.lineWidth = 2;

   })
   normal.addEventListener('click', function(){
     console.log("tu veux du normal ok :)");
       context.lineWidth = 5;

   })
   epais.addEventListener('click', function(){
     console.log("tu veux du epai ok :)");
       context.lineWidth = 10;

   })

   context.lineWidth = this.size;

}

Pen.prototype.setColorAsRgb = function(red, green, blue)
{
    this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};


//js/classes/Slate.class.js

var Slate = function(idDuDom, pen)
{

	this.canvas  = document.getElementById(idDuDom);
    this.context = this.canvas.getContext('2d');
   this.currentLocation = null;
    this.isDrawing  = false;
    this.pen = pen;

    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mouseup',  this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave',  this.onMouseLeave.bind(this));
}


Slate.prototype.getMouseLocation = function(event)
{
	var location;
    var rectangle;

    rectangle = this.canvas.getBoundingClientRect();

    location =
    {
    	x: event.clientX - rectangle.left,
    	y: event.clientY - rectangle.top
    }

    return location;

};
Slate.prototype.onMouseMove = function(event)
{

	var location = this.getMouseLocation(event);
  if (this.isDrawing == true) {
    this.context.beginPath();
    this.pen.configure(this.context);
    this.context.moveTo(this.currentLocation.x, this.currentLocation.y);

    this.context.lineTo(location.x, location.y);
    this.context.closePath();

    this.context.stroke();
    this.currentLocation = location;
  }
}


Slate.prototype.onMouseDown = function(event) {
  this.isDrawing = true;
	this.currentLocation = this.getMouseLocation(event);

}

Slate.prototype.onMouseLeave = function()
{

	this.isDrawing = false;
};

Slate.prototype.onMouseUp = function() {
this.isDrawing = false;
console.log('Tu ma relacher :)');
}




var Program = function(IdDuDom) {
	this.colorPalette = new ColorPalette();
	this.pen          = new Pen();
    this.canvas       = new Slate(IdDuDom, this.pen);

	this.penColor = document.querySelectorAll('.pen-color');
    this.penSize = document.querySelectorAll('.pen-size');
	this.clearButton = document.getElementById('tool-clear-canvas');
	this.paletteButton = document.getElementById('tool-color-picker');

}

Program.prototype.onClickColorPicker = function()
{
    $('#color-palette').removeClass('hide');
};



Program.prototype.onClickPenSize = function(event)
{
	var div = event.currentTarget;
    var size = div.dataset.size;

    this.pen.setSize(size);

}

Program.prototype.onClickPenColor = function() {

    var div = event.currentTarget;
    var color = div.dataset.color;
    console.log(color);
    this.pen.setColor(color);

}

Program.prototype.clear = function()
{
    this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
}

Program.prototype.onPickColor = function() {
	var color =  this.colorPalette.getPickedColor();
	this.pen.setColorAsRgb(color.red, color.green, color.blue);
    $('#color-palette').addClass('hide');
}



Program.prototype.start = function()
{
	for(var i = 0; i < this.penColor.length; i++) {
		this.penColor[i].addEventListener('click', this.onClickPenColor.bind(this) );
	}
    //$('.pen-color').on('click', this.onClickPenColor.bind(this));

    for(var j = 0; j < this.penSize.length; j++) {
		this.penSize[j].addEventListener('click', this.onClickPenSize.bind(this) );
	}

    this.clearButton.addEventListener('click', this.clear.bind(this));
	this.paletteButton.addEventListener('click', this.onClickColorPicker.bind(this));

   	$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));



}



var ColorPalette = function()
{
    this.canvas      = document.getElementById('color-palette');    // Récupération du <canvas>
    this.context     = this.canvas.getContext('2d');
    this.pickedColor = { red: 0, green: 0, blue: 0 };

	this.canvas.addEventListener('click', this.onClick.bind(this));


    this.build();
}


ColorPalette.prototype.build = function()
{
    var gradient;

    gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);

    // Dégradé rouge -> vert -> bleu horizontal.
    gradient.addColorStop(0,    'rgb(255,   0,   0)');
    gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
    gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
    gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
    gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
    gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
    gradient.addColorStop(1,    'rgb(255,   0,   0)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


    gradient = this.context.createLinearGradient(0, 0, 0, this.canvas.height);

    // Dégradé blanc opaque -> transparent -> noir opaque vertical.
    gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
    gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
    gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');

    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

ColorPalette.prototype.onClick = function(event)
{
	var rectangle = this.canvas.getBoundingClientRect();
    var x = event.clientX - rectangle.left;
    var y = event.clientY - rectangle.top;

    var palette = this.context.getImageData(x, y, 1, 1);

    console.log(palette);

    this.pickedColor.red   = palette.data[0];
    this.pickedColor.green = palette.data[1];
    this.pickedColor.blue  = palette.data[2];

     /*
     * Déclenchement de l'évènement de l'application,
     * annonçant que l'utilisateur a sélectionné une nouvelle couleur.
     */
    $.event.trigger('magical-slate:pick-color');
};

ColorPalette.prototype.getPickedColor = function()
{
    return this.pickedColor;
};



//js/main.js


var pen = new Pen();

var slate = new Slate('moncanevas', pen);

var slate2 = new Slate('slate2', pen);

// slate.onMouseMove(pen);
