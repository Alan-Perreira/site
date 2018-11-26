//Je demande a l'utilisateur de rentrer un chiffre de 1 a 10
//Si il choisi 1 je lui montre les table de 1 Si il choisit 10 je lui montre de 1 a 10

/* mes premiers codes n'oublie jamais

  var num2 = 2;
  var num3 = 3;
  var num4 = 4;
  var num5 = 5;
  var num6 = 6;
  var num7 = 7;
  var num8 = 8;
  var num9 = 9;
  var num10 = 10;

var num;
do {
  num = parseFloat(window.prompt("Saisi la taille des multiplications que t'aimerai"));
}while(isNaN(num) === true)

document.write("<table>");
 var result;
 var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var i = 0;
 for (i = 0; i < num1.length; i++) {
    if (num == 2) {
     result =  num1[i]* num;
      document.write("<tr>"+result+" </tr>");
   }
   else if (num == 3) {
     result =  num1[i]* num2;
    document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
      document.write("<tr> "+result+" </tr>");
    }
    else if (num == 4) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num;
     document.write("<tr> "+result+" </tr>");
   }
    else if (num == 5) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
      document.write("<tr> "+result+" </tr>");
    }
    else if (num == 6) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
     document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num5;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
     document.write("<tr> "+result+" </tr>");
    }
    else if (num == 7) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num5;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num6;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
      document.write("<tr> "+result+" </tr>");

    }
    else if (num == 8) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num5;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num6;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num7;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
      document.write("<tr> "+result+" </tr>");
   }
    else if (num == 9) {
      result =  num1[i]* num2;
     document.write("<tr> "+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr> "+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num5;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num6;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num7;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num8;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num;
      document.write("<tr><td> "+result+" </tr</td>");
   }
    else if (num == 10) {
      result =  num1[i]* num2;
     document.write("<tr>"+result+" </tr>");
     result =  num1[i]* num3;
   document.write("<tr>"+result+" </tr>");
    result =  num1[i]* num4;
     document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num5;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num6;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num7;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num8;
      document.write("<tr> "+result+" </tr>");
      result =  num1[i]* num9;
      document.write("<tr><td> "+result+" </tr></td>");
      result = num1[i] * num ;
     document.write("<tr><td>"+result+" </tr></td>");
    }
  }
  document.write("</table>");
*/
var num;
do {
  num = parseFloat(window.prompt("Entrez la taille de multiplicateur que vous voulez"));
}while(isNaN(num) === true)

document.write('<table>');

	for (var x = 1; x <= num; x++) {
    	document.write('<tr>');

        for(var j = 1; j <= num; j++) {
        	var result = x * j;
            if (x == j) {
            	document.write('<td class="same">'+ result +'</td>');
            } else {
            	document.write('<td>'+ result +'</td>');
            }
        }
        document.write('</tr>');
    }


document.write('</table>');
