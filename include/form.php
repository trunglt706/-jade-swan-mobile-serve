<div class="row">
    <div class="col-md-3 col-4">
        <label class="form-label"><b>Width</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="366" min="0" id="CMWidth" style="font-size: 13px;">
        </div>
    </div>
    <div class="col-md-3 col-4">
        <label class="form-label"><b>Height</b> <small>(Cm)</small></label>
        <div class="mb-3">
            <input type="number" class="form-control" value="244" min="0" id="CMHeight" style="font-size: 13px;">
        </div>
    </div>
    <div class="col-md-3 col-4">
        <label class="form-label">&nbsp;</label>
        <div class="mb-3" style="text-align: right">
            <button class="btn btn-danger tool-mobile btn-pdf" id="handle-submit" style="font-size: 13px;">
                PDF
            </button>
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
</form>
<button class="btn-secondary btn-clear tool-mobile" onclick="$('.handleClear').trigger('click');">
    Clear
</button>
<button class="btn-success btn-fill tool-mobile" onclick="$('.handleFill').trigger('click');">
    Fill
</button>

<div class="setting-element hide">
    <div class="row">
        <div class="col-md-3 col-6">
            <label class="form-label"><b>Chiều ngang khối</b> <small>(Cm)</small></label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="width-element" style="font-size: 13px;">
            </div>     
        </div>
        <div class="col-md-3 col-6">
            <label class="form-label"><b>Chiều cao khối</b> <small>(Cm)</small></label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="height-element" style="font-size: 13px;">
            </div>     
        </div>
        <div class="col-md-3 col-6">
            <label class="form-label"><b>Vị trí khối</b> <small>(ngang)</small></label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="position-x-element" style="font-size: 13px;">
            </div>     
        </div>
        <div class="col-md-3 col-6">
            <label class="form-label"><b>Vị trí khối</b> <small>(dọc)</small></label>
            <div class="mb-3">
                <input type="number" class="form-control" value="0" min="0" id="position-y-element" style="font-size: 13px;">
            </div>     
        </div>
    </div>
</div>

<div class="list-btn">
    <button class="btn btn-secondary" id="add-doors">Cửa đi</button>
    <button class="btn btn-secondary" id="add-window">Cửa sổ</button>
    <button class="btn btn-secondary" id="add-power-socket">Ổ cắm điện</button>
    <button class="btn btn-secondary" id="add-picture-frames">Khung tranh</button>
    <button class="btn btn-danger" id="delete">Xóa</button>
</div>
<br>

