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