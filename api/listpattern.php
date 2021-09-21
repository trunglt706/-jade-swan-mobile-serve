<?php
	header('Access-Control-Allow-Origin: *');
	$email = $_GET['email'] ?? '';
	$imag = [];
	foreach(glob("../pattern/". $email . '/*.{jpg,JPG,jpeg,JPEG,png,PNG}',GLOB_BRACE) as $filename){
		$file = basename($filename);
		$split = explode('__', $file);
		$imag[] = [
			'fullname' => $file,
			'name' => $split[1],
			'time' => $split[0],
			'width' => $split[2],
			'height' => $split[3],
			'image' => '/pattern/'.$email.'/'.$file,
			'date' => date('H:iA d/m/Y', $split[0]),
		];
	}
	echo json_encode($imag);
?>