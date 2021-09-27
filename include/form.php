<?php
$data_name = [
    1 => 'PLAN+1_AroBlock01',
    2 => 'PLAN+2_Goblet',
    3 => 'PLAN+3_Picket',
    4 => 'PLAN+4_Plus',
    5 => 'PLAN+5_AroBlock4',
    6 => 'PLAN+6_Bottle',
    7 => 'PLAN+7_Chevron',
    8 => 'PLAN+8_Diamond',
    9 => 'PLAN+9_Dart',
    10 => 'PLAN+10_Fish',
    23 => 'Goblet-001',
    24 => 'Picket-001',
    25 => 'Picket-001',
    26 => 'Picket-001',
    27 => 'Picket-001',
    28 => 'Picket-001',
    29 => 'Picket-001',
    30 => 'Picket-001',
    31 => 'Picket-001',
    32 => 'Picket-001',
    33 => 'Picket-001',
    34 => 'Picket-001',
    35 => 'Picket-001',
    36 => 'Picket-001',
    37 => 'Picket-001',
];
$title = $data_name[$_GET['id']];
$email = $_GET['email'] ?? '';
?>

<div class="row">
    <div class="col-md-3 col-6">
        <label class="form-label"><b>Width</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="1112" min="0" id="CMWidth" style="font-size: 13px;">
        </div>
    </div>
    <div class="col-md-3 col-6">
        <label class="form-label"><b>Height</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="698" min="0" id="CMHeight" style="font-size: 13px;">
        </div>
    </div>
    <div class="setting-element hide row" style="width:50%">
        <div class="col-md-6 col-6">
            <label class="form-label">Width element</label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="width-element" style="font-size: 13px;">
            </div>
        </div>
        <div class="col-md-6 col-6">
            <label class="form-label">Height element</label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="height-element" style="font-size: 13px;">
            </div>
        </div>
    </div>
</div>
<div class="block-action-btn" style="display: none;">
    <div class="row">
        <div class="col-md-3">
            <div class="mb-3">
                <button type="button" class="btn handleClear">Clear</button>
            </div>
        </div>
        <div class="col-md-3">
            <div class="mb-3">
                <button type="button" class="btn btn-success handleFill">Fill</button>
            </div>
        </div>
    </div>
</div>
<form id="submit-form" action="/process.php" method="POST">
    <input type="hidden" name="baseImage" value="">
    <input type="hidden" name="baseWidth" value="1112">
    <input type="hidden" name="baseHeight" value="698">
    <input type="hidden" name="baseName" value="<?php echo $title; ?>">
    <input type="hidden" name="email" value="<?php echo $email; ?>">
    <input type="hidden" name="baseColor" value="">
    <input type="hidden" name="baseType" value="download">
</form>
<div class="tool-right">
    <button class="btn-design btn-clear tool-mobile" onclick="$('.handleClear').trigger('click');">
        Clear
    </button>
    <button class="btn-design btn-fill tool-mobile" onclick="$('.handleFill').trigger('click');">
        Fill
    </button>
    <button class="btn btn-design tool-mobile btn-pdf" id="handle-submit" style="font-size: 13px;">
        PDF
    </button>
    <!-- <button class="btn-design btn tool-mobile btn-save" id="handle-save" style="font-size: 13px;">
        Save
    </button> -->
</div>

<div class="list-btn">
    <span class="text-center action" id="add-doors">Main door</span>
    <span class="text-center action" id="add-window">Window</span>
    <span class="text-center action" id="add-power-socket">Sockets</span>
    <span class="text-center action" id="add-picture-frames">Picture</span>
    <span class="text-center action" id="delete">Remove</span>
</div>
<br>