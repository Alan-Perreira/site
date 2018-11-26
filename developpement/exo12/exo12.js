var ul = document.getElementById('photo-list');

var para = document.getElementById('total');

var elementList = document.querySelectorAll('li');

var change = document.querySelector('em');
console.log(change);

parseInt(change.textContent);

console.log(parseInt(change.textContent));

function focus() {
   this.classList.toggle('selected');
   var num = document.querySelectorAll('.selected');
  change.textContent = num.length;
console.log(change.textContent);
}





for (var i = 0; i < elementList.length; i++) {
  var elem = elementList[i];
elem.addEventListener('click', focus);
}



/*/////////////////correction/*/
// <script>
//
// var photos = document.querySelectorAll('.photo-list li');
// var total  = document.querySelector('#total em');
//
//
// function onClickSelected() {
// <script>
//
// var photos = document.querySelectorAll('.photo-list li');
// var total  = document.querySelector('#total em');
//
//     this.classList.toggle('selected');
//
//     var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
//
//     console.log(selectedPhotos.length);
//
// 	total.textContent = selectedPhotos.length;
// }
//
//
// for (var i = 0; i < photos.length; i++) {
//
//     photos[i].addEventListener('click', onClickSelected);
//
//
// }
//
//
//
//
//
// </script>
