var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var interval;



function gout(e) {
  //window.clearInterval(interval);

  // context.beginPath();
  // context.clearRect(0,0, 900, 600);
  // context.stroke();

  var y = e.clientY;
  context.beginPath();
  context.lineWidth=2;
  context.strokeStyle='red';
  context.arc(e.clientX-151, y -49, 5, 0, 2 * Math.PI);
  context.fillStyle = 'yellow';
  context.fill();
  context.stroke();





  function tombe() {
    // context.beginPath();
    // context.stroke();

    var speed = 2;
    y+= speed;
    if(y < 700){
    context.beginPath();
    context.lineWidth=2;
    context.strokeStyle='red';
    context.arc(e.clientX-151, y -49, 5, 0, 2 * Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.stroke();

    }
  }
  interval = window.setInterval(tombe, 100);

}
canvas.addEventListener('click', gout);


function random() {
  var x = Math.floor(Math.random()*900 +1);
  var y = Math.floor(Math.random()*600 +1);
var speed = 7;
  context.beginPath();
  context.lineWidth=2;
  context.strokeStyle='red';
  context.arc(x, y, 5, 0, 2 * Math.PI);
  context.fillStyle = 'yellow';
  context.fill();
  context.stroke();

  function tome() {
    window.setInterval(function()
    {context.clearRect(0,0, 900, 600)}, 5000);
    y+= speed;
    context.beginPath();
    context.lineWidth=2;
    context.strokeStyle='red';
    context.arc(x, y, 5, 0, 2 * Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.stroke();
  }

  window.setInterval(tome, 100);

}
   window.setInterval(random, 1000);


function draw() {
  console.log('coucou');
}
