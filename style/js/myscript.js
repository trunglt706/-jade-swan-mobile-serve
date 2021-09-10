$(document).ready(function(){
	let colorSeleted = "#FFF";
    $(".colors-container .color-circle-container").on('click',function(){
        let style_color = $(this).find('button').css("background-color");
        $('.color-selected').css('background-color',style_color);
        colorSeleted = style_color;
    })
    $('polygon').on('click',function(){
    	$(this).attr('fill', colorSeleted);
    })
    $('.handleClear').on('click', function(){
    	$("polygon").attr('fill', '#FFF');
    })
    $('.handleFill').on('click', function(){
    	$("polygon").attr('fill', colorSeleted);
    })

    /*WIDTH*/
    $("#FeetWidth").keyup(function(){
    	handleFeetWidth($(this).val());
	});
	$("#FeetWidth").on('change',function(){
    	handleFeetWidth($(this).val());
	});

	function handleFeetWidth(val){
		let FeetWidth = Number(val);
		let InchesWidth = Number($('#InchesWidth').val());
		let CMWidth = ( FeetWidth * 12 + InchesWidth ) * 2.54;

		$('#FeetWidth').val(FeetWidth);
	 	$('#InchesWidth').val(InchesWidth);
	 	$('#CMWidth').val(CMWidth.toFixed(2));

	 	let calWidth = FeetWidth * 12 + InchesWidth;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' + Number(calWidth) + ' ' + Number(arrSize[3]);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(calWidth));
	 	$('rect').attr('height', Number(arrSize[3]));

	 	return false;
	}

	$("#InchesWidth").keyup(function(){
    	handleInchesWidth($(this).val());
	});
	$("#InchesWidth").on('change',function(){
    	handleInchesWidth($(this).val());
	});

	function handleInchesWidth(val){
		if(Number(val) == 13){
			let FeetWidth = Number($('#FeetWidth').val()) + 1;
			let InchesWidth = 0;
			let CMWidth = ( FeetWidth * 12 + InchesWidth ) * 2.54;

			$('#FeetWidth').val(FeetWidth);
		 	$('#InchesWidth').val(InchesWidth);
		 	$('#CMWidth').val(CMWidth.toFixed(2));

		 	let calWidth = FeetWidth * 12 + InchesWidth;
		 	let viewBox = $('svg').attr('viewBox');
		 	let arrSize =  viewBox.split(' ');
		 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' + Number(calWidth) + ' ' + Number(arrSize[3]);
		 	$('svg').attr('viewBox', joinSize);
		 	$('rect').attr('width', Number(calWidth));
		 	$('rect').attr('height', Number(arrSize[3]));

		 	return false;
		}
		if(Number(val) == -1){
			let FeetWidth = Number($('#FeetWidth').val()) - 1;
			if(FeetWidth < 0){return false;}
			let InchesWidth = 0;
			let CMWidth = ( FeetWidth * 12 + InchesWidth ) * 2.54;

			$('#FeetWidth').val(FeetWidth);
		 	$('#InchesWidth').val(InchesWidth);
		 	$('#CMWidth').val(CMWidth.toFixed(2));

		 	let calWidth = FeetWidth * 12 + InchesWidth;
		 	let viewBox = $('svg').attr('viewBox');
		 	let arrSize =  viewBox.split(' ');
		 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' + Number(calWidth) + ' ' + Number(arrSize[3]);
		 	$('svg').attr('viewBox', joinSize);
		 	$('rect').attr('width', Number(calWidth));
		 	$('rect').attr('height', Number(arrSize[3]));

		 	return false;
		}
		let FeetWidth = Number($('#FeetWidth').val());
		let InchesWidth = Number(val);
		let CMWidth = ( FeetWidth * 12 + InchesWidth ) * 2.54;

		$('#FeetWidth').val(FeetWidth);
	 	$('#InchesWidth').val(InchesWidth);
	 	$('#CMWidth').val(CMWidth.toFixed(2));

	 	let calWidth = FeetWidth * 12 + InchesWidth;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' + Number(calWidth) + ' ' + Number(arrSize[3]);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(calWidth));
	 	$('rect').attr('height', Number(arrSize[3]));

	 	return false;
	}

	$("#CMWidth").keyup(function(){
    	handleCMWidth($(this).val());
	});
	$("#CMWidth").on('change',function(){
    	handleCMWidth($(this).val());
	});

	function handleCMWidth(val){
		let CMWidth = Number(val);
		let FeetWidth = Math.trunc(CMWidth / 30.48);
		let InchesWidth = (CMWidth / 30.48 - FeetWidth ) * 12;

		$('#FeetWidth').val(FeetWidth);
	 	$('#InchesWidth').val(InchesWidth.toFixed(2));
	 	$('#CMWidth').val(CMWidth);

	 	let calWidth = FeetWidth * 12 + InchesWidth;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' + Number(calWidth) + ' ' + Number(arrSize[3]);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(calWidth));
	 	$('rect').attr('height', Number(arrSize[3]));

	 	return false;
	}

	/*HEIGHT*/
	$("#FeetHeight").keyup(function(){
    	handleFeetHeight($(this).val());
	});
	$("#FeetHeight").on('change',function(){
    	handleFeetHeight($(this).val());
	});

	function handleFeetHeight(val){
		let FeetHeight = Number(val);
		let InchesHeight = Number($('#InchesHeight').val());
		let CMHeight = ( FeetHeight * 12 + InchesHeight ) * 2.54;

		$('#FeetHeight').val(FeetHeight);
	 	$('#InchesHeight').val(InchesHeight);
	 	$('#CMHeight').val(CMHeight.toFixed(2));

	 	let calHeight = FeetHeight * 12 + InchesHeight;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' +  Number(arrSize[2]) + ' ' + Number(calHeight);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(arrSize[2]));
	 	$('rect').attr('height', Number(calHeight));

	 	return false;
	}

	$("#InchesHeight").keyup(function(){
    	handleInchesHeight($(this).val());
	});
	$("#InchesHeight").on('change',function(){
    	handleInchesHeight($(this).val());
	});

	function handleInchesHeight(val){
		if(Number(val) == 13){
			let FeetHeight = Number($('#FeetHeight').val()) + 1;
			let InchesHeight = 0;
			let CMHeight = ( FeetHeight * 12 + InchesHeight ) * 2.54;

			$('#FeetHeight').val(FeetHeight);
		 	$('#InchesHeight').val(InchesHeight);
		 	$('#CMHeight').val(CMHeight.toFixed(2));

		 	let calHeight = FeetHeight * 12 + InchesHeight;
		 	let viewBox = $('svg').attr('viewBox');
		 	let arrSize =  viewBox.split(' ');
		 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' +  Number(arrSize[2]) + ' ' + Number(calHeight);
		 	$('svg').attr('viewBox', joinSize);
		 	$('rect').attr('width', Number(arrSize[2]));
		 	$('rect').attr('height', Number(calHeight));

		 	return false;
		}
		if(Number(val) == -1){
			let FeetHeight = Number($('#FeetHeight').val()) - 1;
			if(FeetHeight < 0){return false;}
			let InchesHeight = 0;
			let CMHeight = ( FeetHeight * 12 + InchesHeight ) * 2.54;

			$('#FeetHeight').val(FeetHeight);
		 	$('#InchesHeight').val(InchesHeight);
		 	$('#CMHeight').val(CMHeight.toFixed(2));

		 	let calHeight = FeetHeight * 12 + InchesHeight;
		 	let viewBox = $('svg').attr('viewBox');
		 	let arrSize =  viewBox.split(' ');
		 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' +  Number(arrSize[2]) + ' ' + Number(calHeight);
		 	$('svg').attr('viewBox', joinSize);
		 	$('rect').attr('width', Number(arrSize[2]));
		 	$('rect').attr('height', Number(calHeight));

		 	return false;
		}
		let FeetHeight = Number($('#FeetHeight').val());
		let InchesHeight = Number(val);
		let CMHeight = ( FeetHeight * 12 + InchesHeight ) * 2.54;

		$('#FeetHeight').val(FeetHeight);
	 	$('#InchesHeight').val(InchesHeight);
	 	$('#CMHeight').val(CMHeight.toFixed(2));

	 	let calHeight = FeetHeight * 12 + InchesHeight;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' +  Number(arrSize[2]) + ' ' + Number(calHeight);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(arrSize[2]));
	 	$('rect').attr('height', Number(calHeight));

	 	return false;
	}

	$("#CMHeight").keyup(function(){
    	handleCMHeight($(this).val());
	});
	$("#CMHeight").on('change',function(){
    	handleCMHeight($(this).val());
	});

	function handleCMHeight(val){
		let CMHeight = Number(val);
		let FeetHeight = Math.trunc(CMHeight / 30.48);
		let InchesHeight = (CMHeight / 30.48 - FeetHeight ) * 12;

		$('#FeetHeight').val(FeetHeight);
	 	$('#InchesHeight').val(InchesHeight.toFixed(2));
	 	$('#CMHeight').val(CMHeight);

	 	let calHeight = FeetHeight * 12 + InchesHeight;
	 	let viewBox = $('svg').attr('viewBox');
	 	let arrSize =  viewBox.split(' ');
	 	let joinSize = Number(arrSize[0]) + ' ' + Number(arrSize[1]) + ' ' +  Number(arrSize[2]) + ' ' + Number(calHeight);
	 	$('svg').attr('viewBox', joinSize);
	 	$('rect').attr('width', Number(arrSize[2]));
	 	$('rect').attr('height', Number(calHeight));

	 	return false;
	}

	/**/

})