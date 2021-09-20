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
                        <a class="btn btn-info back-home" href="https://pplusdesign.com/danh-muc-san-pham/patterns/">
                            <svg style="width:20px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 438.483 438.483" xml:space="preserve">
                                <g>
                                    <g>
                                        <path d="M431.168,230.762c-23.552-75.776-98.304-127.488-187.904-129.024V13.162c0-4.096-3.584-7.68-7.68-7.68
			c-1.536,0-3.072,0.512-4.608,1.536L3.136,171.882c-3.584,2.56-4.096,7.168-1.536,10.752c0.512,0.512,1.024,1.024,1.536,1.536
			l227.84,163.84c3.584,2.56,8.192,1.536,10.752-1.536c1.024-1.536,1.536-3.072,1.536-4.608v-88.064
			c55.296,0,101.888,26.112,118.272,65.536c13.824,33.792,2.56,70.144-30.208,100.352c-3.072,3.072-3.584,7.68-0.512,10.752
			c1.536,1.536,3.584,2.56,5.632,2.56h6.144c1.536,0,3.072-0.512,4.096-1.536C421.952,381.802,454.208,304.49,431.168,230.762z"></path>
                                    </g>
                                </g>
                            </svg>
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
                            <?php
<<<<<<< HEAD
                            $filename = 'include/item' . $_GET['id'] . '.php';
=======
                            $filename = './include/item/item' . $_GET['id'] . '.php';
>>>>>>> bab73552140fb78b102a8b96c12ca45790a8113d
                            include($filename);
                            ?>
                            <div class="text-danger mt-2">Fill in you wall's dimension</div>
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
    <script src="/style/js/myscript.js"></script>
</body>

</html>