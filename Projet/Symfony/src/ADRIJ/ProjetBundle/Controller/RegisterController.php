<?php

namespace ADRIJ\ProjetBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use ADRIJ\ProjetBundle\Entity\User;

class RegisterController extends Controller
{
    public function registerAction()
    {
      if(empty($_POST)== false){

        $user = new User();

        $user->setFirstname($_POST["firstName"]);

        $user->setLastname($_POST["lastName"]);

        $user->setMail($_POST["email"]);

        $user->setPassword($_POST["password"]);

        $em = $this->getDoctrine->getManager();

        $em->persist($user);

        $em->flush();

      }





        return $this->render('ADRIJProjetBundle:Register:register.html.twig');
    }
}
