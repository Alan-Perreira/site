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

function alertButton(e) {
    e.preventDefault();
	alert($('#inp1').val());

}



window.localStorage.setItem(key, tabstring);

var x = window.localStorage.getItem(key);

tab = JSON.parse(x);



// natif

//
// var para1 = document.getElementById('para1');
//
// para1.addEventListener('click', hello);
//
//
//
//
// var para = document.querySelector('.para');
//
// for (var i = 0; i < para.length; i++) {
//
// 	para[i].addEventListener('click', alert);
//
// }




function hello() {

	console.log('hello');


}

function sayAlert() {

	alert($(this).text());  // equivalent TextContent

}
