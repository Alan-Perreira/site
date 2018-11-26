<?php
class BookingModel {

  public function book($a, $b, $c, $d) {
    $user = new Database();

    $sql = 'INSERT INTO Booking (BookingDate, BookingTime, NumberOfSeats, User_Id, CreationTimestamp) VALUES (?,?,?, ?,NOW())';

    $value = [$a, $b, $c, $d];

    $user->executeSql($sql, $value);
  }


}








 ?>
