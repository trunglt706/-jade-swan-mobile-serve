<?php
include('help.php');
$list_colors = list_colors();
?>
<div data-v-1a96ae98="" class="colors-container">
        <?php
        foreach ($list_colors as $name => $color) {
        ?>
                <div data-v-1a96ae98="" class="color-circle-container">
                        <button data-v-1a96ae98="" class="color-circle" data-tippy-content="<?= $name ?>" data-name="<?= $name ?>" style="background: <?= $color ?>;"></button>
                </div>
        <?php
        } ?>
</div>