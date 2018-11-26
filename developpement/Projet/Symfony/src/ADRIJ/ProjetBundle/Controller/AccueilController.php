<?php

namespace ADRIJ\ProjetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AccueilController extends Controller
{
    public function accueilAction()
    {
        return $this->render('ADRIJProjetBundle:Accueil:accueil.html.twig');
    }
}
