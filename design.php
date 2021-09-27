<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta itemprop="name" content="PLAN +" />
    <meta itemprop="url" content="https://pplusdesign.com" />
    <title>PLAN + &#8211; Giải pháp màu sắc và âm thanh trong nội thất</title>
    <link rel="icon" href="https://pplusdesign.com/wp-content/uploads/2021/09/LOGO-PPLUS-icon1.png" />
    <link rel="stylesheet" type="text/css" href="/style/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/style/css/mystyle.css">
    <style type="text/css">
        html2canvas {
            width: 100px !important;
            height: 200px !important;
        }
    </style>
</head>

<body>
    <div id="app" class="filzfelt">
        <div class="header">
            <a href="https://pplusdesign.com">
                <img src="https://pplusdesign.com/wp-content/uploads/2021/09/LOGO-PPLUS-icon1.png" alt="PLAN +">
            </a>
            <div class="text-uppercase">
                PLAN + | <span>Giải pháp màu sắc và âm thanh trong nội thất</span>
            </div>
        </div>
        <div class="main">
            <div class="container">
                <div class="row mt-2">
                    <div class="col-md-12">
                        <a id="myButton" class="btn btn-design back-home" href="https://pplusdesign.com/san-pham/23-svg/">
                            <img src="https://pplusdesign.com/wp-content/uploads/2021/09/back-arrow.png" alt="back">
                            QUAY LẠI
                        </a>
                    </div>
                </div>
                <div class="editor row mt-2">
                    <div class="main col-md-8 col-sm-12">
                        <div id="pdf">
                            <div class="label-switch mb-2">
                                <label class="alt-font"><b>Mẫu pattern</b></label>
                            </div>
                            <div style="border: 1px solid;">
                                <?php
                                $filename = 'include/item/item' . $_GET['id'] . '.php';
                                include($filename);
                                ?>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm-7">
                                    <div class="text-danger mt-2">Fill in you wall's dimension</div>
                                </div>
                                <div class="col-sm-5 div-pdf" style="text-align: right;">
                                    <button class="btn btn-design btn-pdf" id="handle-submit" style="font-size: 13px;">
                                        Download your design
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="pt-1 sidebar">
                            <?php include('include/form.php') ?>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 colors">
                        <label class="alt-font"><b>Colors <span class="color-selected"></span></b> </label>
                        <div><br></div>
                        <?php include('include/color.php') ?>
                    </div>
                </div>
                <!---->
            </div>
        </div>
        <!---->
    </div>
    <footer id="site-footer" role="contentinfo" itemscope="" itemtype="http://schema.org/WPFooter">
        <div class="container">
            <div class="copyrights">
                <div class="row">
                    <span>
                        <a href="https://pplusdesign.com/" title="Giải pháp màu sắc và âm thanh trong nội thất">
                            PLAN +
                        </a> Copyright © 2021. Bản quyền thuộc về Jadeswan
                    </span>
                </div>
            </div>
        </div>
    </footer>
    <script src="/style/js/jquery.min.js"></script>
    <script src="/style/js/bootstrap.bundle.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script>
        tippy('[data-tippy-content]');
    </script>
    <script src="/style/js/myscript.js"></script>
</body>

</html>