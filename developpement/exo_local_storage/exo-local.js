


var nom = document.getElementById('lastName');


var prenom = document.getElementById('firstName');


var phone = document.getElementById('phone');


var select = document.getElementById('title')

var tabs = loadData();
affiche();


var form = document.getElementById('#contact-form');
var aside = document.getElementById('contact-details');

$('#save-contact').on('click', envoyer);

function envoyer(event) {
  event.preventDefault();
var tab = {
  civility: $('#title').val(),
  lastName: $('#lastName').val(),
  firstName: $('#firstName').val(),
  phone: $('#phone').val()
};

tabs.push(tab);
console.log(tabs);
$('#contact-details').removeClass('hide');

saveLocal('client', tabs);
//loadData();
affiche();

  }

  function saveLocal(name, tab) {
    var tabString = JSON.stringify(tab);

    window.localStorage.setItem(name, tabString);
  }

  function loadDataFromDomStorage(key)
{
    var jsonData;

    jsonData = window.localStorage.getItem(key);

    return JSON.parse(jsonData);
}


  function loadData() {

  	var data = loadDataFromDomStorage('client');

      if (data == null) {

      	return [];

      } else {

      	return data;

      }

  }

  function affiche() {
    console.log('coucou');
    var address = document.getElementById('address-book');

    address.innerHTML = '';

    var list = document.createElement('ul');

    for(var i= 0; i < tabs.length; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.append(' Supprimer');
      a.dataset.index = i;

      li.textContent = tabs[i].civility+' '+ tabs[i].firstName+' '+ tabs[i].lastName;
      li.append(a);
      li.dataset.index = i;
      list.append(li);
    }

    console.log(list);
    //$('#address-book').html(list);
    address.append(list);

    var name = document.querySelectorAll('#address-book li');

    for(var j = 0; j < name.length; j++) {
      name[j].addEventListener('click', afficheDetail);
    }

    var eraseOne = document.querySelectorAll('#address-book a');

    for(var k = 0; k < eraseOne.length; k++) {
      eraseOne[k].addEventListener('click', deleteOne);
    }

    var form = document.getElementById('contact-form');

    form.reset();
  }


  function afficheDetail() {
    var index = this.dataset.index;
    console.log(index);
    var h3 = document.querySelector('#contact-details h3');
    var p = document.querySelector('#contact-details p');

    var contactDetail = document.getElementById('contact-details');

    h3.textContent = tabs[index].civility+' '+tabs[index].firstName+' '+tabs[index].lastName;

    p.textContent = tabs[index].phone;
    contactDetail.classList.remove('hide');

  }


$('#clear-address-book').on('click', function() {
  window.localStorage.clear('client');
  var h3 = document.querySelector('h3');
  h3.innerHTML = ''
  var p = document.querySelector('p');
  p.innerHTML = '';
  tabs = [];
  affiche();
  var contactDetail = document.getElementById('contact-details');
  contactDetail.classList.add('hide');

});

$('#add-contact').on('click', function() {
  $('#contact-form').toggleClass('hide');
});


function deleteOne() {
  var index = this.dataset.index;
  console.log(index);
  tabs.splice(index, 1);
  saveLocal('client', tabs);
  affiche();

}
