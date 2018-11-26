<?php

namespace ADRIJ\ProjetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ADRIJProjetBundle:Default:index.html.twig');
    }
}
