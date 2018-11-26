<?php

namespace TROISWA\CommandeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('TROISWACommandeBundle:Default:index.html.twig');
    }
}
