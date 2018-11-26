<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'Wolfy');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'troiswa');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' ;U:n}1/mYK5S_3@^]l`_gp>uf~]LpL,MPkm8~&w5tq|<EW|$mC!X!NV4w1YIL6x');
define('SECURE_AUTH_KEY',  'O>ox7:6=R;!U{sVbjFPair[}hW Rs RO8%SDW9MgjoO}*XJwu~^$ww1N<}#pw_^t');
define('LOGGED_IN_KEY',    '^HJ;?@wy(2%I[uMSpa+#<_c>GlV/GSGZe2@B85omD?z?fgVegDg<bcu`Ko5>T!{2');
define('NONCE_KEY',        '^]6dH8e#]YvMij8hNs=-cZ,ychu(HBb-6tV6=;SA~&B$efa9rw[hS?ZBoXFx^&~G');
define('AUTH_SALT',        '2+;t3-LB]4O@B G^U+DcYNe&61WiWSA=$Y~LH{^H`BhbX>m9QRqa9Z7 S$gWlI}3');
define('SECURE_AUTH_SALT', 'nDm +gA`9rh(>*t}Kxb8_K|#Y;FW?PssrkUABa-slV0&q_$$evo,V(7_Z&u`28jF');
define('LOGGED_IN_SALT',   'pmrkhs9y(KYx~]phU1(;@Ua6XaK0FKdZ~AK`!+;q,B_`D3/hOQGhuz!#c~?n=Z2C');
define('NONCE_SALT',       '/t*f5Rr ]D#gLeUaDlzUE^!rKR0dlx<1%T*V*T#:!5l%[3Wg!Ayx}u--ys%OsY/`');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');