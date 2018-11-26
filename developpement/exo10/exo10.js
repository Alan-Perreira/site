var course = ["pomme", "concombre", "choux", "poire", "fraise", "banane"]
// course.push("frambroise");
// console.log(course);
// course.splice(1,1);
// console.log(course);
// course.splice(0,course.length);
// console.log(course);
// console.log(course.length);
/*
var courses = function liste() {
course.push("framboise", "chocolat", "croisant", "pain");
var user = window.prompt("Entrer un nom de course");
course.push(user);
course.splice(0, course.length);
}
courses();
console.log(course);
*//////////////////////////////////////////////////////////*//////*/
// var produit = window.prompt("Entrer un nom de course");
//
// function addItem(produit) {
//   course.push(produit);
// }
//
// addItem(produit);
// console.log(course);
//
// function sup(item) {
//   var index = course.indexOf(item);
//   course.splice(index, 1);
// }
//
//
// function supAll() {
//   course.splice(0, course.length);
//   // course = [];
// }
//
// function affiche() {
//   console.log(course);
// }
//
//
// sup('fraise');
// console.log(course);
// supAll();
//
// affiche();
/*////////////////////////////////////////////////////////////*/





var shoppingList = new Array();


function addItem(item)
{
	shoppingList.push(item);
}

function displayShoppingList() {
	console.log('La liste contient ' + shoppingList.length + ' produit(s).');
	console.log(shoppingList);
}

function removeItem(item){

	var index = shoppingList.indexOf(item);

    if (index == -1) {
    	console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {

    	shoppingList.splice(index,1);

    }

}

function removeAllItems()
{
	shoppingList = new Array();
}

addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');
addItem('couteau pour le chat');

displayShoppingList();

removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));

displayShoppingList();

removeAllItems();
displayShoppingList();
