const ty_le = 2.5;

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
  $("path").on("click", function () {
    $(this).attr("fill", colorSeleted);
  });
  $("polyline").on("click", function () {
    $(this).attr("fill", colorSeleted);
  });
  $(".handleClear").on("click", function () {
    $("polygon").attr("fill", "#FFF");
    $("path").attr("fill", "#FFF");
    $("polyline").attr("fill", "#FFF");
  });
  $(".handleFill").on("click", function () {
    $("polygon").attr("fill", colorSeleted);
    $("path").attr("fill", colorSeleted);
    $("polyline").attr("fill", colorSeleted);
  });

  /*WIDTH*/

  $("#CMWidth").keyup(function () {
    handleCMWidth($(this).val());
  });
  $("#CMWidth").on("change", function () {
    handleCMWidth($(this).val());
  });
  let width_pattern_before_change = Number($("#CMWidth").val()) * ty_le;
  function handleCMWidth(val) {
    /*Set value input element drag when zoom*/
    let width_pattern = width_pattern_before_change;
    let new_width_pattern = Number(val);
    /*each*/
    $("svg rect").each(function (index) {
      let width_element = Number($(this).attr("width"));
      let new_width_element = (
        (new_width_pattern * width_element) /
        width_pattern
      ).toFixed(2);
      $(this).attr("width", new_width_element);
    });
    width_pattern_before_change = Number(val);
    /*----*/

    let CMWidth = Number(val);
    $("#CMWidth").val(CMWidth);
    $('input[name="baseWidth"]').val(CMWidth);

    let calWidth = CMWidth * 0.3937 * ty_le;
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
    // $("rect").attr("width", Number(calWidth));
    // $("rect").attr("height", Number(arrSize[3]));

    return false;
  }

  /*HEIGHT*/
  $("#CMHeight").keyup(function () {
    handleCMHeight($(this).val());
  });
  $("#CMHeight").on("change", function () {
    handleCMHeight($(this).val());
  });

  let height_pattern_before_change = Number($("#CMHeight").val()) * ty_le;
  function handleCMHeight(val) {
    /*Set value input element drag when zoom*/
    let height_pattern = height_pattern_before_change;
    let new_height_pattern = Number(val);
    /*each*/
    $("svg rect").each(function (index) {
      let height_element = Number($(this).attr("height"));
      let new_height_element = (
        (new_height_pattern * height_element) /
        height_pattern
      ).toFixed(2);
      $(this).attr("height", new_height_element);
    });
    height_pattern_before_change = Number(val);
    /*----*/
    let CMHeight = Number(val);

    $("#CMHeight").val(CMHeight);
    $('input[name="baseHeight"]').val(CMHeight);

    let calHeight = CMHeight * 0.3937 * ty_le;
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
    // $("rect").not(".draggable").attr("width", Number(arrSize[2]));
    // $("rect").not(".draggable").attr("height", Number(calHeight));

    return false;
  }

  /**/
  $(document).on("click", "#handle-submit", function () {
    let get_color;
    let arr_color = [];
    $("svg#mainsvg polygon").each(function (index) {
      get_color = $(this).attr("fill");
      if (get_color != "#fff" && get_color != "rgb(0, 0, 0)") {
        arr_color.push(get_color);
      }
    });
    // let uniqueArray = arr_color.filter(function (item, pos, self) {
    //   return self.indexOf(item) == pos;
    // });
    $("input[name=baseColor").val(JSON.stringify(arr_color));

    convert_img("download");
  });

  function convert_img(type = "download") {
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
      let result_image = canvas.toDataURL("image/png");
      $("input[name=baseType").val(type);
      $("input[name=baseImage").val(result_image);
      $("#submit-form").submit();
    };
  }

  $(document).on("click", "#handle-save", function () {
    convert_img("save");
  });
});

/*PATTERN*/
let x;
let y;
let width;
let height;
let id;
let group;

var width_svg;
var height_svg;
var width_element_selected;
var height_element_selected;

