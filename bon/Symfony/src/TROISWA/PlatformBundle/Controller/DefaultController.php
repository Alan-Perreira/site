<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('TROISWAPlatformBundle:Default:index.html.twig');
    }
}
