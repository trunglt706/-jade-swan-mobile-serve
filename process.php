<?php
	$baseImage = $_POST['baseImage'];

	$html = '<h1>Hello World</h1>';
	$html .= '<img src="'.$baseImage.'">';
	// echo $html;
	// die();
	/*------------------*/
	require_once __DIR__ . '/vendor/autoload.php';
	$mpdf = new \Mpdf\Mpdf();
	$mpdf->WriteHTML($html,\Mpdf\HTMLParserMode::HTML_BODY);
	$mpdf->Output('myfile.pdf','D');
?>