<div>
    <div class="row">
        <div class="col-12">
            <label class="form-label"><b>Width</b></label>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Feet</label>
                <input type="number" class="form-control handleWidth" value="12" min="0" id="FeetWidth">
            </div>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Inches</label>
                <input type="number" class="form-control" value="0" id="InchesWidth">
            </div>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Cm</label>
                <input type="number" class="form-control" value="366" min="0" id="CMWidth">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <label class="form-label"><b>Height</b></label>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Feet</label>
                <input type="number" class="form-control handleHeight" value="8" min="0" id="FeetHeight">
            </div>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Inches</label>
                <input type="number" class="form-control" value="0" min="0" id="InchesHeight">
            </div>
        </div>
        <div class="col-md-3 col-4">
            <div class="mb-3">
                <label class="form-label">Cm</label>
                <input type="number" class="form-control" value="244" min="0" id="CMHeight">
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