$(document).on("click", "#add-doors", function () {
  if ($(".group-1-item-1").hasClass("hide")) {
    $(".group-1-item-1").removeClass("hide");
    $(".group-1-item-1").show();
    return false;
  }
  if ($(".group-1-item-2").hasClass("hide")) {
    $(".group-1-item-2").removeClass("hide");
    $(".group-1-item-2").show();
    return false;
  }
  if ($(".group-1-item-3").hasClass("hide")) {
    $(".group-1-item-3").removeClass("hide");
    $(".group-1-item-3").show();
    return false;
  }
  if ($(".group-1-item-4").hasClass("hide")) {
    $(".group-1-item-4").removeClass("hide");
    $(".group-1-item-4").show();
    return false;
  }
  if ($(".group-1-item-5").hasClass("hide")) {
    $(".group-1-item-5").removeClass("hide");
    $(".group-1-item-5").show();
    return false;
  }
  alert("Max elements is 5");
  return false;
});

$(document).on("click", "#add-window", function () {
  if ($(".group-2-item-1").hasClass("hide")) {
    $(".group-2-item-1").removeClass("hide");
    $(".group-2-item-1").show();
    return false;
  }
  if ($(".group-2-item-2").hasClass("hide")) {
    $(".group-2-item-2").removeClass("hide");
    $(".group-2-item-2").show();
    return false;
  }
  if ($(".group-2-item-3").hasClass("hide")) {
    $(".group-2-item-3").removeClass("hide");
    $(".group-2-item-3").show();
    return false;
  }
  if ($(".group-2-item-4").hasClass("hide")) {
    $(".group-2-item-4").removeClass("hide");
    $(".group-2-item-4").show();
    return false;
  }
  if ($(".group-2-item-5").hasClass("hide")) {
    $(".group-2-item-5").removeClass("hide");
    $(".group-2-item-5").show();
    return false;
  }
  alert("Max elements is 5");
  return false;
});

$(document).on("click", "#add-power-socket", function () {
  if ($(".group-3-item-1").hasClass("hide")) {
    $(".group-3-item-1").removeClass("hide");
    $(".group-3-item-1").show();
    return false;
  }
  if ($(".group-3-item-2").hasClass("hide")) {
    $(".group-3-item-2").removeClass("hide");
    $(".group-3-item-2").show();
    return false;
  }
  if ($(".group-3-item-3").hasClass("hide")) {
    $(".group-3-item-3").removeClass("hide");
    $(".group-3-item-3").show();
    return false;
  }
  if ($(".group-3-item-4").hasClass("hide")) {
    $(".group-3-item-4").removeClass("hide");
    $(".group-3-item-4").show();
    return false;
  }
  if ($(".group-3-item-5").hasClass("hide")) {
    $(".group-3-item-5").removeClass("hide");
    $(".group-3-item-5").show();
    return false;
  }
  alert("Max elements is 5");
  return false;
});

$(document).on("click", "#add-picture-frames", function () {
  if ($(".group-4-item-1").hasClass("hide")) {
    $(".group-4-item-1").removeClass("hide");
    $(".group-4-item-1").show();
    return false;
  }
  if ($(".group-4-item-2").hasClass("hide")) {
    $(".group-4-item-2").removeClass("hide");
    $(".group-4-item-2").show();
    return false;
  }
  if ($(".group-4-item-3").hasClass("hide")) {
    $(".group-4-item-3").removeClass("hide");
    $(".group-4-item-3").show();
    return false;
  }
  if ($(".group-4-item-4").hasClass("hide")) {
    $(".group-4-item-4").removeClass("hide");
    $(".group-4-item-4").show();
    return false;
  }
  if ($(".group-4-item-5").hasClass("hide")) {
    $(".group-4-item-5").removeClass("hide");
    $(".group-4-item-5").show();
    return false;
  }
  alert("Max elements is 5");
  return false;
});

