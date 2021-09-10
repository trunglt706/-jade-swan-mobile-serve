<div>
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
            <div class="mb-3">
                <button class="btn btn-warning" onclick="genScreenshot();return false;" style="font-size: 13px;">
                    Download PDF
                </button>
            </div>
        </div>
    </div>
    <div class="block-action-btn">
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
</div>
<button class="btn-secondary btn-clear tool-mobile" onclick="$('.handleClear').trigger('click');">
    Clear
</button>
<button class="btn-success btn-fill tool-mobile" onclick="$('.handleFill').trigger('click');">
    Fill
</button>