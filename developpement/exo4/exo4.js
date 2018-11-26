// 'use strict'
// var ht;
// var tva = 20/100;
// var remise = 30/100;
// var ttc = ht + tva;
// var ttcF = ttc/remise;
// parseInt('ttc');
// ht = parseInt(window.prompt('Quel est votre montant'));
// var oui = window.prompt('Voulez vous une remise de 20% ?');
//
// if(oui === oui || yes === yes) {
//   document.write(ttcF + '%');
// } else {
//   document.write("Aucune remise n'a été appliquée" }


const TAUX_DE_TVA = 20;
var pourcentage;
var montantTVA;
var montantTTC;

var montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
var remise = window.prompt('Souhaitez-vous une remise ?');


if (remise == 'oui' || remise == 'yes') {
	pourcentage = parseFloat(window.prompt('Montant de la remise en % :'));
    montantHT = montantHT - (montantHT * pourcentage / 100);
}


montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');
