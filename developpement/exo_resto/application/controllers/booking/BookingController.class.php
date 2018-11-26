<?php
class BookingController {


    public function httpGetMethod(Http $http, array $queryFields)
    {


    }

    public function httpPostMethod(Http $http, array $formFields)
    {
      if(empty($_POST) == false) {
        $b = $_SESSION['user']['Id'];
        var_dump($b);

        $users = new BookingModel();
        $users->book($_POST['bookingYear'].'-'.$_POST['bookingMonth'].'-'.$_POST['bookingDay'], $_POST['bookingHour'].':'.$_POST['bookingMinute'], $_POST['numberOfSeats'], $b);


      }

    }


}











 ?>
