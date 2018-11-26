function recup(id) {
  $.ajax({
    url: 'https://api.internationalshowtimes.com/v4/movies/'+id,
    type: 'GET',
    data: {
      "countries": "FR",
    },
    dataType: 'json',
    headers: {
      "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    }
  })
  .done( affiche )
  .fail( function(error) {

    console.log('la requête a échoué')

  });

}

    function dateUsToFrench(date) {

    	var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    	var tabdate = date.split('-');
    	var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];

    	return newDate;
    }



/////////FONCTIONS UTILE

    function extractUrlParams () {
///substring = sa découpe ta chaine de carractère
//location.search = location veut dire URL et shearch c'est  en gros en cherche dans l'url_img

      var t = location.search.substring(1).split('&');

    	var f = [];
    	for (var i=0; i < t.length; i++) {
    	var x = t[ i ].split('=');

    	f[x[0]]=x[1];
    	}
    	return f;
    }


    var params = extractUrlParams();
    if (params.id == undefined) {

	window.location.href = "http://localhost/dev/showtime.html?id=46793";
}

    console.log(params.id);

///////////////function de geolocation

function requestShowTimes(location) {



}
function position(response) {

    var location = response.coords.latitude.toFixed(2)+','+response.coords.longitude.toFixed(2);
    console.log(location);

    requestShowTimes(location)
     var date = new Date();
    detailaffiche(params.id, location, date);

}


if(navigator.geolocation) {
	console.log('il y a la géoloc');
    navigator.geolocation.getCurrentPosition(position);

} else {
	console.log('Pas de geoloc');

}
//////fonction date
function haveDateNextDay(date, day) {
	date.setDate(date.getDate() + day);
	return date;
}
var date = new Date();

haveDateNextDay(date, 1)

//////////////heure

function splitSeance(string) {
	var hours = string.split('T');
    var day = hours[0];
	var resultHours = hours[1].split(':');
	var result = { day: day, hour: resultHours[0]+':'+resultHours[1] };
    return result;
}





////////////J'affiche sur ma page


function affiche(data) {
  console.log(data);

  $('#pict').attr('src', data.movie.poster_image_thumbnail);
  $('header h1').text(data.movie.title);
  $('#desc').text(data.movie.synopsis);
  $('#author').text(data.movie.crew[0].name);

  if(data.movie.release_dates.FR != undefined) {

  $('#sortie').text(dateUsToFrench(data.movie.release_dates.FR[0].date));

  } else if (data.movie.release_dates.US != undefined) {

      $('#sortie').text(dateUsToFrench(data.movie.release_dates.US[0].date));
  }

  //gestion du casting, seulement 5 acteurs
  var cast ="";
  for(var i = 0; i < 5; i++) {
      cast += data.movie.cast[i].name+', '
  }
  $('#cast').text(cast);

  $('#theme').text(data.movie.genres[0].name);

  var url = data.movie.trailers[0].trailer_files[0].url;
  var youtube = url.split('=');
  var embed = 'https://www.youtube.com/embed/'
  $('#video').attr('src', embed+youtube[1]);
}



//////////////deuxième étape
function detailaffiche(id, location, date) {
  $.ajax({
    url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id="+id+"&location="+location+"&distance=5&time_to="+date,
    type: "GET",
    data: {
      "countries": "FR",
    },
    dataType: 'json',
    headers: {
      "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
  })
  .done(autoAffiche)
  .fail(function(fail) {
    console.log("HTTP Request Failed");
  })

}



function getCineWithId(cineId) {
	jQuery.ajax({
    url: "https://api.internationalshowtimes.com/v4/cinemas/"+cineId,
    type: "GET",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(	function(response, textStatus, jqXHR) {

             	console.log("HTTP Request Succeeded: " + jqXHR.status);
                console.log('place',response);
        		$('#'+response.cinema.id).html('<h3>'+response.cinema.name+'</h3> <p>'+response.cinema.location.address.display_text+'</p>')

      })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })


}








function autoAffiche(response, textStatus, jqXHR) {

console.log('show', response);

var showtimes = [];

for(var i = 0; i < response.showtimes.length; i++) {
var seance = splitSeance(response.showtimes[i].start_at);

if (i == 0) {

  showtimes.push({
            		cineId :  response.showtimes[i].cinema_id,
            		show : {
                    	time : [seance.hour],
                    	url : [response.showtimes[i].booking_link]
                    }
  });

	} else {
	var newCine = true;

	for (var j = 0; j < showtimes.length; j ++) {

    	if (showtimes[j].cineId == response.showtimes[i].cinema_id) {

        	showtimes[j].show.time.push(seance.hour);
            showtimes[j].show.url.push(response.showtimes[i].booking_link);
        	var newCine = false;
        }

    }

    if (newCine == true) {
    	showtimes.push({
            		cineId :  response.showtimes[i].cinema_id,
            		show : {
                    	time : [seance.hour],
                    	url : [response.showtimes[i].booking_link]
                    }
  		});

    }

}

}

console.log('showtimes', showtimes);
buildTableWithShow(showtimes);
for(var m = 0; m < showtimes.length; m ++) {

  getCineWithId(showtimes[m].cineId);
}


}



function buildTableWithShow(showtimes) {
var table = $('<table>');
table.append('<tr><td>Cinema</td><td>horaire des scéance d\'aujourd\'hui</td></tr>')

for (var k = 0; k < showtimes.length; k++) {

 var tr = $('<tr>');
    tr.append('<td id="'+showtimes[k].cineId+'">'+showtimes[k].cineId+'</td>');

    var td = $('<td>');

    for(var l = 0; l < showtimes[k].show.time.length; l++) {
       td.append('<a href="'+showtimes[k].show.url[l]+'">'+showtimes[k].show.time[l]+'</a> ')
   }

    tr.append(td);
   table.append(tr);

}

console.log('table', table);

$('#affiche').html(table);

}





/////////////Déclaration de fonction

recup(params.id);
