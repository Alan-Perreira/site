<?php

namespace TROISWA\CommandeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CommandeController extends Controller
{
    public function indexAction()
    {
      $repository = $this->getDoctrine()->getManager()->getRepository('TROISWACommandeBundle:Home');

      $advert = $repository->find($id);

        return $this->render('TROISWACommandeBundle:Home:home.html.twig', ['advert' => $advert]);
    }
}

?>
