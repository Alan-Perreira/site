var num = 0;

while (num < 50) {

	document.write('<p>Hello</p>');
  num++;
}

var count;

for (count = 10; count > 0; count--) {

  document.write('<p>La boucle for '+ count +'</p>');

}

const PA121 = ['Jean', 'Alan', 'Max', 'Younes', 'Marc', 'julien', 'Rémi', 'Saliou', 'Laurent', 'Marie', 'Camille', 'Céline', 'Pierre', 'Baptiste' ]

console.log(PA121.length);
console.log(PA121[0].length);
console.log(PA121[13].length);

for(var index = 0; index < PA121.length; index++) {

	document.write('<p>il y a '+PA121[index]+'</p>')

}
