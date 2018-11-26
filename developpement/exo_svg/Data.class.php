<?php

class Rectangle {

	public $x;
	public $y;
	public $width;
	public $height;
	public $fill;
	public $opacity;


    public function __construct($x, $y, $width, $height, $fill, $opacity)
	{
		$this->x = $x;
		$this->y = $y;
		$this->width = $width;
		$this->height = $height ;
		$this->fill = $fill;
		$this->opacity = $opacity;

	}

    public function setPosition($x, $y) {
		$this->x = $x;
		$this->x = $x;
	}

	public function setSize($width, $height) {
		$this->width = $width;
		$this->height = $height ;
	}

	public function setColor($fill) {
		$this->fill = $fill;
	}

}



?>
