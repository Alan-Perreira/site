var para1 = document.getElementById('para1');
var myPara = document.querySelectorAll('.my-para');

console.log(myPara);

para1.style.color = "red";
para1.style.backgroundColor = "green";

for (var i = 0; i < myPara.length; i++) {
	myPara[i].style.color = "pink";
}

para1.classList.add('blue');
para1.classList.remove('useless');
var para2 = document.getElementById('event');

function myFunction() {
	para2.classList.toggle('blue');
}

para2.addEventListener('click', myFunction);
