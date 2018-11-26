//utilities.js


function saveDataToDomStorage(key, data)
{
    var jsonData;

    jsonData = JSON.stringify(data);

    window.localStorage.setItem(key, jsonData);
}

function loadDataFromDomStorage(key)
{
    var jsonData;

    jsonData = window.localStorage.getItem(key);

    return JSON.parse(jsonData);
}
//address-book.js

var contacts = loadData();


function onClickAddContact()
{
	$('#contact-form').toggleClass('hide');
    $('#contact-form').data('mode', 'add');

}


function onClickSaveContact() {

	var contact = {
    	civility: $('#title').val(), // document.getElementById('title').value;
        lastname: $('#lastName').val(), // document.getElementById('lastName').value;
        firstname: $('#firstName').val(),
    	phone: $('#phone').val()
    };


    if($('#contact-form').data('mode') == 'add') {

    	contacts.push(contact);

    } else {

    	var index = $('contact-details a').data('index');

        contacts[index] = contact;

    }




    saveDataToDomStorage('addressBook', contacts);

    var form = document.getElementById('contact-form');

    form.reset();

}

function loadData() {

	var data = loadDataFromDomStorage('addressBook');

    if (data == null) {

    	return [];


    } else {

    	return data;

    }


}

function displayContact() {

	var list = $('<ul>');

    for (var i = 0; i < contacts.length; i++){

        list.append('<li data-index="'+i+'">'+contacts[i].civility+' '+contacts[i].firstname+' '+contacts[i].firstname+' <a href="#" data-index="'+i+'"></a>Supprimer contact</li>');

    }

    $('#address-book').html(list);

}

function displayOneContactDetail() {

	var index = $(this).data('index');

    $('#contact-details h3').text(contacts[index].civility+' '+contacts[index].firstname+' '+contacts[index].firstname+);
    $('#contact-details p').text(contacts[index].phone);
    $('#contact-details a').data('index', index);
    $('#contact-details').removeClass('hide');

}

function editContact() {
	$('#contact-form').data('mode', 'edit');
    var index = $('#contact-details a').data('index');


    $('#title').val(contacts[index].civility);
    $('#lastName').val(contacts[index].lastname);
    $('#firstName').val(contacts[index].firstname)
    $('#phone').val(contacts[index].phone);


}

function deleteOneContact() {

	var index = $(this).data('index');

    contacts.splice(index, 1);

    saveDataToDomStorage('addressBook', contacts);

	displayContact();
}




 $('#add-contact').on('click', onClickAddContact);
 $('#save-contact').on('click', onClickSaveContact);
 $(document).on('click', '#address-book li',displayOneContactDetail);
 $('#contact-details a').on('click', editContact);
 $(document).on('click', '#address-book li a', deleteOneContact);


</script>

var affiche = document.getElementById('affichage');

affiche.textContent = 'hello'; // natif

$('#affichage').text('hello'); // jQuery



affiche.innerHTML = '<p>hello</p>'; //natif

$('#affichage').html('<p>hello</p>'); // jQuery



affiche.append("<p>hello</p>") // natif

$('#affichage').append('<p>hello</p>'); // jQuery







//jQuery


$('#para1').on('click', hello); // selectionner et faire un event listener



$('.para').on('click', sayAlert);


$(document).on('keyup', function() {

    $('#para3').css('color', 'red');
    $('#para4').css('border', '1px solid red');
    $('#para2').toggleClass('hide');
    //$('#para2').addClass('hide');
    //$('#para2').removeClass('hide');

});




$('#but').on('click', alertButton);

function alertButton(event) {

    event.preventDefault();

	alert($('#inp1').val());

}



// natif
/*

var para1 = document.getElementById('para1');

para1.addEventListener('click', hello);
*/

/*

var para = document.querySelector('.para');

for (var i = 0; i < para.length; i++) {

	para[i].addEventListener('click', sayAlert);

}

var inp1 = document.getElementById('inp1');

inp1.value


*/


function hello() {

	console.log('hello');


}

function sayAlert() {

	alert($(this).text());  // equivalent TextContent

}








</script>

// function showOneMovie(id) {
// 	$.ajax({
// 				url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY,
// 				type : 'GET',
// 				dataType: 'json',
// 				success : function(response){
// 					console.log(response)
// 					var result = $('<div>');
//
// 					var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
// 					var title = $('<h1>').append(response.title);
// 					var year = $('<h2>').append(response.release_date);
// 					var desc = $('<p>').append( response.overview );
// 					var note = $('<p>').append( response.vote_average );
//
// 					result.append(img).append(title).append(year).append(desc).append(note);
// 					$('#result').html(result);
// 				}
