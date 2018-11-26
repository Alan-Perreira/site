<?php

namespace TROISWA\PlatfomBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
  public function indexAction()
  {
    return $this->render('TROISWAPlatfomBundle:Default:index.html.twig');
  }

  public function helloAction()
  {
    return $this->render('TROISWAPlatfomBundle:Hello:hello.html.twig');

  }

  public function page2Action()
  {
    return $this->render('TROISWAPlatfomBundle:Page2:page2.html.twig');

  }
  public function testAction($param)
 {
   return $this->render('TROISWAPlatfomBundle:Test:test.html.twig', ["param" => $param]);

 }
}
