<?php
$baseImage = $_POST['baseImage'];
$baseWidth = $_POST['baseWidth'];
$baseHeight = $_POST['baseHeight'];
$baseName = $_POST['baseName'];
$baseEmail = $_POST['email'];
$file_name = time() . '__' . sanitizeStringForUrl($baseName) . '__' . $baseWidth . '__' . $baseHeight . '__';

$path_user = 'pattern/guest';
if ($baseEmail != '') {
	$path_user = 'pattern/' . $baseEmail;
}
if (!file_exists($path_user)) {
	mkdir($path_user, 0777, true);
}

function sanitizeStringForUrl($string)
{
	$string = strtolower($string);
	$string = html_entity_decode($string);
	$string = str_replace(array('ä', 'ü', 'ö', 'ß'), array('ae', 'ue', 'oe', 'ss'), $string);
	$string = preg_replace('#[^\w\säüöß]#', null, $string);
	$string = preg_replace('#[\s]{2,}#', ' ', $string);
	$string = str_replace(array(' '), array('-'), $string);
	return $string;
}

function save_base64_image($base64_image_string, $output_file_without_extension, $path_with_end_slash = "")
{
	$splited = explode(',', substr($base64_image_string, 5), 2);
	$mime = $splited[0];
	$data = $splited[1];
	$output_file_with_extension = '';
	$mime_split_without_base64 = explode(';', $mime, 2);
	$mime_split = explode('/', $mime_split_without_base64[0], 2);
	if (count($mime_split) == 2) {
		$extension = $mime_split[1];
		if ($extension == 'jpeg') $extension = 'jpg';
		$output_file_with_extension = $output_file_without_extension . '.' . $extension;
	}
	file_put_contents($path_with_end_slash . $output_file_with_extension, base64_decode($data));
	return $output_file_with_extension;
}
save_base64_image($baseImage, $path_user . '/' . $file_name);
$html = '';
$html .= '<img style="width:100%" src="' . $path_user . '/' . $file_name . '.png"><br/><br/>';
$html .= '<div>- Pattern: ' . $baseName . '</div>';
$html .= '<div>- Size: ' . $baseWidth . 'cm x ' . $baseHeight . 'cm</div>';
$html .= '<div>- Created at: ' . date('H:iA d/m/Y') . '</div>';

// echo $html;
/*------------------*/
require_once 'vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML($html, \Mpdf\HTMLParserMode::HTML_BODY);
$mpdf->Output($baseName . '.pdf', 'D');
