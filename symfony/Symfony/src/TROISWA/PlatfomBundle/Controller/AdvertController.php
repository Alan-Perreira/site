<?php

namespace TROISWA\PlatfomBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class AdvertController extends Controller
{
  public function indexAction($id, $name)
  {
    // $url = $this->get('router')->generate('troiswa_platfom_advert', ['id' => $id, 'name' => $name], UrlGeneratorInterface::ABSOLUTE_URL);
    //
    //
    // $tab = array(
    //   array(
    //     'title'   => 'Recherche développpeur Symfony',
    //     'id'      => 1,
    //     'author'  => 'Alexandre',
    //     'content' => 'Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…',
    //     'date'    => new \Datetime()),
    //   array(
    //     'title'   => 'Mission de webmaster',
    //     'id'      => 2,
    //     'author'  => 'Hugo',
    //     'content' => 'Nous recherchons un webmaster capable de maintenir notre site internet. Blabla…',
    //     'date'    => new \Datetime()),
    //   array(
    //     'title'   => 'Offre de stage webdesigner',
    //     'id'      => 3,
    //     'author'  => 'Mathieu',
    //     'content' => 'Nous proposons un poste pour webdesigner. Blabla…',
    //     'date'    => new \Datetime())
    // );
    $repository = $this->getDoctrine()->getManager()->getRepository('TROISWAPlatfomBundle:Advert');

      $tab = $repository->findAll();

    $content = $this->get('templating')->render('TROISWAPlatfomBundle:Advert:index.html.twig', ["nom" => $name, "id" => $id, 'tab' => $tab]);

    return new Response($content);



  }

}



?>
