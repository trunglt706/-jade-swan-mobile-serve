<?php
$baseImage = $_POST['baseImage'];
$file_name = 'pattern';

function save_base64_image($base64_image_string, $output_file_without_extension, $path_with_end_slash="" ) {
    $splited = explode(',', substr( $base64_image_string , 5 ) , 2);
    $mime=$splited[0];
    $data=$splited[1];

    $mime_split_without_base64=explode(';', $mime,2);
    $mime_split=explode('/', $mime_split_without_base64[0],2);
    if(count($mime_split)==2)
    {
        $extension=$mime_split[1];
        if($extension=='jpeg')$extension='jpg';
        $output_file_with_extension=$output_file_without_extension.'.'.$extension;
    }
    file_put_contents( $path_with_end_slash . $output_file_with_extension, base64_decode($data) );
    return $output_file_with_extension;
}
save_base64_image($baseImage, $file_name);

$html = '';
$html .= '<img style="width:100%" src="'.$file_name.'.png">';
$html .= '<div>- Pattern: ' . $request->baseName . '</div>';
$html .= '<div>- Size: ' . $request->baseWidth . 'cm x ' . $request->baseHeight . 'cm</div>';

/*------------------*/
require_once __DIR__ . '/vendor/autoload.php';
$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML($html, \Mpdf\HTMLParserMode::HTML_BODY);
$mpdf->Output('myfile.pdf', 'D');
