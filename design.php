<!DOCTYPE html>
<!-- saved from url=(0075)https://dt.filzfelt.com/c66207c3-850a-4e68-864e-d0b766f92235/aro-1-001/edit -->
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Design Tool</title>
    <link rel="stylesheet" type="text/css" href="style/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="style/css/mystyle.css">
    <style type="text/css">
        html2canvas {
            width: 100px !important;
            height: 200px !important;
        }
    </style>
</head>

<body>
    <div id="app" class="filzfelt">
        <!---->
        <div class="main">
            <div class="container">
                <div class="editor row">
                    <div class="main col-md-7 col-sm-12 pt-4">
                        <div id="pdf">
                            <div class="label-switch mb-2">
                                <label class="alt-font"><b>Mẫu pattern</b></label>
                            </div>
                            <?php
                            $filename = './include/item' . $_GET['id'] . '.php';
                            include($filename);
                            ?>
                        </div>
                        <div class="pt-4 sidebar">
                            <?php include('./include/form.php') ?>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 colors pt-4">
                        <label class="alt-font"><b>Colors <span class="color-selected"></span></b> </label>
                        <div><br></div>
                        <?php include('./include/color.php') ?>
                    </div>
                </div>
                <!---->
            </div>
        </div>
        <!---->
    </div>
    <script src="style/js/jquery.min.js"></script>
    <script src="style/js/bootstrap.bundle.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="style/js/myscript.js"></script>
</body>

</html>