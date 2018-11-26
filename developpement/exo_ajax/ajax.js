
$('#run').on("click", function() {
  if ($('input[name=what]:checked').val()== 1) {
    $.get('ajax.php', requet);
    function requet(response) {
    $('#target').html(response);
    }
  } if($('input[name=what]:checked').val() == 2) {
    $.getJSON('son.php', json);
    function json(response) {
      var liste = $('<ul>');
      for (var i = 0; i < response.length; i++) {
        liste.append('<li> <strong>Prenom :</strong> '+ response[i].firstName+'</li>'+ '<li><strong>Phone :</strong>  '+response[i].phone+'</li><hr>');
      }
    liste.css('display', 'initial');
   $('#target').html(liste);
 }
} if($('input[name=what]:checked').val() == 3) {
  $.get('film.php', films)
  function films(response) {
    $('#target').html(response);
  }
}
});
