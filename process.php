<?php
$baseImage = $_POST['baseImage'];

$html .= '<img src="' . $baseImage . '">';
$html .= '<div>- Pattern: ' . $request->baseName . '</div>';
$html .= '<div>- Size: ' . $request->baseWidth . 'cm x ' . $request->baseHeight . 'cm</div>';
// echo $html;
// die();
/*------------------*/
require_once __DIR__ . '/vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML($html, \Mpdf\HTMLParserMode::HTML_BODY);
$mpdf->Output('myfile.pdf', 'D');
