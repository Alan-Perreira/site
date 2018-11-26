<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wolfy</title>
    <?php wp_head(); ?>
  </head>
  <body>
    <h1>Wolf Gang ! <?php bloginfo( 'name' ); ?></h1>
    <header class="header-main">
      <a href="#"><?php bloginfo('description'); ?>
      <img class="logo" src='<?php header_image(); ?>' alt='image'></a>
      <div class="container">
        <nav class="nav-main">
          <?php wp_nav_menu(array('theme_location'=>'primary')); ?>

        </nav>

      </div>
    </header>
    <main>
      <?php
        if (have_posts()):
          while(have_posts()):
// the_post() nous ramène les article
            the_post();
            the_title();

          endwhile;
        endif;



       ?>
    </main>
    <footer>
      <nav>
      <?php wp_nav_menu(array('theme_location'=>'secondary')); ?>
      </nav>
    </footer>

    <?php wp_footer(); ?>
  </body>
</html>
