$(document).ready(function () {
  let colorSeleted = "#FFF";
  $(".colors-container .color-circle-container").on("click", function () {
    let style_color = $(this).find("button").css("background-color");
    $(".color-selected").css("background-color", style_color);
    colorSeleted = style_color;
  });
  $("polygon").on("click", function () {
    $(this).attr("fill", colorSeleted);
  });
  $(".handleClear").on("click", function () {
    $("polygon").attr("fill", "#FFF");
  });
  $(".handleFill").on("click", function () {
    $("polygon").attr("fill", colorSeleted);
  });

  /*WIDTH*/
  $("#FeetWidth").keyup(function () {
    handleFeetWidth($(this).val());
  });
  $("#FeetWidth").on("change", function () {
    handleFeetWidth($(this).val());
  });

  function handleFeetWidth(val) {
    let FeetWidth = Number(val);
    let InchesWidth = Number($("#InchesWidth").val());
    let CMWidth = (FeetWidth * 12 + InchesWidth) * 2.54;

    $("#FeetWidth").val(FeetWidth);
    $("#InchesWidth").val(InchesWidth);
    $("#CMWidth").val(CMWidth.toFixed(2));

    let calWidth = FeetWidth * 12 + InchesWidth;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(calWidth) +
      " " +
      Number(arrSize[3]);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(calWidth));
    $("rect").attr("height", Number(arrSize[3]));

    return false;
  }

  $("#InchesWidth").keyup(function () {
    handleInchesWidth($(this).val());
  });
  $("#InchesWidth").on("change", function () {
    handleInchesWidth($(this).val());
  });

  function handleInchesWidth(val) {
    if (Number(val) == 13) {
      let FeetWidth = Number($("#FeetWidth").val()) + 1;
      let InchesWidth = 0;
      let CMWidth = (FeetWidth * 12 + InchesWidth) * 2.54;

      $("#FeetWidth").val(FeetWidth);
      $("#InchesWidth").val(InchesWidth);
      $("#CMWidth").val(CMWidth.toFixed(2));

      let calWidth = FeetWidth * 12 + InchesWidth;
      let viewBox = $("svg").attr("viewBox");
      let arrSize = viewBox.split(" ");
      let joinSize =
        Number(arrSize[0]) +
        " " +
        Number(arrSize[1]) +
        " " +
        Number(calWidth) +
        " " +
        Number(arrSize[3]);
      $("svg").attr("viewBox", joinSize);
      $("rect").attr("width", Number(calWidth));
      $("rect").attr("height", Number(arrSize[3]));

      return false;
    }
    if (Number(val) == -1) {
      let FeetWidth = Number($("#FeetWidth").val()) - 1;
      if (FeetWidth < 0) {
        return false;
      }
      let InchesWidth = 0;
      let CMWidth = (FeetWidth * 12 + InchesWidth) * 2.54;

      $("#FeetWidth").val(FeetWidth);
      $("#InchesWidth").val(InchesWidth);
      $("#CMWidth").val(CMWidth.toFixed(2));

      let calWidth = FeetWidth * 12 + InchesWidth;
      let viewBox = $("svg").attr("viewBox");
      let arrSize = viewBox.split(" ");
      let joinSize =
        Number(arrSize[0]) +
        " " +
        Number(arrSize[1]) +
        " " +
        Number(calWidth) +
        " " +
        Number(arrSize[3]);
      $("svg").attr("viewBox", joinSize);
      $("rect").attr("width", Number(calWidth));
      $("rect").attr("height", Number(arrSize[3]));

      return false;
    }
    let FeetWidth = Number($("#FeetWidth").val());
    let InchesWidth = Number(val);
    let CMWidth = (FeetWidth * 12 + InchesWidth) * 2.54;

    $("#FeetWidth").val(FeetWidth);
    $("#InchesWidth").val(InchesWidth);
    $("#CMWidth").val(CMWidth.toFixed(2));

    let calWidth = FeetWidth * 12 + InchesWidth;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(calWidth) +
      " " +
      Number(arrSize[3]);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(calWidth));
    $("rect").attr("height", Number(arrSize[3]));

    return false;
  }

  $("#CMWidth").keyup(function () {
    handleCMWidth($(this).val());
  });
  $("#CMWidth").on("change", function () {
    handleCMWidth($(this).val());
  });

  function handleCMWidth(val) {
    let CMWidth = Number(val);
    let FeetWidth = Math.trunc(CMWidth / 30.48);
    let InchesWidth = (CMWidth / 30.48 - FeetWidth) * 12;

    $("#FeetWidth").val(FeetWidth);
    $("#InchesWidth").val(InchesWidth.toFixed(2));
    $("#CMWidth").val(CMWidth);
    $('input[name="baseWidth"]').val(CMWidth);

    let calWidth = FeetWidth * 12 + InchesWidth;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(calWidth) +
      " " +
      Number(arrSize[3]);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(calWidth));
    $("rect").attr("height", Number(arrSize[3]));

    return false;
  }

  /*HEIGHT*/
  $("#FeetHeight").keyup(function () {
    handleFeetHeight($(this).val());
  });
  $("#FeetHeight").on("change", function () {
    handleFeetHeight($(this).val());
  });

  function handleFeetHeight(val) {
    let FeetHeight = Number(val);
    let InchesHeight = Number($("#InchesHeight").val());
    let CMHeight = (FeetHeight * 12 + InchesHeight) * 2.54;

    $("#FeetHeight").val(FeetHeight);
    $("#InchesHeight").val(InchesHeight);
    $("#CMHeight").val(CMHeight.toFixed(2));

    let calHeight = FeetHeight * 12 + InchesHeight;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(arrSize[2]) +
      " " +
      Number(calHeight);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(arrSize[2]));
    $("rect").attr("height", Number(calHeight));

    return false;
  }

  $("#InchesHeight").keyup(function () {
    handleInchesHeight($(this).val());
  });
  $("#InchesHeight").on("change", function () {
    handleInchesHeight($(this).val());
  });

  function handleInchesHeight(val) {
    if (Number(val) == 13) {
      let FeetHeight = Number($("#FeetHeight").val()) + 1;
      let InchesHeight = 0;
      let CMHeight = (FeetHeight * 12 + InchesHeight) * 2.54;

      $("#FeetHeight").val(FeetHeight);
      $("#InchesHeight").val(InchesHeight);
      $("#CMHeight").val(CMHeight.toFixed(2));

      let calHeight = FeetHeight * 12 + InchesHeight;
      let viewBox = $("svg").attr("viewBox");
      let arrSize = viewBox.split(" ");
      let joinSize =
        Number(arrSize[0]) +
        " " +
        Number(arrSize[1]) +
        " " +
        Number(arrSize[2]) +
        " " +
        Number(calHeight);
      $("svg").attr("viewBox", joinSize);
      $("rect").attr("width", Number(arrSize[2]));
      $("rect").attr("height", Number(calHeight));

      return false;
    }
    if (Number(val) == -1) {
      let FeetHeight = Number($("#FeetHeight").val()) - 1;
      if (FeetHeight < 0) {
        return false;
      }
      let InchesHeight = 0;
      let CMHeight = (FeetHeight * 12 + InchesHeight) * 2.54;

      $("#FeetHeight").val(FeetHeight);
      $("#InchesHeight").val(InchesHeight);
      $("#CMHeight").val(CMHeight.toFixed(2));

      let calHeight = FeetHeight * 12 + InchesHeight;
      let viewBox = $("svg").attr("viewBox");
      let arrSize = viewBox.split(" ");
      let joinSize =
        Number(arrSize[0]) +
        " " +
        Number(arrSize[1]) +
        " " +
        Number(arrSize[2]) +
        " " +
        Number(calHeight);
      $("svg").attr("viewBox", joinSize);
      $("rect").attr("width", Number(arrSize[2]));
      $("rect").attr("height", Number(calHeight));

      return false;
    }
    let FeetHeight = Number($("#FeetHeight").val());
    let InchesHeight = Number(val);
    let CMHeight = (FeetHeight * 12 + InchesHeight) * 2.54;

    $("#FeetHeight").val(FeetHeight);
    $("#InchesHeight").val(InchesHeight);
    $("#CMHeight").val(CMHeight.toFixed(2));

    let calHeight = FeetHeight * 12 + InchesHeight;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(arrSize[2]) +
      " " +
      Number(calHeight);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(arrSize[2]));
    $("rect").attr("height", Number(calHeight));

    return false;
  }

  $("#CMHeight").keyup(function () {
    handleCMHeight($(this).val());
  });
  $("#CMHeight").on("change", function () {
    handleCMHeight($(this).val());
  });

  function handleCMHeight(val) {
    let CMHeight = Number(val);
    let FeetHeight = Math.trunc(CMHeight / 30.48);
    let InchesHeight = (CMHeight / 30.48 - FeetHeight) * 12;

    $("#FeetHeight").val(FeetHeight);
    $("#InchesHeight").val(InchesHeight.toFixed(2));
    $("#CMHeight").val(CMHeight);
    $('input[name="baseHeight"]').val(CMHeight);

    let calHeight = FeetHeight * 12 + InchesHeight;
    let viewBox = $("svg").attr("viewBox");
    let arrSize = viewBox.split(" ");
    let joinSize =
      Number(arrSize[0]) +
      " " +
      Number(arrSize[1]) +
      " " +
      Number(arrSize[2]) +
      " " +
      Number(calHeight);
    $("svg").attr("viewBox", joinSize);
    $("rect").attr("width", Number(arrSize[2]));
    $("rect").attr("height", Number(calHeight));

    return false;
  }

  /**/
  $(document).on("click", "#handle-submit", function () {
    convert_img();
  });
  function convert_img() {
    var svg = document.querySelector("svg#mainsvg");
    var svgData = new XMLSerializer().serializeToString(svg);

    var canvas = document.createElement("canvas");
    var svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    var ctx = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      // console.log( canvas.toDataURL( "image/png" ) );
      let result_image = canvas.toDataURL("image/png");
      $("input[name=baseImage").val(result_image);
      $("#submit-form").submit();
    };
  }
});

