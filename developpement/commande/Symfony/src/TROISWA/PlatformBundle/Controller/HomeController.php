<?php

// src/TROISWA/PlatformBundle/Controller/HomeController.php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Component\HttpFoundation\Response;

class HomeController
{
    public function homeAction()
    {
        return new Response("Notre propre Hello World !");
    }
}
