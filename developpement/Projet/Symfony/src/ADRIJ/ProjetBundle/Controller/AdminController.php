<?php

namespace ADRIJ\ProjetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AdminController extends Controller
{
    public function adminAction()
    {
        return $this->render('ADRIJProjetBundle:Admin:admin.html.twig');
    }
}