/*PATTERN*/
let x;
let y;
let width;
let height;
let id;
let group;

$(document).on('click', '#add-doors', function(){
  if($('.group-1-item-1').hasClass('hide')){
    $('.group-1-item-1').removeClass('hide');
    $('.group-1-item-1').show();
    return false;
  }
  if($('.group-1-item-2').hasClass('hide')){
    $('.group-1-item-2').removeClass('hide');
    $('.group-1-item-2').show();
    return false;
  }
  if($('.group-1-item-3').hasClass('hide')){
    $('.group-1-item-3').removeClass('hide');
    $('.group-1-item-3').show();
    return false;
  }
  if($('.group-1-item-4').hasClass('hide')){
    $('.group-1-item-4').removeClass('hide');
    $('.group-1-item-4').show();
    return false;
  }
  if($('.group-1-item-5').hasClass('hide')){
    $('.group-1-item-5').removeClass('hide');
    $('.group-1-item-5').show();
    return false;
  }
  alert('Số lượng tối đa 5');
  return false;
})

$(document).on('click', '#add-window', function(){
  if($('.group-2-item-1').hasClass('hide')){
    $('.group-2-item-1').removeClass('hide');
    $('.group-2-item-1').show();
    return false;
  }
  if($('.group-2-item-2').hasClass('hide')){
    $('.group-2-item-2').removeClass('hide');
    $('.group-2-item-2').show();
    return false;
  }
  if($('.group-2-item-3').hasClass('hide')){
    $('.group-2-item-3').removeClass('hide');
    $('.group-2-item-3').show();
    return false;
  }
  if($('.group-2-item-4').hasClass('hide')){
    $('.group-2-item-4').removeClass('hide');
    $('.group-2-item-4').show();
    return false;
  }
  if($('.group-2-item-5').hasClass('hide')){
    $('.group-2-item-5').removeClass('hide');
    $('.group-2-item-5').show();
    return false;
  }
  alert('Số lượng tối đa 5');
  return false;
})

