<?php

namespace TROISWA\PlatfomBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use TROISWA\PlatfomBundle\Entity\Advert;



class AddController extends Controller
{
  public function addAction()
  {
    $advert = new Advert();

    $advert->setTitle('Recherche développeur Symfony.');
    $advert->setAuthor('Alexandre');
    $advert->setContent("Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…");


    $em = $this->getDoctrine()->getManager();

    $em->persist($advert);

    $em->flush();

    $content = $this->get('templating')->render('TROISWAPlatfomBundle:Add:add.html.twig');

    return new Response($content);



  }

}



?>
