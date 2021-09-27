<?php
$baseImage = $_POST['baseImage'];
$baseWidth = $_POST['baseWidth'];
$baseHeight = $_POST['baseHeight'];
$baseName = $_POST['baseName'];
$baseColor = $_POST['baseColor'];
$baseEmail = $_POST['email'];
$file_name = time() . '__' . sanitizeStringForUrl($baseName) . '__' . $baseWidth . '__' . $baseHeight . '__';
$arr_color = (json_decode($baseColor, 1));
$arr_color = array_count_values($arr_color);

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

$image = $path_user . '/' . $file_name . '.png';

$html = '<div style="">';
$html .= '<div style="border:1px solid; margin-bottom:20px;"><img src="' . $image . '" alt="' . $baseName . '"/></div>';

$html .= '<div><img src="https://pplusdesign.com/wp-content/uploads/2021/09/LOGO-PPLUS-icon1.png" alt="PLAN +">';
$html .= '<div style="margin-top:20px;"><b>- Pattern Name:</b> ' . $baseName . '</div>';
$html .= '<div><b>- Overall Wall Dimension:</b> ' . number_format($baseWidth) . 'cm x ' . number_format($baseHeight) . 'cm</div>';
$html .= '<div><b>- Date:</b> ' . date('H:iA d/m/Y') . '</div>';
if (!empty($arr_color)) {
	$html .= '<div><b>- Quantity:</b></div>';
	foreach ($arr_color as $key => $item) {
		$html .= '<div style="margin-top:10px;">';
		$html .= '<div style="
					width: 30px;
				    height: 20px;
				    background: ' . $key . ';
				    display: inline-block;
				    float:left;
				"></div>';
		$html .= '<div>&nbsp;&nbsp;&nbsp;(' . $item . ') ' . $key . '</div>';
		$html .= '</div>';
	}
	$html .= '<div></div>';
}
$html .= '<div><b>- Importance:</b> The actual color of the material may have a slight difference. It should be reviewed before making order</div>';
$html .= '<div><br></div>';
$html .= '<div>Thank you for your design</div>';
$html .= '<div>Please let us know if you have inquiry: <span style="color:green">hi@pplusdesign.com</span></div>';
$html .= '</div></div>';

// echo $html;
// die;
/*------------------*/
require_once 'vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML($html);
$mpdf->Output($baseName . '.pdf', 'D');