$(document).on('click', '#add-power-socket', function(){
  if($('.group-3-item-1').hasClass('hide')){
    $('.group-3-item-1').removeClass('hide');
    $('.group-3-item-1').show();
    return false;
  }
  if($('.group-3-item-2').hasClass('hide')){
    $('.group-3-item-2').removeClass('hide');
    $('.group-3-item-2').show();
    return false;
  }
  if($('.group-3-item-3').hasClass('hide')){
    $('.group-3-item-3').removeClass('hide');
    $('.group-3-item-3').show();
    return false;
  }
  if($('.group-3-item-4').hasClass('hide')){
    $('.group-3-item-4').removeClass('hide');
    $('.group-3-item-4').show();
    return false;
  }
  if($('.group-3-item-5').hasClass('hide')){
    $('.group-3-item-5').removeClass('hide');
    $('.group-3-item-5').show();
    return false;
  }
  alert('Số lượng tối đa 5');
  return false;
})

$(document).on('click', '#add-picture-frames', function(){
  if($('.group-4-item-1').hasClass('hide')){
    $('.group-4-item-1').removeClass('hide');
    $('.group-4-item-1').show();
    return false;
  }
  if($('.group-4-item-2').hasClass('hide')){
    $('.group-4-item-2').removeClass('hide');
    $('.group-4-item-2').show();
    return false;
  }
  if($('.group-4-item-3').hasClass('hide')){
    $('.group-4-item-3').removeClass('hide');
    $('.group-4-item-3').show();
    return false;
  }
  if($('.group-4-item-4').hasClass('hide')){
    $('.group-4-item-4').removeClass('hide');
    $('.group-4-item-4').show();
    return false;
  }
  if($('.group-4-item-5').hasClass('hide')){
    $('.group-4-item-5').removeClass('hide');
    $('.group-4-item-5').show();
    return false;
  }
  alert('Số lượng tối đa 5');
  return false;
})

