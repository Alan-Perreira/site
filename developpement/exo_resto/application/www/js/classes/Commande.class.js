// var Commande = function() {
//   this.table = $('.generic-table');
//   this.panier = $('.basket-empty');
//   this.meal   = $('#meal');
//   this.qu = $('.quantity');
//   this.but = $('.button');
// }
//
//
// Commande.prototype.choix = function(e)
// {
//   e.preventDefault();
// 	var menu = this.meal.val();
//     console.log(menu);
//
//     console.log(getRequestUrl());
//
// 	$.getJSON
//     (
//         getRequestUrl() + '/meal?id=' + menu, // URL vers un contrôleur PHP
//         this.com.bind(this)
//     );
// }
//
// Commande.prototype.com = function(response) {
//
//   var tab = [response.QuantityInStock, response.Name, response.SalePrice, response.Id];
//
//   saveDataToDomStorage('adress', tab);
//
// var key =  loadDataFromDomStorage('adress');
//
// console.log(key);
// var qua = parseInt(this.qu.val());
//
// var prix = parseFloat(response.SalePrice);
//
//
// var result = qua * prix;
// console.log(result);
//
//   if (tab != [] ) {
//     $('.basket-empty').css('display', 'none');
//   } else {
//     $('.basket-empty').css('display', 'block');
//   }
//
//
//   $('<thead>').append('<tr>').append('<th>Quantité</th><th>Produit</th><th>Prix Unitaire</th><th>Prix Total</th>').appendTo('.generic-table');
//
// $(".basket-empty").html(qua);
//
//   $('<tr><td>'+qua+'</td<td>'+key[1]+'</td><td>'+key[2]+'</td><td>'+result+'</td><td><td><button class="button button-cancel small" title="Supprimer larticle" data-meal-id="2"><i class="fa fa-trash"></i></button>').appendTo('.sd');
//
//
//
//
// }
//
// console.log('coucou');
//
// Commande.prototype.ajou = function() {
//      this.but.on('click', this.choix.bind(this));
// }

///////correction





var BasketSession = function()
{
	this.items = [];
	this.load();

};


BasketSession.prototype.add = function(mealId, name, quantity, salePrice, img)
{
	mealId    = parseInt(mealId);
	quantity  = parseInt(quantity);
	salePrice = parseFloat(salePrice);

	for(var index = 0; index < this.items.length; index++)
	{

		if(this.items[index].mealId == mealId)
		{
			this.items[index].quantity += quantity;
			saveDataToDomStorage('panier', this.items);
			this.load();
			return;
		}


	}



	this.items.push(
		{
			mealId    : mealId,
			name      : name,
			quantity  : quantity,
			salePrice : salePrice,
			img 			: img
		});


		saveDataToDomStorage('panier', this.items);
		this.load();

	}



	BasketSession.prototype.load = function()
	{
		this.items = loadDataFromDomStorage('panier');

		if(this.items == null)
		{
			this.items = [];
		}

		var table = $('<table class="generic-table">');
		table.append('<tr><td class="number"><strong>Quantité</strong></td><td><strong>Produit</strong></td><td><strong>Prix Unitaire</strong></td><td><strong>Prix Total</strong></td></tr>');

		for (var i = 0; i < this.items.length; i++) {
			var tr = $('<tr>');

			tr.append('<td class="number">'+this.items[i].quantity+'</td><td><strong>'+this.items[i].name+'</strong></td><td class="number">'+this.items[i].salePrice.toFixed(2)+' €</td><td class="number">'+(this.items[i].salePrice*this.items[i].quantity).toFixed(2)+' €</td><td><button id="small" class="button button-cancel" data-mealId="'+this.items[i].mealId+'"><i class="fa fa-trash"></i></button></td');


			table.append(tr);

		}

		$('#order-summary').html(table);


	}

	BasketSession.prototype.supp = function(mealId) {

		console.log(this.items)
		for (var j = 0; j < this.items.length; j++) {

			if(this.items[j].mealId == mealId)
			{
				this.items.splice(j, 1);
			}
		}

		saveDataToDomStorage('panier', this.items);
		this.load();

	}
