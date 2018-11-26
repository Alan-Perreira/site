// var Recap = function() {
//   this.tabe = $('.meal-list');
// }
//
// Recap.prototype.recup = function() {
//
//   this.tabe.append('<tr><td class="number"><strong>Nom</strong></td><td class="number"><strong>Quantité</strong></td><td><strong>Prix Unitaire</strong></td><td><strong>Prix Total</strong></td></tr>');
//   this.tab = loadDataFromDomStorage('panier');
//
//   for (var i = 0; i < this.tab.length; i++) {
//     var tr = $('<tr>');
//     tr.append('<td class="number"><img src='+this.tab[i].img +'>'+ this.tab[i].name+'</td><td><strong>'+this.tab[i].quantity+'</strong></td><td class="number">'+this.tab[i].salePrice.toFixed(2)+' €</td><td class="number">'+(this.tab[i].salePrice*this.tab[i].quantity).toFixed(2));
//
//     this.tabe.append(tr);
//     var form = $('<form method="post" action="PayementController.class.php">');
//     ;
//
//     //
//     var input = $('<input type="hidden" name="hidden" value="'+JSON.stringify(this.tab)+'">');
// console.log(input);
//     form.append(input);
//
//     console.log(form  );
//   }
// }
//
//
//
//
//
//
// var a = new Recap;
// a.recup();



/////////correction



var ValidateBasket = function()
{
	this.items = [];
	this.load();
};


ValidateBasket.prototype.load = function() {
	this.items = loadDataFromDomStorage('panier');

    if(this.items == null)
    {
			window.location.href = getRequestUrl()+"/order";
    }

	var orders = JSON.stringify(this.items);

    $('#totalOrder').val(orders);


	var total = 0;
    var tbody = $('<tbody>');


    for (var i = 0; i < this.items.length; i++) {
		total += (parseInt(this.items[i].quantity)*parseFloat(this.items[i].salePrice)) ;
		var tr = $('<tr>');
        tr.append('<td><em><img src='+this.items[i].img +'>'+ this.items[i].name+'</em></td><td class="number">'+this.items[i].quantity+'</td><td class="number">'+this.items[i].salePrice+'</td><td class="number">'+(parseInt(this.items[i].quantity)*parseFloat(this.items[i].salePrice)).toFixed(2)+'</td>');
		tbody.append(tr);
	}

    var tva = total * 0.2;
    var tfoot = $('<tfoot>');
    tfoot.append('<tr><td></td><td></td><td>Total HT</td><td>'+total.toFixed(2)+' €</td></tr>');
    tfoot.append('<tr><td></td><td></td><td>TVA 20%</td><td>'+tva.toFixed(2)+' €</td></tr>');
	tfoot.append('<tr><td></td><td></td><td>Total TTC</td><td>'+(total + tva).toFixed(2)+' €</td></tr>');

	$('#recapTable').append(tfoot);
    $('#recapTable').append(tbody);



}
