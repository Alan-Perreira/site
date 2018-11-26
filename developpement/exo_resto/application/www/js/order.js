// function recup() {
//   $.ajax({
//     url: 'OrderController.class.php',
//     type: 'POST',
//     data: {
//       a,
//     },
//     dataType: 'json',
//   })
//
//   .done( affiche )
//   .fail( function(error) {
//
//     console.log('la requête a échoué')
//
//   });
//
// }
// recup();


$.getJSON('index.php/order', json);

function json(response) {

}















var d = document.querySelectorAll('select');

function va() {
  var a = this.value = this.value;



}

function affiche() {

}
for (var i = 0; i < d.length; i++) {
  var dri = d[i];
  dri.addEventListener('click', va);
}
