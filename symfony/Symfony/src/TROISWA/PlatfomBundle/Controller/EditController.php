<?php

namespace TROISWA\PlatfomBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;



class EditController extends Controller
{
  public function editAction($id)
  {

    $content = $this->get('templating')->render('TROISWAPlatfomBundle:Edit:edit.html.twig', ["id" => $id]);

    return new Response($content);



  }

}



?>