$(document).on("click", "#delete", function () {
  let item_x, item_y, item_width, item_height;
  if (group == 1) {
    item_x = 5;
    item_y = 10;
    item_width = 40;
    item_height = 78;
  }
  if (group == 2) {
    item_x = 5;
    item_y = 10;
    item_width = 20;
    item_height = 48;
  }
  if (group == 3) {
    item_x = 5;
    item_y = 10;
    item_width = 2;
    item_height = 4;
  }
  if (group == 4) {
    item_x = 5;
    item_y = 10;
    item_width = 20;
    item_height = 20;
  }
  $(".group-" + group + "-item-" + id).addClass("hide");
  $(".group-" + group + "-item-" + id).hide();
  $(".group-" + group + "-item-" + id).attr("x", item_x);
  $(".group-" + group + "-item-" + id).attr("y", item_y);
  $(".group-" + group + "-item-" + id).attr("width", item_width);
  $(".group-" + group + "-item-" + id).attr("height", item_height);
  return false;
});

$(document).on("click", ".group-1", function () {
  group = 1;
  $(".group-1").css("stroke", "#000");
  $(".group-2").css("stroke", "#000");
  $(".group-3").css("stroke", "#000");
  $(".group-4").css("stroke", "#000");
  $(this).css("stroke", "#dc3545");
  x = $(this).attr("x") * 2.54;
  y = $(this).attr("y") * 2.54;
  width = $(this).attr("width") * 2.54;
  height = $(this).attr("height") * 2.54;

  id = $(this).data("id");
  $(".setting-element").removeClass("hide");
  $("#width-element").val(Math.round(width / ty_le));
  $("#height-element").val(Math.round(height / ty_le));
  $("#position-x-element").val(Math.round(x));
  $("#position-y-element").val(Math.round(y));
});

$(document).on("click", ".group-2", function () {
  group = 2;
  $(".group-1").css("stroke", "#000");
  $(".group-2").css("stroke", "#000");
  $(".group-3").css("stroke", "#000");
  $(".group-4").css("stroke", "#000");
  $(this).css("stroke", "#dc3545");
  x = $(this).attr("x") * 2.54;
  y = $(this).attr("y") * 2.54;
  width = $(this).attr("width") * 2.54;
  height = $(this).attr("height") * 2.54;

  id = $(this).data("id");
  $(".setting-element").removeClass("hide");
  $("#width-element").val(Math.round(width / ty_le));
  $("#height-element").val(Math.round(height / ty_le));
  $("#position-x-element").val(Math.round(x));
  $("#position-y-element").val(Math.round(y));
});

$(document).on("click", ".group-3", function () {
  group = 3;
  $(".group-1").css("stroke", "#000");
  $(".group-2").css("stroke", "#000");
  $(".group-3").css("stroke", "#000");
  $(".group-4").css("stroke", "#000");
  $(this).css("stroke", "#dc3545");
  x = $(this).attr("x") * 2.54;
  y = $(this).attr("y") * 2.54;
  width = $(this).attr("width") * 2.54;
  height = $(this).attr("height") * 2.54;

  id = $(this).data("id");
  $(".setting-element").removeClass("hide");
  $("#width-element").val(Math.round(width / ty_le));
  $("#height-element").val(Math.round(height / ty_le));
  $("#position-x-element").val(Math.round(x));
  $("#position-y-element").val(Math.round(y));
});

$(document).on("click", ".group-4", function () {
  group = 4;
  $(".group-1").css("stroke", "#000");
  $(".group-2").css("stroke", "#000");
  $(".group-3").css("stroke", "#000");
  $(".group-4").css("stroke", "#000");
  $(this).css("stroke", "#dc3545");
  x = $(this).attr("x") * 2.54;
  y = $(this).attr("y") * 2.54;
  width = $(this).attr("width") * 2.54;
  height = $(this).attr("height") * 2.54;

  id = $(this).data("id");
  $(".setting-element").removeClass("hide");
  $("#width-element").val(Math.round(width / ty_le));
  $("#height-element").val(Math.round(height / ty_le));
  $("#position-x-element").val(Math.round(x));
  $("#position-y-element").val(Math.round(y));
});

