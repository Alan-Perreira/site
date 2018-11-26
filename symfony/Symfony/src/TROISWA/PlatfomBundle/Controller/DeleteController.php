<?php

namespace TROISWA\PlatfomBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;



class DeleteController extends Controller
{
  public function deleteAction($id)
  {

    $content = $this->get('templating')->render('TROISWAPlatfomBundle:Delete:delete.html.twig', ["id" => $id] );

    return new Response($content);



  }

}



?>
