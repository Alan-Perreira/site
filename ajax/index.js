$.get('http://localhost/cre_api/recupOneCustomer.php?id=103', prend);

function prend(response) {
  console.log(response);
}



function findCustomer(event) {
	event.preventDefault();
  console.log('coucou');
	var keyWord = $('#search').val();
	$.getJSON('http://localhost/cre_api/recupMot.php?api_key=xyz&keyword='+keyWord, displayUser);
}



function displayUser(response) {
	console.log(response);
}



function trouveVille(e){
  e.preventDefault();
  	var country = $('#country').val();
  $.get('http://localhost/cre_api/office.php?country='+country, off);
}

function off(response) {
  console.log(response);
}

function trouveEmploi(e){
  e.preventDefault();

  var emploi = $('#emploi').val();

  $.get('http://localhost/cre_api/employe.php?emploi='+emploi, emp);
}


function emp(response) {
  console.log(response);
}



$('#submitCN').on('click', findCustomer);

$('#subEmploi').on('click', trouveEmploi);

$('#subCountry').on('click', trouveVille);