$("#width-element").keyup(function () {
  handleWidthElement($(this).val());
});
$("#width-element").on("change", function () {
  handleWidthElement($(this).val());
});
function handleWidthElement(value) {
  $(".group-" + group + "-item-" + id).attr(
    "width",
    Math.round((value * ty_le) / 2.54)
  );
}

$("#height-element").keyup(function () {
  handleHeightElement($(this).val());
});
$("#height-element").on("change", function () {
  handleHeightElement($(this).val());
});
function handleHeightElement(value) {
  $(".group-" + group + "-item-" + id).attr(
    "height",
    Math.round((value * ty_le) / 2.54)
  );
}

$("#position-x-element").keyup(function () {
  handlePositionXElement($(this).val());
});
$("#position-x-element").on("change", function () {
  handlePositionXElement($(this).val());
});
function handlePositionXElement(value) {
  $(".group-" + group + "-item-" + id).attr(
    "x",
    Math.round((value * ty_le) / 2.54)
  );
}

$("#position-y-element").keyup(function () {
  handlePositionYElement($(this).val());
});
$("#position-y-element").on("change", function () {
  handlePositionYElement($(this).val());
});
function handlePositionYElement(value) {
  $(".group-" + group + "-item-" + id).attr(
    "y",
    Math.round((value * ty_le) / 2.54)
  );
}

function set_size_svg(x, y) {
  let size_svg = $("#mainsvg").attr("viewBox");
  width_svg = size_svg.split(" ")[2];
  height_svg = size_svg.split(" ")[3];

  width_element_selected = x;
  height_element_selected = y;
}

$(document).mouseup(function (e) {
  for (let index = 1; index < 5; index++) {
    var container = $(".group-" + index);
    var setting = $(".setting-element");
    var width_element = $("#width-element");
    var height_element = $("#height-element");
    var x_element = $("#position-x-element");
    var y_element = $("#position-y-element");

    if (
      !container.is(e.target) &&
      !width_element.is(e.target) &&
      !height_element.is(e.target) &&
      !x_element.is(e.target) &&
      !y_element.is(e.target) &&
      container.has(e.target).length === 0
    ) {
      setting.addClass("hide");
    }
  }
});

function makeDraggable(evt) {
  var svg = evt.target;
  var selectedElement, offset;
  svg.addEventListener("mousedown", startDrag);
  svg.addEventListener("mousemove", drag);
  svg.addEventListener("mouseup", endDrag);
  svg.addEventListener("mouseleave", endDrag);
  svg.addEventListener("touchstart", startDrag);
  svg.addEventListener("touchmove", drag);
  svg.addEventListener("touchend", endDrag);
  svg.addEventListener("touchleave", endDrag);
  svg.addEventListener("touchcancel", endDrag);

  function startDrag(evt) {
    if (evt.target.classList.contains("draggable")) {
      selectedElement = evt.target;
      set_size_svg(
        parseFloat(selectedElement.getAttributeNS(null, "width")),
        parseFloat(selectedElement.getAttributeNS(null, "height"))
      );

      offset = getMousePosition(evt);
      offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
      offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
    }
  }
  function drag(evt) {
    if (selectedElement) {
      evt.preventDefault();
      var coord = getMousePosition(evt);
      let coord_x = coord.x - offset.x;
      let coord_y = coord.y - offset.y;

      let set_value_x = coord.x - offset.x;
      let set_value_y = coord.y - offset.y;

      if (coord_x < 0) {
        set_value_x = 0;
      }
      if (coord_x > width_svg - width_element_selected) {
        set_value_x = width_svg - width_element_selected;
      }
      if (coord_y < 0) {
        set_value_y = 0;
      }
      if (coord_y > height_svg - height_element_selected) {
        set_value_y = height_svg - height_element_selected;
      }

      selectedElement.setAttributeNS(null, "x", set_value_x);
      selectedElement.setAttributeNS(null, "y", set_value_y);
    }
  }
  function endDrag(evt) {
    selectedElement = null;
  }

  function getMousePosition(evt) {
    var CTM = svg.getScreenCTM();
    if (evt.touches) {
      evt = evt.touches[0];
    }
    return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d,
    };
  }
}