$(document).on('click', '#delete', function(){
  let item_x, item_y, item_width, item_height;
  if(group == 1){
    item_x = 5;
    item_y = 10;
    item_width = 40;
    item_height = 78;
  }
  if(group == 2){
    item_x = 5;
    item_y = 10;
    item_width = 20;
    item_height = 48;
  }
  if(group == 3){
    item_x = 5;
    item_y = 10;
    item_width = 2;
    item_height = 4;
  }
  if(group == 4){
    item_x = 5;
    item_y = 10;
    item_width = 20;
    item_height = 20;
  }
  $('.group-'+group+'-item-'+id).addClass('hide');
  $('.group-'+group+'-item-'+id).hide();
  $('.group-'+group+'-item-'+id).attr('x', item_x);
  $('.group-'+group+'-item-'+id).attr('y', item_y);
  $('.group-'+group+'-item-'+id).attr('width', item_width);
  $('.group-'+group+'-item-'+id).attr('height', item_height);
  return false;

})

$(document).on('click','.group-1', function(){
  group = 1;
  $('.group-1').css('stroke','#000');
  $(this).css('stroke','#dc3545');
  x = $(this).attr('x') * 2.54;
  y = $(this).attr('y') * 2.54;
  width = $(this).attr('width') * 2.54;
  height = $(this).attr('height') * 2.54;

  id = $(this).data('id');
  $('.setting-element').removeClass('hide');
  $('#width-element').val(Math.round(width));
  $('#height-element').val(Math.round(height));
  $('#position-x-element').val(Math.round(x));
  $('#position-y-element').val(Math.round(y));
})

$(document).on('click','.group-2', function(){
  group = 2;
  $('.group-2').css('stroke','#000');
  $(this).css('stroke','#dc3545');
  x = $(this).attr('x') * 2.54;
  y = $(this).attr('y') * 2.54;
  width = $(this).attr('width') * 2.54;
  height = $(this).attr('height') * 2.54;

  id = $(this).data('id');
  $('.setting-element').removeClass('hide');
  $('#width-element').val(Math.round(width));
  $('#height-element').val(Math.round(height));
  $('#position-x-element').val(Math.round(x));
  $('#position-y-element').val(Math.round(y));
})

$(document).on('click','.group-3', function(){
  group = 3;
  $('.group-3').css('stroke','#000');
  $(this).css('stroke','#dc3545');
  x = $(this).attr('x') * 2.54;
  y = $(this).attr('y') * 2.54;
  width = $(this).attr('width') * 2.54;
  height = $(this).attr('height') * 2.54;

  id = $(this).data('id');
  $('.setting-element').removeClass('hide');
  $('#width-element').val(Math.round(width));
  $('#height-element').val(Math.round(height));
  $('#position-x-element').val(Math.round(x));
  $('#position-y-element').val(Math.round(y));
})

$(document).on('click','.group-4', function(){
  group = 4;
  $('.group-4').css('stroke','#000');
  $(this).css('stroke','#dc3545');
  x = $(this).attr('x') * 2.54;
  y = $(this).attr('y') * 2.54;
  width = $(this).attr('width') * 2.54;
  height = $(this).attr('height') * 2.54;

  id = $(this).data('id');
  $('.setting-element').removeClass('hide');
  $('#width-element').val(Math.round(width));
  $('#height-element').val(Math.round(height));
  $('#position-x-element').val(Math.round(x));
  $('#position-y-element').val(Math.round(y));
})


$("#width-element").keyup(function () {
    handleWidthElement($(this).val());
});
$("#width-element").on("change", function () {
    handleWidthElement($(this).val());
});
function handleWidthElement(value){
  $('.group-'+group+'-item-'+id).attr('width', Math.round(value / 2.54) )
}

$("#height-element").keyup(function () {
    handleHeightElement($(this).val());
});
$("#height-element").on("change", function () {
    handleHeightElement($(this).val());
});
function handleHeightElement(value){
  $('.group-'+group+'-item-'+id).attr('height', Math.round(value / 2.54) )
}

$("#position-x-element").keyup(function () {
    handlePositionXElement($(this).val());
});
$("#position-x-element").on("change", function () {
    handlePositionXElement($(this).val());
});
function handlePositionXElement(value){
  $('.group-'+group+'-item-'+id).attr('x', Math.round(value / 2.54) )
}

$("#position-y-element").keyup(function () {
    handlePositionYElement($(this).val());
});
$("#position-y-element").on("change", function () {
    handlePositionYElement($(this).val());
});
function handlePositionYElement(value){
  $('.group-'+group+'-item-'+id).attr('y', Math.round(value / 2.54) )
}