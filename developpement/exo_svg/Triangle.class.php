<?php

class Triangle extends Shape {

	public $points;
	public $fill;
	public $opacity;
	
	public function __construct($points, $fill, $opacity)
	{
		parent::__construct('', '',$points, $fill, $opacity);

        $this->points = $points;
		    $this->fill = $fill ;
        $this->opacity = $opacity;

	}
}




?>
