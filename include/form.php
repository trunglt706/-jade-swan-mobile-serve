<?php
$data_name = [
    1 => 'ARO 1-001',
    2 => 'ARO 2-001',
    3 => 'Picket-001',
    4 => 'Goblet-001',
    5 => 'ARO 3-001',
    6 => 'ARO 4-001',
    7 => 'Bottle-001',
    8 => 'Fish-001',
    9 => 'Hourglass-001',
    10 => 'Plus-001',
    11 => 'Rectangle-002',
    12 => 'Triangle 60-001',
    13 => 'Triangle 90-003'
];
$title = $data_name[$_GET['id']];
?>

<div class="row">
    <div class="col-md-3 col-6">
        <label class="form-label"><b>Width</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="366" min="0" id="CMWidth" style="font-size: 13px;">
        </div>
    </div>
    <div class="col-md-3 col-6">
        <label class="form-label"><b>Height</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="244" min="0" id="CMHeight" style="font-size: 13px;">
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
                <button type="button" class="btn btn-secondary handleClear">Clear</button>
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
    <input type="hidden" name="baseWidth" value="366">
    <input type="hidden" name="baseHeight" value="244">
    <input type="hidden" name="baseName" value="<?php echo $title; ?>">
</form>
<div class="tool-right">
    <button class="btn-secondary btn-clear tool-mobile" onclick="$('.handleClear').trigger('click');">
        Clear
    </button>
    <button class="btn-success btn-fill tool-mobile" onclick="$('.handleFill').trigger('click');">
        Fill
    </button>
    <button class="btn btn-danger tool-mobile btn-pdf" id="handle-submit" style="font-size: 13px;">
        PDF
    </button>
    <!-- <button class="btn btn-secondary tool-mobile btn-share" id="handle-share" style="font-size: 13px;">
        Share
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