<?php

// Creation de la fonction pour appeler mon css et le js dans le wordpresse
function addCss(){
wp_enqueue_style('moncss' , get_template_directory_uri().'/css/wolf-gang.css', '', '1.5', 'all');
wp_enqueue_script('monjs', get_template_directory_uri().'/js/wolf-gang.js', '', '2.2', true);
}

//declare ma fonction

add_action('wp_enqueue_scripts', 'addCss');



function wolfAddMenu(){
// on demande à utiliser le menus
add_theme_support('menus');
// on crée 2 emplacements (ou plus) de menus, 2 paremètre à chaque fois
// identifiant unique (en minuscules)
// desription qu'on retrouve dabs l'adminastration des menus
register_nav_menu('primary', 'menu primaire');
register_nav_menu('secondary', 'menu secondaire');
}
// on appelle la fonction qui active les menus, au moment de l'initialisation du thème (init)
add_action('init', 'wolfAddMenu');

// image qu'on peut mettre partout
add_theme_support('custom-header');

//image à la Une
add_theme_support('post-thumbnails');
